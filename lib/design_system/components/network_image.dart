import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

/// DSNetworkImage — one dumb wrapper around network images that collapses the
/// three ordinary failure modes (loading in flight, load errored, null/empty
/// url) into a single shared placeholder: a sunken surface with a `ph-image`
/// glyph, exactly as the bundle draws it.
///
/// Adapts [[unified-network-image-fallback]] to this project: no
/// `cached_network_image` dependency and no bundled "no image" asset, so it
/// runs on plain [Image.network] + a glyph placeholder. Per
/// [[image-cache-dims-distort-aspect-ratio]] it never pins both cache
/// dimensions — [BoxFit.cover] owns the crop.
class DSNetworkImage extends StatelessWidget {
  final String? imageUrl;
  final double? width;
  final double? height;
  final BoxFit fit;
  final BorderRadius? borderRadius;

  const DSNetworkImage({
    super.key,
    required this.imageUrl,
    this.width,
    this.height,
    this.fit = BoxFit.cover,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    final url = imageUrl;
    final Widget content = (url == null || url.isEmpty)
        ? _placeholder()
        : Image.network(
            url,
            width: width,
            height: height,
            fit: fit,
            loadingBuilder: (context, child, progress) =>
                progress == null ? child : _placeholder(),
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
