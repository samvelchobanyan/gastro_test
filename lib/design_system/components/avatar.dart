import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_flutter/phosphor_flutter.dart';

enum DSAvatarSize { xs, sm, md, lg, xl }

enum DSAvatarStatus { online, busy }

enum DSAvatarShape { circle, rounded }

/// Avatar — circular (or rounded) image / initials for a user or entity.
/// Falls back to initials, then a user glyph. Optional status dot. Brand-tinted
/// background (`brand.subtle`) + accent text (bundle `Avatar.jsx`).
class Avatar extends StatelessWidget {
  final String name;
  final String? imageUrl;
  final DSAvatarSize size;
  final DSAvatarShape shape;
  final DSAvatarStatus? status;

  const Avatar({
    super.key,
    this.name = '',
    this.imageUrl,
    this.size = DSAvatarSize.md,
    this.shape = DSAvatarShape.circle,
    this.status,
  });

  double get _dim => switch (size) {
    DSAvatarSize.xs => 24,
    DSAvatarSize.sm => 32,
    DSAvatarSize.md => 40,
    DSAvatarSize.lg => 56,
    DSAvatarSize.xl => 72,
  };

  String get _initials {
    final parts = name.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty);
    return parts.take(2).map((w) => w[0].toUpperCase()).join();
  }

  @override
  Widget build(BuildContext context) {
    final brand = context.brand;
    final dim = _dim;
    final radius = shape == DSAvatarShape.circle
        ? BorderRadius.circular(DSRadius.full)
        : BorderRadius.circular(DSRadius.md);

    Widget content;
    if (imageUrl != null) {
      content = const SizedBox.shrink();
    } else if (_initials.isNotEmpty) {
      // Initials scale proportionally with the avatar; not a type-scale tier.
      content = Text(
        _initials,
        style: TextStyle(
          fontFamily: DSTypography.fontFamily,
          fontSize: (dim * 0.38).roundToDouble(),
          fontWeight: DSTypography.semibold,
          fontVariations: const [FontVariation('wght', 600)],
          color: brand.textAccent,
          height: 1,
        ),
      );
    } else {
      content = Icon(
        PhosphorIconsRegular.user,
        size: (dim * 0.5).roundToDouble(),
        color: brand.textAccent,
      );
    }

    return SizedBox(
      width: dim,
      height: dim,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Container(
            width: dim,
            height: dim,
            alignment: Alignment.center,
            clipBehavior: Clip.antiAlias,
            decoration: BoxDecoration(
              color: brand.subtle,
              borderRadius: radius,
              image: imageUrl != null
                  ? DecorationImage(
                      image: NetworkImage(imageUrl!),
                      fit: BoxFit.cover,
                    )
                  : null,
            ),
            child: content,
          ),
          if (status != null) _StatusDot(dim: dim, status: status!),
        ],
      ),
    );
  }
}

class _StatusDot extends StatelessWidget {
  final double dim;
  final DSAvatarStatus status;

  const _StatusDot({required this.dim, required this.status});

  @override
  Widget build(BuildContext context) {
    final dotSize = (dim * 0.24).clamp(8.0, double.infinity);
    return Positioned(
      right: 0,
      bottom: 0,
      child: Container(
        width: dotSize,
        height: dotSize,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: status == DSAvatarStatus.busy
              ? DSColors.statusWarning
              : DSColors.statusSuccess,
          border: Border.all(color: DSColors.bgMain, width: 2),
        ),
      ),
    );
  }
}
