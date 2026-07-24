import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/components/avatar.dart';
import 'package:gastro_test/design_system/components/bottom_tab_bar.dart';
import 'package:gastro_test/design_system/components/button.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:phosphor_flutter/phosphor_flutter.dart';

/// TEMPORARY dev gallery to visually verify the ported design system before the
/// real screens are built. Not part of the app; removed at the real-project build.
class DSPreviewScreen extends StatefulWidget {
  const DSPreviewScreen({super.key});

  @override
  State<DSPreviewScreen> createState() => _DSPreviewScreenState();
}

class _DSPreviewScreenState extends State<DSPreviewScreen> {
  int _tab = 1;

  static const _tabs = [
    DSTabItem(
      icon: PhosphorIconsRegular.house,
      activeIcon: PhosphorIconsFill.house,
      label: 'Home',
    ),
    DSTabItem(
      icon: PhosphorIconsRegular.forkKnife,
      activeIcon: PhosphorIconsFill.forkKnife,
      label: 'Menu',
      badge: 3,
    ),
    DSTabItem(
      icon: PhosphorIconsRegular.qrCode,
      activeIcon: PhosphorIconsFill.qrCode,
    ),
    DSTabItem(
      icon: PhosphorIconsRegular.storefront,
      activeIcon: PhosphorIconsFill.storefront,
      label: 'Restaurant',
    ),
    DSTabItem(
      icon: PhosphorIconsRegular.user,
      activeIcon: PhosphorIconsFill.user,
      label: 'Login',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: const EdgeInsets.all(DSSpacing.base),
          children: [
            Text('Design system', style: context.display),
            const SizedBox(height: DSSpacing.xs),
            Text(
              'Ported from the Claude Design bundle',
              style: context.body.copyWith(color: DSColors.textSecondary),
            ),
            const SizedBox(height: DSSpacing.xl),

            _Section(
              title: 'Typography',
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Display 32/40', style: context.display),
                  const SizedBox(height: DSSpacing.sm),
                  Text('H1 · Your favourites', style: context.h1),
                  const SizedBox(height: DSSpacing.sm),
                  Text('H2 · Chef\'s specials', style: context.h2),
                  const SizedBox(height: DSSpacing.sm),
                  Text('H3 · Section title', style: context.h3),
                  const SizedBox(height: DSSpacing.sm),
                  Text('Body Large — 16/24 regular', style: context.bodyLg),
                  const SizedBox(height: DSSpacing.sm),
                  Text('Body — 14/20 regular', style: context.body),
                  const SizedBox(height: DSSpacing.sm),
                  Text(
                    'Caption — delivered in 25–35 min',
                    style: context.caption,
                  ),
                  const SizedBox(height: DSSpacing.sm),
                  Text('CHEF\'S SPECIALS'.toUpperCase(), style: context.overline),
                ],
              ),
            ),

            _Section(
              title: 'Neutral ramp',
              child: _SwatchRow(
                swatches: [
                  _Swatch(DSColors.gray0, '0'),
                  _Swatch(DSColors.gray50, '50'),
                  _Swatch(DSColors.gray100, '100'),
                  _Swatch(DSColors.gray200, '200'),
                  _Swatch(DSColors.gray300, '300'),
                  _Swatch(DSColors.gray400, '400'),
                  _Swatch(DSColors.gray500, '500'),
                  _Swatch(DSColors.gray600, '600'),
                  _Swatch(DSColors.gray700, '700'),
                  _Swatch(DSColors.gray900, '900'),
                  _Swatch(DSColors.gray1000, '1000'),
                ],
              ),
            ),

            _Section(
              title: 'Brand (white-label) + status',
              child: _SwatchRow(
                swatches: [
                  _Swatch(context.brand.primary, 'primary'),
                  _Swatch(context.brand.interactive, 'active'),
                  _Swatch(context.brand.subtle, 'subtle'),
                  _Swatch(DSColors.statusSuccess, 'success'),
                  _Swatch(DSColors.statusWarning, 'warning'),
                  _Swatch(DSColors.statusError, 'error'),
                  _Swatch(DSColors.statusInfo, 'info'),
                ],
              ),
            ),

            _Section(
              title: 'Radius',
              child: Row(
                children: [
                  _RadiusBox(DSRadius.sm, 'sm'),
                  _RadiusBox(DSRadius.md, 'md'),
                  _RadiusBox(DSRadius.lg, 'lg'),
                  _RadiusBox(DSRadius.xl, 'xl'),
                ],
              ),
            ),

            _Section(
              title: 'Buttons — variants',
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Button(
                    label: 'Add to cart',
                    iconLeft: PhosphorIconsRegular.shoppingCartSimple,
                    onPressed: () {},
                    fullWidth: true,
                  ),
                  const SizedBox(height: DSSpacing.sm),
                  Button(
                    label: 'Secondary',
                    variant: DSButtonVariant.secondary,
                    onPressed: () {},
                    fullWidth: true,
                  ),
                  const SizedBox(height: DSSpacing.sm),
                  Button(
                    label: 'Tertiary action',
                    variant: DSButtonVariant.tertiary,
                    onPressed: () {},
                    fullWidth: true,
                  ),
                  const SizedBox(height: DSSpacing.sm),
                  Button(
                    label: 'Remove',
                    variant: DSButtonVariant.destructive,
                    onPressed: () {},
                    fullWidth: true,
                  ),
                ],
              ),
            ),

            _Section(
              title: 'Buttons — sizes / states',
              child: Wrap(
                spacing: DSSpacing.sm,
                runSpacing: DSSpacing.sm,
                crossAxisAlignment: WrapCrossAlignment.center,
                children: [
                  Button(
                    label: 'Lg',
                    size: DSButtonSize.lg,
                    onPressed: () {},
                  ),
                  Button(
                    label: 'Md',
                    size: DSButtonSize.md,
                    onPressed: () {},
                  ),
                  Button(
                    label: 'Sm',
                    size: DSButtonSize.sm,
                    onPressed: () {},
                  ),
                  Button(
                    label: 'Xs',
                    size: DSButtonSize.xs,
                    onPressed: () {},
                  ),
                  const Button(
                    label: 'Loading',
                    loading: true,
                    onPressed: null,
                  ),
                  const Button(
                    label: 'Disabled',
                    onPressed: null,
                  ),
                ],
              ),
            ),

            _Section(
              title: 'Avatar',
              child: Wrap(
                spacing: DSSpacing.md,
                runSpacing: DSSpacing.md,
                crossAxisAlignment: WrapCrossAlignment.center,
                children: const [
                  Avatar(name: 'Aram', size: DSAvatarSize.xs),
                  Avatar(name: 'Aram', size: DSAvatarSize.sm),
                  Avatar(name: 'Aram Ktoyan', size: DSAvatarSize.md),
                  Avatar(
                    name: 'Aram Ktoyan',
                    size: DSAvatarSize.lg,
                    status: DSAvatarStatus.online,
                  ),
                  Avatar(size: DSAvatarSize.lg),
                  Avatar(
                    name: 'Aram',
                    size: DSAvatarSize.lg,
                    shape: DSAvatarShape.rounded,
                    status: DSAvatarStatus.busy,
                  ),
                  Avatar(
                    imageUrl:
                        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=144&h=144&fit=crop',
                    size: DSAvatarSize.xl,
                  ),
                ],
              ),
            ),

            const SizedBox(height: DSSpacing.xxl),
          ],
        ),
      ),
      bottomNavigationBar: BottomTabBar(
        items: _tabs,
        currentIndex: _tab,
        onTap: (i) => setState(() => _tab = i),
      ),
    );
  }
}

