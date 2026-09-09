import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

enum DSStatusTone { success, error, warning, neutral }

/// StatusPill — a small tonal capsule for binary states: Open / Closed,
/// Active / Inactive, Available / Sold out (bundle `status-pill/StatusPill.jsx`).
///
/// Extracted from [BranchCard] in the 2026-09 bundle, where the badge used to
/// be drawn inline.
class StatusPill extends StatelessWidget {
  final String label;
  final DSStatusTone tone;

  const StatusPill({
    super.key,
    required this.label,
    this.tone = DSStatusTone.success,
  });

  ({Color bg, Color fg}) get _palette => switch (tone) {
    DSStatusTone.success => (bg: DSColors.bgSuccess, fg: DSColors.textSuccess),
    DSStatusTone.error => (bg: DSColors.bgError, fg: DSColors.textError),
    DSStatusTone.warning => (bg: DSColors.bgWarning, fg: DSColors.textWarning),
    DSStatusTone.neutral => (
      bg: DSColors.gray100,
      fg: DSColors.textSecondary,
    ),
  };

  @override
  Widget build(BuildContext context) {
    final p = _palette;
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: DSSpacing.sm,
        vertical: DSSpacing.xxs,
      ),
      decoration: BoxDecoration(
        color: p.bg,
        borderRadius: BorderRadius.circular(DSRadius.full),
      ),
      child: Text(
        label,
        style: DSTypography.withWeight(
          DSTypography.bodyXs,
          DSTypography.bold,
        ).copyWith(color: p.fg),
      ),
    );
  }
}
