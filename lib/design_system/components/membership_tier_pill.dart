import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _crown = 13;
const double _crownGap = 6;
const double _dotWidth = 14;

/// MembershipTierPill — the loyalty tier capsule (bundle
/// `loyalty/MembershipTierPill.jsx`): a crown, the tier name and an optional
/// discount after a dot separator.
///
/// Built for dark loyalty surfaces only — white text on a 10% white fill — so
/// its colors are fixed rather than taken from the light-surface semantics.
class MembershipTierPill extends StatelessWidget {
  final String membership;
  final String? discountLabel;

  const MembershipTierPill({
    super.key,
    this.membership = 'Regular',
    this.discountLabel,
  });

  @override
  Widget build(BuildContext context) {
    final style = DSTypography.bodyXs.copyWith(color: DSColors.gray0);

    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: DSSpacing.md,
        vertical: DSSpacing.xs,
      ),
      decoration: BoxDecoration(
        color: DSColors.gray0.withValues(alpha: 0.10),
        borderRadius: BorderRadius.circular(DSRadius.full),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(
            PhosphorIconsFill.crown,
            size: _crown,
            color: DSColors.gray0,
          ),
          const SizedBox(width: _crownGap),
          Text(membership, style: style),
          if (discountLabel != null) ...[
            SizedBox(
              width: _dotWidth,
              child: Text('·', textAlign: TextAlign.center, style: style),
            ),
            Text('$discountLabel off', style: style),
          ],
        ],
      ),
    );
  }
}
