import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:gastro_test/design_system/components/bottom_navigation.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

/// The four destinations, in bar order. Index is the backing
/// [StatefulShellRoute] branch.
const List<DSNavItem> _navItems = [
  (
    icon: PhosphorIconsRegular.house,
    activeIcon: PhosphorIconsFill.house,
    label: 'Home',
  ),
  (
    icon: PhosphorIconsRegular.coffee,
    activeIcon: PhosphorIconsFill.coffee,
    label: 'Order',
  ),
  (
    icon: PhosphorIconsRegular.gift,
    activeIcon: PhosphorIconsFill.gift,
    label: 'Gifts',
  ),
  (
    icon: PhosphorIconsRegular.user,
    activeIcon: PhosphorIconsFill.user,
    label: 'Profile',
  ),
];

/// AppShell — hosts [BottomNavigation] once over the branch content of a
/// [StatefulShellRoute.indexedStack]. The prototype repeats the bar inside
/// every page; in Flutter it lives here and screens never render it.
///
/// The bar's surrounding chrome — the surface, the top hairline and the bottom
/// safe-area inset — belongs to the shell; the component only draws itself.
class AppShell extends StatelessWidget {
  final StatefulNavigationShell navigationShell;

  const AppShell({super.key, required this.navigationShell});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: DSColors.bgSurface,
      // No SafeArea here — each screen owns its top inset.
      body: navigationShell,
      bottomNavigationBar: Container(
        decoration: const BoxDecoration(
          color: DSColors.bgSurface,
          border: Border(
            top: BorderSide(
              color: DSColors.borderMuted,
              width: DSSizing.borderWidthDefault,
            ),
          ),
        ),
        padding: EdgeInsets.fromLTRB(
          DSSpacing.base,
          DSSpacing.sm,
          DSSpacing.base,
          DSSpacing.sm + MediaQuery.viewPaddingOf(context).bottom,
        ),
        child: BottomNavigation(
          items: _navItems,
          currentIndex: navigationShell.currentIndex,
          onTap: (index) => navigationShell.goBranch(
            index,
            // Re-tapping the active tab returns to that branch's root.
            initialLocation: index == navigationShell.currentIndex,
          ),
        ),
      ),
    );
  }
}

/// Placeholder for the destinations that have no design yet — the 2026-09
/// bundle ships Home only.
class ComingSoonScreen extends StatelessWidget {
  final String title;

  const ComingSoonScreen({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(DSSpacing.lg),
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(title, style: DSTypography.h2),
            const SizedBox(height: DSSpacing.sm),
            Text(
              'Coming soon',
              style: DSTypography.body.copyWith(color: DSColors.textTertiary),
            ),
          ],
        ),
      ),
    );
  }
}
