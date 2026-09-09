import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/button.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _cardWidth = 328;
const double _icon = 48;

/// Wallet — the balance card (bundle `loyalty/Wallet.jsx`): a fixed 328px dark
/// panel with a per-client icon, the balance and a capsule top-up action.
///
/// [balance] arrives pre-formatted; the component does no currency formatting.
/// Title/value treatment matches [LoyaltyPointsCard].
class Wallet extends StatelessWidget {
  final String balance;
  final String title;
  final String buttonLabel;
  final String? iconAsset;
  final VoidCallback? onTopUp;

  const Wallet({
    super.key,
    required this.balance,
    this.title = 'Wallet',
    this.buttonLabel = 'Top Up',
    this.iconAsset,
    this.onTopUp,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _cardWidth,
      padding: const EdgeInsets.all(DSSpacing.base),
      decoration: BoxDecoration(
        color: DSColors.gray900,
        borderRadius: BorderRadius.circular(DSRadius.lg),
      ),
      child: Row(
        children: [
          DSImage(
            asset: iconAsset,
            width: _icon,
            height: _icon,
            borderRadius: BorderRadius.circular(DSRadius.sm),
          ),
          const SizedBox(width: DSSpacing.md),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                // Dark surface — ramp read directly, as in the bundle.
                Text(
                  title,
                  style: DSTypography.bodySm.copyWith(color: DSColors.gray500),
                ),
                Text(
                  balance,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: DSTypography.h1.copyWith(color: DSColors.gray0),
                ),
              ],
            ),
          ),
          const SizedBox(width: DSSpacing.md),
          Button(
            label: buttonLabel,
            onPressed: onTopUp,
            size: DSButtonSize.xs,
            pill: true,
            iconLeft: PhosphorIconsRegular.plus,
          ),
        ],
      ),
    );
  }
}
