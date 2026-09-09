import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _cardWidth = 128;

/// BuyAgainCard — a vertical product card for re-order rails (bundle
/// `product-cards/BuyAgainCard.jsx`): square photo, product name, then the
/// branch it was bought at.
///
/// Sibling of [FavouriteVerticalCard], which carries a price on the second line
/// instead. Kept as two classes, as the bundle does — the second line differs
/// in content and meaning, not just in text.
class BuyAgainCard extends StatelessWidget {
  final String name;
  final String location;
  final String? imageAsset;
  final VoidCallback? onTap;

  const BuyAgainCard({
    super.key,
    required this.name,
    required this.location,
    this.imageAsset,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: SizedBox(
        width: _cardWidth,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            AspectRatio(
              aspectRatio: 1,
              child: DSImage(
                asset: imageAsset,
                borderRadius: BorderRadius.circular(DSRadius.card),
              ),
            ),
            const SizedBox(height: DSSpacing.sm),
            Text(
              name,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: DSTypography.bodySm,
            ),
            const SizedBox(height: DSSpacing.xxs),
            Row(
              children: [
                const Icon(
                  PhosphorIconsRegular.mapPin,
                  size: DSSizing.iconXs,
                  color: DSColors.textSecondary,
                ),
                const SizedBox(width: DSSpacing.xs),
                Expanded(
                  child: Text(
                    location,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: DSTypography.bodyXs.copyWith(
                      color: DSColors.textSecondary,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
