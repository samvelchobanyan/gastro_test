import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _logo = 44;
const double _bellTarget = 44;
const double _dot = 9;
const double _dotTop = 9;
const double _dotRight = 10;
const double _dotRing = 2;

/// Greeting — the home header row (bundle `greeting/Greeting.jsx`): brand mark
/// on the left, a two-line greeting beside it, a notification bell on the right
/// carrying an unread dot.
///
/// [logo] is a slot rather than a path because the brand mark is the
/// white-label element and ships as SVG, while every other image in the system
/// is a raster asset — the screen supplies the right widget.
/// Falls back to an accent tile with a fork-knife glyph, as the bundle does.
class Greeting extends StatelessWidget {
  final String name;
  final String greeting;
  final Widget? logo;
  final bool hasNotifications;
  final VoidCallback? onBellTap;

  const Greeting({
    super.key,
    required this.name,
    this.greeting = 'Greetings',
    this.logo,
    this.hasNotifications = true,
    this.onBellTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: DSColors.bgSurface,
      padding: const EdgeInsets.all(DSSpacing.base),
      child: Row(
        children: [
          _brandMark(context),
          const SizedBox(width: DSSpacing.md),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  greeting,
                  style: DSTypography.caption.copyWith(
                    color: DSColors.textTertiary,
                  ),
                ),
                const SizedBox(height: DSSpacing.xxs),
                Text(
                  name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: DSTypography.h3,
                ),
              ],
            ),
          ),
          _bell(context),
        ],
      ),
    );
  }

  Widget _brandMark(BuildContext context) {
    return SizedBox(
      width: _logo,
      height: _logo,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(DSRadius.md),
        child:
            logo ??
            ColoredBox(
              color: context.brand.primary,
              child: Icon(
                PhosphorIconsFill.forkKnife,
                size: DSSizing.iconMd,
                color: context.brand.onAccent,
              ),
            ),
      ),
    );
  }

  Widget _bell(BuildContext context) {
    return GestureDetector(
      onTap: onBellTap,
      behavior: HitTestBehavior.opaque,
      child: SizedBox(
        width: _bellTarget,
        height: _bellTarget,
        child: Stack(
          children: [
            const Center(
              child: Icon(
                PhosphorIconsRegular.bell,
                size: DSSizing.iconMd,
                color: DSColors.textPrimary,
              ),
            ),
            if (hasNotifications)
              Positioned(
                top: _dotTop,
                right: _dotRight,
                child: Container(
                  width: _dot,
                  height: _dot,
                  decoration: BoxDecoration(
                    color: context.brand.primary,
                    shape: BoxShape.circle,
                    border: Border.all(
                      color: DSColors.bgSurface,
                      width: _dotRing,
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