class _Section extends StatelessWidget {
  final String title;
  final Widget child;
  const _Section({required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: DSSpacing.xl),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title.toUpperCase(),
            style: context.overline.copyWith(color: DSColors.textTertiary),
          ),
          const SizedBox(height: DSSpacing.md),
          child,
        ],
      ),
    );
  }
}

class _SwatchRow extends StatelessWidget {
  final List<_Swatch> swatches;
  const _SwatchRow({required this.swatches});

  @override
  Widget build(BuildContext context) {
    return Wrap(spacing: DSSpacing.sm, runSpacing: DSSpacing.sm, children: swatches);
  }
}

class _Swatch extends StatelessWidget {
  final Color color;
  final String label;
  const _Swatch(this.color, this.label);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(DSRadius.sm),
            border: Border.all(color: DSColors.borderMuted),
          ),
        ),
        const SizedBox(height: DSSpacing.xs),
        Text(label, style: context.caption),
      ],
    );
  }
}

class _RadiusBox extends StatelessWidget {
  final double radius;
  final String label;
  const _RadiusBox(this.radius, this.label);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: DSSpacing.md),
      child: Column(
        children: [
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              color: DSColors.bgSurfaceSunken,
              borderRadius: BorderRadius.circular(radius),
              border: Border.all(color: DSColors.borderDefault),
            ),
          ),
          const SizedBox(height: DSSpacing.xs),
          Text(label, style: context.caption),
        ],
      ),
    );
  }
}
