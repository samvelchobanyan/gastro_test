import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/network_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Card geometry — local, not global tokens.
const double _width = 220;
const double _thumbHeight = 140;

/// NewsListing — a news / announcement item: image over a 2-line title and a
/// publish date (bundle `news/NewsListing.jsx`). Vertical orientation only (the
/// grid-feed card); the horizontal list variant isn't needed yet.
class NewsListing extends StatelessWidget {
  final String? image;
  final String title;
  final String publishedAt;
  final VoidCallback? onTap;

  const NewsListing({
    super.key,
    this.image,
    required this.title,
    required this.publishedAt,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final content = SizedBox(
      width: _width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          DSNetworkImage(
            imageUrl: image,
            width: _width,
            height: _thumbHeight,
            borderRadius: BorderRadius.circular(DSRadius.md),
          ),
          const SizedBox(height: DSSpacing.md),
          Text(
            title,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: DSTypography.withWeight(
              DSTypography.body,
              DSTypography.semibold,
            ),
          ),
          const SizedBox(height: DSSpacing.xs),
          Text(
            publishedAt,
            style: DSTypography.caption.copyWith(color: DSColors.textTertiary),
          ),
        ],
      ),
    );

    if (onTap == null) return content;
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: content,
    );
  }
}
