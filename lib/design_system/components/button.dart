import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:gastro_test/design_system/theme/ds_brand.dart';

enum DSButtonVariant { primary, secondary, tertiary, destructive }

enum DSButtonSize { lg, md, sm, xs }

/// Button — primary CTA, secondary (outline), tertiary (text), destructive
/// (bundle `Button.jsx`). Heights follow the spec scale 56 / 48 / 40 / 32.
/// Press swaps the fill; `loading` freezes the size and shows a spinner;
/// `onPressed == null` renders the disabled state.
///
/// Icons are Phosphor glyphs passed as [IconData] (e.g.
/// `PhosphorIconsRegular.shoppingCartSimple`).
class Button extends StatefulWidget {
  final String label;
  final VoidCallback? onPressed;
  final DSButtonVariant variant;
  final DSButtonSize size;
  final bool fullWidth;
  final bool loading;
  final IconData? iconLeft;
  final IconData? iconRight;

  const Button({
    super.key,
    required this.label,
    required this.onPressed,
    this.variant = DSButtonVariant.primary,
    this.size = DSButtonSize.md,
    this.fullWidth = false,
    this.loading = false,
    this.iconLeft,
    this.iconRight,
  });

  bool get _enabled => onPressed != null && !loading;

  @override
  State<Button> createState() => _ButtonState();
}

class _ButtonState extends State<Button> {
  bool _pressed = false;

  double get _height => switch (widget.size) {
    DSButtonSize.lg => DSSizing.buttonHeightLg,
    DSButtonSize.md => DSSizing.buttonHeightMd,
    DSButtonSize.sm => DSSizing.buttonHeightSm,
    DSButtonSize.xs => DSSizing.buttonHeightXs,
  };

  double get _padX => switch (widget.size) {
    DSButtonSize.lg => DSSizing.buttonPadLg,
    DSButtonSize.md => DSSizing.buttonPadMd,
    DSButtonSize.sm => DSSizing.buttonPadSm,
    DSButtonSize.xs => DSSizing.buttonPadXs,
  };

  double get _radius =>
      widget.size == DSButtonSize.xs ? DSRadius.sm : DSRadius.md;

  TextStyle get _labelStyle {
    // Type scale has no 13px tier — the smaller sizes use Body (14), semibold.
    final base = widget.size == DSButtonSize.lg || widget.size == DSButtonSize.md
        ? DSTypography.bodyLg
        : DSTypography.body;
    return DSTypography.withWeight(base, DSTypography.semibold);
  }

  _ButtonPalette _palette(DSBrand brand) {
    return switch (widget.variant) {
      DSButtonVariant.primary => _ButtonPalette(
        bg: _pressed ? brand.buttonPrimaryBgActive : brand.buttonPrimaryBg,
        fg: brand.onAccent,
        border: Colors.transparent,
      ),
      DSButtonVariant.secondary => _ButtonPalette(
        bg: _pressed ? brand.subtle : Colors.transparent,
        fg: DSColors.textPrimary,
        border: DSColors.borderDefault,
      ),
      DSButtonVariant.tertiary => _ButtonPalette(
        bg: _pressed ? brand.subtle : Colors.transparent,
        fg: brand.textAccent,
        border: Colors.transparent,
      ),
      DSButtonVariant.destructive => _ButtonPalette(
        bg: _pressed ? DSColors.red600 : DSColors.statusError,
        fg: DSColors.textOnBrand,
        border: Colors.transparent,
      ),
    };
  }

  void _setPressed(bool v) {
    if (widget._enabled && _pressed != v) setState(() => _pressed = v);
  }

  @override
  Widget build(BuildContext context) {
    final p = _palette(context.brand);
    final content = _Content(
      label: widget.label,
      labelStyle: _labelStyle.copyWith(color: p.fg),
      fg: p.fg,
      iconLeft: widget.iconLeft,
      iconRight: widget.iconRight,
      loading: widget.loading,
    );

    return Opacity(
      opacity: widget.onPressed == null && !widget.loading
          ? DSColors.stateDisabledOpacity
          : 1,
      child: GestureDetector(
        onTapDown: (_) => _setPressed(true),
        onTapUp: (_) => _setPressed(false),
        onTapCancel: () => _setPressed(false),
        onTap: widget._enabled ? widget.onPressed : null,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 90),
          height: _height,
          width: widget.fullWidth ? double.infinity : null,
          padding: EdgeInsets.symmetric(horizontal: _padX),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: p.bg,
            borderRadius: BorderRadius.circular(_radius),
            border: Border.all(
              color: p.border,
              width: DSSizing.borderWidthDefault,
            ),
          ),
          child: content,
        ),
      ),
    );
  }
}

class _ButtonPalette {
  final Color bg;
  final Color fg;
  final Color border;
  const _ButtonPalette({
    required this.bg,
    required this.fg,
    required this.border,
  });
}

class _Content extends StatelessWidget {
  final String label;
  final TextStyle labelStyle;
  final Color fg;
  final IconData? iconLeft;
  final IconData? iconRight;
  final bool loading;

  const _Content({
    required this.label,
    required this.labelStyle,
    required this.fg,
    required this.iconLeft,
    required this.iconRight,
    required this.loading,
  });

  @override
  Widget build(BuildContext context) {
    final row = Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (iconLeft != null) ...[
          Icon(iconLeft, size: DSSizing.iconSm, color: fg),
          const SizedBox(width: DSSpacing.sm),
        ],
        Flexible(
          child: Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: labelStyle,
          ),
        ),
        if (iconRight != null) ...[
          const SizedBox(width: DSSpacing.sm),
          Icon(iconRight, size: DSSizing.iconSm, color: fg),
        ],
      ],
    );

    if (!loading) return row;
    // Freeze size: keep the label laid out but invisible, overlay the spinner.
    return Stack(
      alignment: Alignment.center,
      children: [
        Opacity(opacity: 0, child: row),
        SizedBox(
          width: 18,
          height: 18,
          child: CircularProgressIndicator(strokeWidth: 2, color: fg),
        ),
      ],
    );
  }
}
