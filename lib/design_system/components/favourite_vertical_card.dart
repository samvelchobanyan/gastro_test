import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Component geometry — local, not global tokens.
const double _cardWidth = 128;

/// FavouriteVerticalCard — a vertical product card for favourites rails (bundle
/// `product-cards/FavouriteVerticalCard.jsx`): square photo, product name, then
/// the price.
///
/// Sibling of [BuyAgainCard]. [price] arrives pre-formatted; the component does
/// no currency formatting.
class FavouriteVerticalCard extends StatelessWidget {
  final String name;
  final String price;
  final String? imageAsset;
  final VoidCallback? onTap;

  const FavouriteVerticalCard({
    super.key,
    required this.name,
    this.price = '',
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
            Text(
              price,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: DSTypography.bodyXs.copyWith(
                color: DSColors.textSecondary,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
