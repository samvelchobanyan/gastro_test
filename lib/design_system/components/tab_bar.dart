import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

/// One tab: label, the value it selects and an optional leading icon.
typedef DSTabOption<T> = ({String label, T value, IconData? icon});

/// DSTabBar — in-screen view switcher (bundle `tabs/TabBar.jsx`), replacing the
/// bundle's retired `SegmentedControl`.
///
/// Only the bundle's **compact** variant is here: auto-width capsules that sit
/// inline in a scrolling page. The `big` variant (full-width track with a
/// sliding indicator) is not used by any screen we build, so it is left out.
/// Named `DS*` because Material already owns `TabBar`.
class DSTabBar<T> extends StatelessWidget {
  final List<DSTabOption<T>> options;
  final T value;
  final ValueChanged<T> onChanged;

  const DSTabBar({
    super.key,
    required this.options,
    required this.value,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (var i = 0; i < options.length; i++) ...[
          if (i > 0) const SizedBox(width: DSSpacing.sm),
          _tab(context, options[i]),
        ],
      ],
    );
  }

  Widget _tab(BuildContext context, DSTabOption<T> option) {
    final active = option.value == value;
    final fg = active ? context.brand.textAccent : DSColors.gray500;

    return GestureDetector(
      onTap: () => onChanged(option.value),
      behavior: HitTestBehavior.opaque,
      child: Container(
        height: DSSizing.buttonHeightXs,
        padding: const EdgeInsets.symmetric(horizontal: DSSpacing.md),
        decoration: BoxDecoration(
          color: active ? DSColors.gray0 : DSColors.gray100,
          borderRadius: BorderRadius.circular(DSRadius.full),
          border: active
              ? Border.all(
                  color: context.brand.primary,
                  width: DSSizing.borderWidthDefault,
                )
              : null,
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (option.icon != null) ...[
              Icon(option.icon, size: DSSizing.iconXs, color: fg),
              const SizedBox(width: DSSpacing.xs),
            ],
            Text(
              option.label,
              style: DSTypography.bodySemibold.copyWith(color: fg),
            ),
          ],
        ),
      ),
    );
  }
}
