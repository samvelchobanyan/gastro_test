import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

enum DSTextInputSize { fixed, floating }

/// TextInput — single-line field with an above-field label, placeholder,
/// helper/error text and optional leading/trailing icons (bundle
/// `inputs/TextInput.jsx`). Fixed height 48 by default; `floating` grows to 56.
///
/// The field border is 1px [DSColors.borderDefault] at rest and grows to 2px on
/// focus (accent, `brand.inputBorderFocus`) or error ([DSColors.statusError]).
///
/// Idiomatic-Flutter I/O — a [controller] and/or [onChanged], not the bundle's
/// React `value`/`onChange` controlled pair. Icons are Phosphor [IconData]
/// (e.g. `PhosphorIconsRegular.user`).
class TextInput extends StatefulWidget {
  final String? label;
  final String? placeholder;
  final String? helperText;
  final bool error;
  final bool enabled;
  final DSTextInputSize size;
  final bool obscureText;
  final IconData? iconLeft;
  final IconData? iconRight;
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;
  final TextInputType? keyboardType;
  final String? restorationId;

  const TextInput({
    super.key,
    this.label,
    this.placeholder,
    this.helperText,
    this.error = false,
    this.enabled = true,
    this.size = DSTextInputSize.fixed,
    this.obscureText = false,
    this.iconLeft,
    this.iconRight,
    this.controller,
    this.onChanged,
    this.keyboardType,
    this.restorationId,
  });

  @override
  State<TextInput> createState() => _TextInputState();
}

class _TextInputState extends State<TextInput> {
  final FocusNode _focusNode = FocusNode();
  bool _focused = false;

  @override
  void initState() {
    super.initState();
    _focusNode.addListener(_onFocusChange);
  }

  @override
  void dispose() {
    _focusNode.removeListener(_onFocusChange);
    _focusNode.dispose();
    super.dispose();
  }

  void _onFocusChange() {
    if (_focused != _focusNode.hasFocus) {
      setState(() => _focused = _focusNode.hasFocus);
    }
  }

  double get _height => switch (widget.size) {
    DSTextInputSize.fixed => DSSizing.inputHeightFixed,
    DSTextInputSize.floating => DSSizing.inputHeightFloating,
  };

  @override
  Widget build(BuildContext context) {
    // Error wins over focus for the border treatment (spec State Matrix).
    final Color borderColor = widget.error
        ? DSColors.statusError
        : _focused
        ? context.brand.inputBorderFocus
        : DSColors.borderDefault;
    final double borderWidth = widget.error || _focused
        ? DSSizing.borderWidthFocus
        : DSSizing.borderWidthDefault;

    final field = TextField(
      controller: widget.controller,
      focusNode: _focusNode,
      enabled: widget.enabled,
      obscureText: widget.obscureText,
      keyboardType: widget.keyboardType,
      onChanged: widget.onChanged,
      restorationId: widget.restorationId,
      cursorColor: context.brand.primary,
      style: DSTypography.body,
      decoration: InputDecoration.collapsed(
        hintText: widget.placeholder,
        hintStyle: DSTypography.body.copyWith(color: DSColors.textTertiary),
      ),
    );

    return Opacity(
      opacity: widget.enabled ? 1 : DSColors.stateDisabledOpacity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          if (widget.label != null) ...[
            Text(
              widget.label!,
              style: DSTypography.withWeight(
                DSTypography.body,
                DSTypography.medium,
              ).copyWith(color: DSColors.textSecondary),
            ),
            const SizedBox(height: DSSpacing.sm),
          ],
          Container(
            height: _height,
            padding: const EdgeInsets.symmetric(
              horizontal: DSSizing.inputPaddingX,
            ),
            decoration: BoxDecoration(
              color: DSColors.bgMain,
              borderRadius: BorderRadius.circular(DSRadius.input),
              border: Border.all(color: borderColor, width: borderWidth),
            ),
            child: Row(
              children: [
                if (widget.iconLeft != null) ...[
                  Icon(
                    widget.iconLeft,
                    size: DSSizing.iconSm,
                    color: DSColors.textTertiary,
                  ),
                  const SizedBox(width: DSSpacing.sm),
                ],
                Expanded(child: field),
                if (widget.iconRight != null) ...[
                  const SizedBox(width: DSSpacing.sm),
                  Icon(
                    widget.iconRight,
                    size: DSSizing.iconSm,
                    color: DSColors.textTertiary,
                  ),
                ],
              ],
            ),
          ),
          if (widget.helperText != null) ...[
            const SizedBox(height: DSSpacing.sm),
            Row(
              children: [
                if (widget.error) ...[
                  Icon(
                    PhosphorIconsRegular.warningCircle,
                    size: DSSizing.iconXs,
                    color: DSColors.textError,
                  ),
                  const SizedBox(width: DSSpacing.xs),
                ],
                Flexible(
                  child: Text(
                    widget.helperText!,
                    style: DSTypography.caption.copyWith(
                      color: widget.error
                          ? DSColors.textError
                          : DSColors.textTertiary,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}
