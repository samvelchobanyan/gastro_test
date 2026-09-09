import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:gastro_test/design_system/components/branch_card.dart';
import 'package:gastro_test/design_system/components/buy_again_card.dart';
import 'package:gastro_test/design_system/components/ds_divider.dart';
import 'package:gastro_test/design_system/components/favourite_vertical_card.dart';
import 'package:gastro_test/design_system/components/greeting.dart';
import 'package:gastro_test/design_system/components/loyalty_points_card.dart';
import 'package:gastro_test/design_system/components/section_header.dart';
import 'package:gastro_test/design_system/components/stories.dart';
import 'package:gastro_test/design_system/components/tab_bar.dart';
import 'package:gastro_test/design_system/components/voucher.dart';
import 'package:gastro_test/design_system/components/wallet.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/features/home/widgets/promo_card.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

/// Which product rail the tab strip is showing.
enum _ProductTab { buyAgain, favourites }

/// Home screen (bundle `_pages/Home.dc.html` + `Home.screen.json`): greeting,
/// stories, loyalty and wallet cards, a voucher rail, a tabbed product rail,
/// promo banners and the nearest branches.
///
/// Test-stage screen: no domain/data layer. The mock content below comes from
/// `Home.screen.json`; actions are no-ops. The only state is the product tab.
class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  _ProductTab _tab = _ProductTab.buyAgain;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: true,
      bottom: false,
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Greeting(
              name: _userName,
              greeting: _greeting,
              logo: SvgPicture.asset(_logoAsset, fit: BoxFit.cover),
              hasNotifications: true,
              onBellTap: () {},
            ),
            _storiesRail(),
            _padded(
              const LoyaltyPointsCard(
                points: 1240,
                membership: 'Master',
                discountLabel: '10%',
                qrValue: 'CH-ARAM-1240',
                backgroundAsset: 'assets/images/ch_loyalty_bg.png',
              ),
            ),
            _padded(
              Wallet(
                balance: '֏5,680',
                iconAsset: 'assets/images/ch_wallet.png',
                onTopUp: () {},
              ),
            ),
            _vouchers(),
            _padded(_tabs()),
            _productRail(),
            _promoRail(),
            _branches(),
          ],
        ),
      ),
    );
  }

  /// Screen-margin wrapper: 16px sides, 16px below — the rhythm every stacked
  /// block on this screen uses.
  Widget _padded(Widget child) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        DSSpacing.base,
        0,
        DSSpacing.base,
        DSSpacing.base,
      ),
      child: child,
    );
  }

  /// Edge-to-edge horizontal rail: the scroll view runs full-bleed and the
  /// screen margin lives in its padding, so cards can scroll past the edge.
  Widget _rail({
    required List<Widget> children,
    double top = 0,
    double bottom = DSSpacing.base,
  }) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      padding: EdgeInsets.fromLTRB(
        DSSpacing.base,
        top,
        DSSpacing.base,
        bottom,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          for (var i = 0; i < children.length; i++) ...[
            if (i > 0) const SizedBox(width: DSSpacing.sm),
            children[i],
          ],
        ],
      ),
    );
  }

  Widget _storiesRail() {
    return _rail(
      top: DSSpacing.sm,
      children: [
        for (final s in _stories)
          Stories(
            imageAsset: s.image,
            label: s.label,
            seen: s.seen,
            onTap: () {},
          ),
      ],
    );
  }

  Widget _vouchers() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: DSSpacing.base),
          child: SectionHeader(title: 'Vouchers'),
        ),
        const SizedBox(height: DSSpacing.md),
        _rail(
          bottom: DSSpacing.lg,
          children: [
            for (final v in _vouchersData)
              Voucher(
                name: v.name,
                remaining: v.remaining,
                imageAsset: v.image,
              ),
          ],
        ),
      ],
    );
  }

  Widget _tabs() {
    return DSTabBar<_ProductTab>(
      value: _tab,
      onChanged: (v) => setState(() => _tab = v),
      options: const [
        (
          label: 'Buy again',
          value: _ProductTab.buyAgain,
          icon: PhosphorIconsRegular.arrowCounterClockwise,
        ),
        (
          label: 'Favourites',
          value: _ProductTab.favourites,
          icon: PhosphorIconsRegular.heart,
        ),
      ],
    );
  }

  Widget _productRail() {
    return switch (_tab) {
      _ProductTab.buyAgain => _rail(
        bottom: DSSpacing.lg,
        children: [
          for (final p in _buyAgain)
            BuyAgainCard(
              name: p.name,
              location: p.location,
              imageAsset: p.image,
              onTap: () {},
            ),
        ],
      ),
      _ProductTab.favourites => _rail(
        bottom: DSSpacing.lg,
        children: [
          for (final p in _favourites)
            FavouriteVerticalCard(
              name: p.name,
              price: p.price,
              imageAsset: p.image,
              onTap: () {},
            ),
        ],
      ),
    };
  }

  Widget _promoRail() {
    return _rail(
      bottom: DSSpacing.lg,
      children: [
        for (final image in _promos)
          PromoCard(imageAsset: image, onTap: () {}),
      ],
    );
  }

  Widget _branches() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        DSSpacing.base,
        0,
        DSSpacing.base,
        DSSpacing.base,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SectionHeader(title: 'Nearest branches'),
          const SizedBox(height: DSSpacing.md),
          for (var i = 0; i < _branchesData.length; i++) ...[
            if (i > 0) ...[
              const SizedBox(height: DSSpacing.md),
              const DSDivider(),
              const SizedBox(height: DSSpacing.md),
            ],
            BranchCard(
              imageAsset: _branchesData[i].image,
              name: _branchesData[i].name,
              address: _branchesData[i].address,
              hours: _branchesData[i].hours,
              distance: _branchesData[i].distance,
              isOpenNow: _branchesData[i].isOpen,
              onTap: () {},
            ),
          ],
        ],
      ),
    );
  }
}

