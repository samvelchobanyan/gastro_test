import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

/// One destination. The bundle names a single Phosphor glyph and fills it when
/// active; Flutter needs the two faces as separate [IconData], so both are
/// passed in.
typedef DSNavItem = ({IconData icon, IconData activeIcon, String label});

/// BottomNavigation — the persistent bar across core sections (bundle
/// `navigation/BottomNavigation.jsx`), replacing the retired `BottomTabBar`.
///
/// Dumb: selection in via [currentIndex], taps out via [onTap]. The bar draws
/// itself only — the safe-area inset and the surrounding surface belong to the
/// shell that hosts it.
class BottomNavigation extends StatelessWidget {
  final List<DSNavItem> items;
  final int currentIndex;
  final ValueChanged<int> onTap;

  const BottomNavigation({
    super.key,
    required this.items,
    required this.currentIndex,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: DSSizing.bottomNavHeightLabeled,
      decoration: BoxDecoration(
        color: DSColors.bgMain,
        borderRadius: BorderRadius.circular(DSRadius.full),
      ),
      child: Row(
        children: [
          for (var i = 0; i < items.length; i++)
            Expanded(child: _item(context, i)),
        ],
      ),
    );
  }

  Widget _item(BuildContext context, int index) {
    final item = items[index];
    final active = index == currentIndex;
    final color = active ? context.brand.primary : DSColors.textTertiary;

    return GestureDetector(
      onTap: () => onTap(index),
      behavior: HitTestBehavior.opaque,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            active ? item.activeIcon : item.icon,
            size: DSSizing.iconMd,
            color: color,
          ),
          const SizedBox(height: DSSpacing.xxs),
          Text(item.label, style: DSTypography.bodyXs.copyWith(color: color)),
        ],
      ),
    );
  }
}
