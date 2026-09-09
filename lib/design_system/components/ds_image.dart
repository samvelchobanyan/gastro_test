import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

/// DSImage — one dumb wrapper around a bundled image asset that collapses the
/// two failure modes (null path, decode error) into a single placeholder: a
/// sunken surface with a `ph-image` glyph.
///
/// The bundle draws per-component striped placeholders instead; every image on
/// the built screens is a real client asset, so the placeholder is a safety net
/// rather than a design state, and one shared look is enough.
///
/// Sibling of [DSNetworkImage] — same contract, local assets instead of URLs.
class DSImage extends StatelessWidget {
  final String? asset;
  final double? width;
  final double? height;
  final BoxFit fit;
  final BorderRadius? borderRadius;

  const DSImage({
    super.key,
    required this.asset,
    this.width,
    this.height,
    this.fit = BoxFit.cover,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    final path = asset;
    final Widget content = (path == null || path.isEmpty)
        ? _placeholder()
        : Image.asset(
            path,
            width: width,
            height: height,
            fit: fit,
            errorBuilder: (context, error, stack) => _placeholder(),
          );

    if (borderRadius == null) return content;
    return ClipRRect(borderRadius: borderRadius!, child: content);
  }

  Widget _placeholder() {
    return Container(
      width: width,
      height: height,
      color: DSColors.bgSurfaceSunken,
      alignment: Alignment.center,
      child: Icon(
        PhosphorIconsRegular.image,
        size: DSSizing.iconLg,
        color: DSColors.textDisabled,
      ),
    );
  }
}