// ---- Mock data (bundle `Home.screen.json`) ----

const String _userName = 'Aram';
const String _greeting = "Let's enjoy some coffee";
const String _logoAsset = 'assets/images/ch_logo.svg';

typedef _Story = ({String image, String label, bool seen});

const List<_Story> _stories = [
  (
    image: 'assets/images/ch_prod_hot_salted_caramel_matcha_latte.png',
    label: 'A very very long story title',
    seen: false,
  ),
  (
    image: 'assets/images/ch_fav_iced_fantasy_coffee.png',
    label: 'Cold brew',
    seen: false,
  ),
  (
    image: 'assets/images/ch_fav_hot_raf_strawberry.png',
    label: 'Espresso',
    seen: false,
  ),
  (
    image: 'assets/images/ch_prod_dubai_cheesecake.png',
    label: 'Pastries',
    seen: true,
  ),
  (
    image: 'assets/images/ch_prod_muffin_chocolate.png',
    label: 'Beans',
    seen: true,
  ),
  (
    image: 'assets/images/ch_fav_iced_cream_cheese_latte_aroma.png',
    label: 'Mocha',
    seen: true,
  ),
];

typedef _VoucherItem = ({String name, int remaining, String image});

const List<_VoucherItem> _vouchersData = [
  (
    name: 'Bumble Cherry',
    remaining: 2,
    image: 'assets/images/ch_voucher_bumble_cherry.png',
  ),
  (
    name: 'Iced Americano Specialty Arabica',
    remaining: 1,
    image: 'assets/images/ch_voucher_iced_americano_specialty_arabica.png',
  ),
];

typedef _BuyAgainItem = ({String name, String location, String image});

const List<_BuyAgainItem> _buyAgain = [
  (
    name: 'Hot Salted Caramel Matcha Latte',
    location: 'Northern Ave',
    image: 'assets/images/ch_prod_hot_salted_caramel_matcha_latte.png',
  ),
  (
    name: 'Dubai Cheesecake',
    location: 'Cascade',
    image: 'assets/images/ch_prod_dubai_cheesecake.png',
  ),
  (
    name: 'Muffin Chocolate',
    location: 'Republic Sq',
    image: 'assets/images/ch_prod_muffin_chocolate.png',
  ),
];

typedef _FavouriteItem = ({String name, String price, String image});

const List<_FavouriteItem> _favourites = [
  (
    name: 'Iced Fantasy Coffee',
    price: '֏1,450',
    image: 'assets/images/ch_fav_iced_fantasy_coffee.png',
  ),
  (
    name: 'Iced Cream Cheese Latte Aroma',
    price: '֏1,850',
    image: 'assets/images/ch_fav_iced_cream_cheese_latte_aroma.png',
  ),
  (
    name: 'Hot Raf Strawberry',
    price: '֏1,650',
    image: 'assets/images/ch_fav_hot_raf_strawberry.png',
  ),
];

const List<String> _promos = [
  'assets/images/promo_1.png',
  'assets/images/promo_2.png',
  'assets/images/promo_3.png',
];

typedef _Branch = ({
  String name,
  String address,
  String hours,
  String distance,
  bool isOpen,
  String image,
});

const List<_Branch> _branchesData = [
  (
    name: 'Northern Avenue',
    address: '12 Northern Ave, Yerevan',
    hours: '08:00 – 23:00',
    distance: '0.4 km',
    isOpen: true,
    image: 'assets/images/branch_1.png',
  ),
  (
    name: 'Cascade',
    address: '3 Tamanyan St, Yerevan',
    hours: '09:00 – 22:00',
    distance: '1.1 km',
    isOpen: true,
    image: 'assets/images/branch_2.png',
  ),
  (
    name: 'Republic Square',
    address: '5 Abovyan St, Yerevan',
    hours: '08:00 – 00:00',
    distance: '1.8 km',
    isOpen: false,
    image: 'assets/images/branch_3.png',
  ),
];
