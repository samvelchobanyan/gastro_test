import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Component geometry — local, not global tokens.
const double _image = 48;
const double _maxWidth = 328;

/// Voucher — a reward/coupon row (bundle `voucher/Voucher.jsx`): product image,
/// name and a remaining-count line on a sunken capsule.
///
/// Sized to its content (capped at the content column) so several fit in a
/// horizontal rail.
class Voucher extends StatelessWidget {
  final String name;
  final int remaining;
  final String? imageAsset;

  const Voucher({
    super.key,
    required this.name,
    this.remaining = 0,
    this.imageAsset,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: _maxWidth),
      padding: const EdgeInsets.fromLTRB(
        DSSpacing.md,
        DSSpacing.md,
        DSSpacing.base,
        DSSpacing.md,
      ),
      decoration: BoxDecoration(
        color: DSColors.gray100,
        borderRadius: BorderRadius.circular(DSRadius.lg),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          DSImage(
            asset: imageAsset,
            width: _image,
            height: _image,
            borderRadius: BorderRadius.circular(DSRadius.sm),
          ),
          const SizedBox(width: DSSpacing.md),
          Flexible(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: DSTypography.body,
                ),
                const SizedBox(height: DSSpacing.xxs),
                Text(
                  '$remaining remaining',
                  style: DSTypography.bodySm.copyWith(
                    color: DSColors.textTertiary,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
