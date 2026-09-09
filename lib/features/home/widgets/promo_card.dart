import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/foundations/ds_elevation.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';

// Local geometry — the rail's card width and the banner's aspect ratio.
const double _width = 280;
const double _aspect = 512 / 264;

/// PromoCard — one banner in Home's promo rail.
///
/// Screen-local by design: in the bundle this is not a design-system component
/// but a plain linked image inside `Home.dc.html`, so it lives with the screen
/// until a second screen needs it.
class PromoCard extends StatelessWidget {
  final String imageAsset;
  final VoidCallback? onTap;

  const PromoCard({super.key, required this.imageAsset, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Container(
        width: _width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(DSRadius.md),
          boxShadow: DSElevation.card,
        ),
        child: AspectRatio(
          aspectRatio: _aspect,
          child: DSImage(
            asset: imageAsset,
            borderRadius: BorderRadius.circular(DSRadius.md),
          ),
        ),
      ),
    );
  }
}
