import 'package:go_router/go_router.dart';
import 'package:gastro_test/core/navigation/app_shell.dart';
import 'package:gastro_test/features/home/home_screen.dart';

/// App router — a [StatefulShellRoute.indexedStack] hosting the four bottom-nav
/// branches, each preserving its own stack. Only Home is designed so far; the
/// rest are placeholders.
final GoRouter appRouter = GoRouter(
  initialLocation: '/home',
  routes: [
    StatefulShellRoute.indexedStack(
      builder: (context, state, navigationShell) =>
          AppShell(navigationShell: navigationShell),
      branches: [
        StatefulShellBranch(
          routes: [
            GoRoute(
              path: '/home',
              builder: (context, state) => const HomeScreen(),
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              path: '/order',
              builder: (context, state) =>
                  const ComingSoonScreen(title: 'Order'),
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              path: '/gifts',
              builder: (context, state) =>
                  const ComingSoonScreen(title: 'Gifts'),
            ),
          ],
        ),
        StatefulShellBranch(
          routes: [
            GoRoute(
              path: '/profile',
              builder: (context, state) =>
                  const ComingSoonScreen(title: 'Profile'),
            ),
          ],
        ),
      ],
    ),
  ],
);
