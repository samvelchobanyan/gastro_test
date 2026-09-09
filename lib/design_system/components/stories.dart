import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Component geometry — local, not global tokens.
const double _ring = 64;
const double _ringWidth = 2;
const double _gap = 2; // white gap between ring and thumbnail
const double _labelWidth = 72;

/// Stories — an Instagram-style story ring (bundle `stories/Stories.jsx`):
/// a circular thumbnail inside a ring that reads brand-colored when unseen and
/// muted grey once seen, with a single-line label beneath.
///
/// Dumb: state in via [seen], tap out via [onTap]. Compose several in a
/// horizontal scroll row.
class Stories extends StatelessWidget {
  final String? imageAsset;
  final String label;
  final bool seen;
  final VoidCallback? onTap;

  const Stories({
    super.key,
    this.imageAsset,
    this.label = '',
    this.seen = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final ringColor = seen ? DSColors.borderDefault : context.brand.primary;

    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: SizedBox(
        width: _labelWidth,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: _ring,
              height: _ring,
              padding: const EdgeInsets.all(_ringWidth),
              decoration: BoxDecoration(color: ringColor, shape: BoxShape.circle),
              child: Container(
                padding: const EdgeInsets.all(_gap),
                decoration: const BoxDecoration(
                  color: DSColors.bgSurface,
                  shape: BoxShape.circle,
                ),
                child: ClipOval(
                  child: DSImage(asset: imageAsset, fit: BoxFit.cover),
                ),
              ),
            ),
            if (label.isNotEmpty) ...[
              const SizedBox(height: DSSpacing.xs),
              Text(
                label,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: DSTypography.bodySm.copyWith(
                  color: seen ? DSColors.textTertiary : DSColors.textPrimary,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
