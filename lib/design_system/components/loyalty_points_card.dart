import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/components/membership_tier_pill.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

// Component geometry — local, not global tokens.
const double _cardWidth = 328;
const double _cardHeight = 116;
const double _qrBox = 64;
const int _qrModules = 21;

/// LoyaltyPointsCard — the membership card (bundle
/// `loyalty/LoyaltyPointsCard.jsx`): a fixed 328×116 dark panel over an
/// optional per-brand background image, with the points balance, a tier pill
/// and a QR block for in-store scanning.
///
/// The QR is **decorative**, exactly as in the bundle: a pattern seeded from
/// [qrValue], not a scannable code. A real one would need a qr package.
class LoyaltyPointsCard extends StatelessWidget {
  final int points;
  final String membership;
  final String? discountLabel;
  final String qrValue;
  final String? backgroundAsset;

  const LoyaltyPointsCard({
    super.key,
    required this.points,
    this.membership = 'Regular',
    this.discountLabel,
    this.qrValue = '',
    this.backgroundAsset,
  });

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(DSRadius.lg),
      child: SizedBox(
        width: _cardWidth,
        height: _cardHeight,
        child: Stack(
          fit: StackFit.expand,
          children: [
            const ColoredBox(color: DSColors.gray900),
            if (backgroundAsset != null)
              DSImage(asset: backgroundAsset, fit: BoxFit.cover),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                DSSpacing.base,
                DSSpacing.base,
                DSSpacing.lg,
                DSSpacing.base,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(child: _info()),
                  const SizedBox(width: DSSpacing.base),
                  _qr(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _info() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        // Dark-surface text: the light-surface semantics do not apply here, so
        // the ramp is read directly, as the bundle does.
        Text(
          'Loyalty points',
          style: DSTypography.bodySm.copyWith(color: DSColors.gray500),
        ),
        Text(
          _grouped(points),
          style: DSTypography.h1.copyWith(color: DSColors.gray0),
        ),
        const SizedBox(height: DSSpacing.xs),
        MembershipTierPill(
          membership: membership,
          discountLabel: discountLabel,
        ),
      ],
    );
  }

  Widget _qr() {
    return Container(
      width: _qrBox,
      height: _qrBox,
      padding: const EdgeInsets.all(DSSpacing.xs),
      decoration: BoxDecoration(
        color: DSColors.gray0,
        borderRadius: BorderRadius.circular(DSRadius.sm),
      ),
      child: CustomPaint(painter: _DecorativeQrPainter(qrValue)),
    );
  }

  /// `1240` → `1,240`. Mirrors the bundle's `toLocaleString()`.
  static String _grouped(int value) {
    final digits = value.toString();
    final buffer = StringBuffer();
    for (var i = 0; i < digits.length; i++) {
      if (i > 0 && (digits.length - i) % 3 == 0) buffer.write(',');
      buffer.write(digits[i]);
    }
    return buffer.toString();
  }
}

/// Draws the bundle's decorative QR: three finder squares plus a field of
/// modules chosen by a linear congruential generator seeded from the payload.
/// Same seed and constants as the JSX, so the pattern matches the design.
class _DecorativeQrPainter extends CustomPainter {
  final String value;

  const _DecorativeQrPainter(this.value);

  @override
  void paint(Canvas canvas, Size size) {
    final unit = size.width / _qrModules;
    final black = Paint()..color = DSColors.gray1000;
    final white = Paint()..color = DSColors.gray0;

    void square(int row, int col, int span, Paint paint) {
      canvas.drawRect(
        Rect.fromLTWH(col * unit, row * unit, span * unit, span * unit),
        paint,
      );
    }

    void finder(int top, int left) {
      square(top, left, 7, black);
      square(top + 1, left + 1, 5, white);
      square(top + 2, left + 2, 3, black);
    }

    var seed = 0;
    for (final unitCode in value.codeUnits) {
      seed = (seed * 31 + unitCode) & 0xFFFFFFFF;
    }
    double next() {
      seed = (seed * 1664525 + 1013904223) & 0xFFFFFFFF;
      return seed / 4294967296;
    }

    bool inFinder(int r, int c) =>
        (r < 7 && c < 7) ||
        (r < 7 && c >= _qrModules - 7) ||
        (r >= _qrModules - 7 && c < 7);

    for (var r = 0; r < _qrModules; r++) {
      for (var c = 0; c < _qrModules; c++) {
        if (inFinder(r, c)) continue;
        if (next() > 0.55) square(r, c, 1, black);
      }
    }

    finder(0, 0);
    finder(0, _qrModules - 7);
    finder(_qrModules - 7, 0);
  }

  @override
  bool shouldRepaint(_DecorativeQrPainter oldDelegate) =>
      oldDelegate.value != value;
}
