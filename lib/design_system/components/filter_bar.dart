import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Component geometry — local, not a global token.
const double _height = 40;

/// DSFilterChip — a single pill filter (icon + label) with a selected state
/// (bundle `filter/FilterBar.jsx`, which despite the name is one chip, not a
/// bar; the scrolling row is composed by the screen). `DS` prefix avoids the
/// collision with `material.FilterChip`.
///
/// Dumb: [selected] comes in, taps go out via [onPressed]. Selected fills with
/// the brand accent; default sits on the sunken surface.
class DSFilterChip extends StatelessWidget {
  final String label;
  final IconData icon;
  final bool selected;
  final VoidCallback onPressed;

  const DSFilterChip({
    super.key,
    required this.label,
    required this.icon,
    required this.selected,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    final brand = context.brand;
    final Color bg = selected ? brand.primary : DSColors.bgSurfaceSunken;
    final Color fg = selected ? brand.onAccent : DSColors.textSecondary;
    final label = Text(
      this.label,
      style: DSTypography.withWeight(
        DSTypography.body,
        selected ? DSTypography.semibold : DSTypography.medium,
      ).copyWith(color: fg),
    );

    return GestureDetector(
      onTap: onPressed,
      behavior: HitTestBehavior.opaque,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 90),
        height: _height,
        padding: const EdgeInsets.symmetric(horizontal: DSSpacing.md),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(DSRadius.full),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: DSSizing.iconSm, color: fg),
            const SizedBox(width: DSSpacing.sm),
            label,
          ],
        ),
      ),
    );
  }
}
