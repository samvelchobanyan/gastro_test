import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

/// SectionHeader — an H3 section label with an optional trailing action link
/// (bundle `section-header/SectionHeader.jsx`). E.g. "Vouchers" + "See all".
///
/// The 2026-09 bundle dropped the title from H2/semibold to H3/bold.
class SectionHeader extends StatelessWidget {
  final String title;
  final String? action;
  final VoidCallback? onActionTap;

  const SectionHeader({
    super.key,
    required this.title,
    this.action,
    this.onActionTap,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(child: Text(title, style: DSTypography.h3)),
        if (action != null) ...[
          const SizedBox(width: DSSpacing.md),
          GestureDetector(
            onTap: onActionTap,
            behavior: HitTestBehavior.opaque,
            child: Text(
              action!,
              style: DSTypography.withWeight(
                DSTypography.body,
                DSTypography.semibold,
              ).copyWith(color: context.brand.primary),
            ),
          ),
        ],
      ],
    );
  }
}
