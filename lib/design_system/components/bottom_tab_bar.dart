import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

/// One entry in [BottomTabBar]. Carries both the regular and the filled (active)
/// icon — the design switches `ph` → `ph-fill` on the active tab. Pass e.g.
/// `PhosphorIconsRegular.house` / `PhosphorIconsFill.house`.
@immutable
class DSTabItem {
  final IconData icon;
  final IconData activeIcon;
  final String label;
  final int? badge;

  const DSTabItem({
    required this.icon,
    required this.activeIcon,
    this.label = '',
    this.badge,
  });
}

/// Persistent bottom navigation between core sections (bundle `BottomTabBar`).
/// 56px unlabeled / 64px labeled; active item = accent + filled icon.
///
/// Dumb: current selection comes in via [currentIndex], taps go out via [onTap].
/// The bundle duplicates this bar inside every page — in Flutter it lives once,
/// composed by the navigation shell.
class BottomTabBar extends StatelessWidget {
  final List<DSTabItem> items;
  final int currentIndex;
  final ValueChanged<int> onTap;
  final bool showLabels;

  const BottomTabBar({
    super.key,
    required this.items,
    required this.currentIndex,
    required this.onTap,
    this.showLabels = true,
  });

  @override
  Widget build(BuildContext context) {
    final activeColor = context.brand.primary;
    final height = showLabels
        ? DSSizing.bottomNavHeightLabeled
        : DSSizing.bottomNavHeight;
    return DecoratedBox(
      decoration: const BoxDecoration(
        color: DSColors.bgMain,
        border: Border(
          top: BorderSide(
            color: DSColors.borderMuted,
            width: DSSizing.borderWidthDefault,
          ),
        ),
      ),
      child: SafeArea(
        top: false,
        child: SizedBox(
          height: height,
          child: Row(
            children: [
              for (var i = 0; i < items.length; i++)
                Expanded(
                  child: _TabButton(
                    item: items[i],
                    active: i == currentIndex,
                    activeColor: activeColor,
                    showLabel: showLabels,
                    onTap: () => onTap(i),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class _TabButton extends StatelessWidget {
  final DSTabItem item;
  final bool active;
  final Color activeColor;
  final bool showLabel;
  final VoidCallback onTap;

  const _TabButton({
    required this.item,
    required this.active,
    required this.activeColor,
    required this.showLabel,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final color = active ? activeColor : DSColors.textTertiary;
    return InkResponse(
      onTap: onTap,
      containedInkWell: false,
      highlightColor: DSColors.overlayPressDark,
      splashColor: DSColors.overlayPressDark,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _IconWithBadge(
            icon: active ? item.activeIcon : item.icon,
            color: color,
            badge: item.badge,
          ),
          if (showLabel && item.label.isNotEmpty) ...[
            const SizedBox(height: 2),
            Text(
              item.label,
              style: DSTypography.withWeight(
                DSTypography.overline,
                active ? DSTypography.semibold : DSTypography.medium,
              ).copyWith(color: color),
            ),
          ],
        ],
      ),
    );
  }
}

class _IconWithBadge extends StatelessWidget {
  final IconData icon;
  final Color color;
  final int? badge;

  const _IconWithBadge({required this.icon, required this.color, this.badge});

  @override
  Widget build(BuildContext context) {
    final glyph = Icon(icon, size: DSSizing.iconMd, color: color);
    if (badge == null) return glyph;
    return Stack(
      clipBehavior: Clip.none,
      children: [
        glyph,
        Positioned(
          top: -4,
          right: -8,
          child: Container(
            constraints: const BoxConstraints(minWidth: 16),
            height: 16,
            padding: const EdgeInsets.symmetric(horizontal: 4),
            alignment: Alignment.center,
            decoration: const BoxDecoration(
              color: DSColors.statusError,
              shape: BoxShape.rectangle,
              borderRadius: BorderRadius.all(Radius.circular(999)),
            ),
            child: Text(
              '$badge',
              style: DSTypography.withWeight(
                DSTypography.overline,
                DSTypography.bold,
              ).copyWith(color: DSColors.textOnBrand),
            ),
          ),
        ),
      ],
    );
  }
}
