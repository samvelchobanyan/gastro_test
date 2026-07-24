import 'package:flutter/widgets.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';

/// The 8-tier type scale from the bundle (`typography.css`), Plus Jakarta Sans.
///
/// Two conversion rules from the web tokens:
/// - **Line-height is a multiplier in Flutter**, not pixels: `height = lh / size`
///   (H1 24/32 → `height: 32 / 24`).
/// - The bundled font is a **variable** font, so weight is driven via
///   [FontVariation] on the `wght` axis; `fontWeight` is kept for semantics.
///
/// The Overline tier is ALL CAPS in the design — Flutter has no text-transform,
/// so callers must uppercase the string themselves (`label.toUpperCase()`).
abstract final class DSTypography {
  static const String fontFamily = 'Plus Jakarta Sans';

  static const FontWeight regular = FontWeight.w400;
  static const FontWeight medium = FontWeight.w500;
  static const FontWeight semibold = FontWeight.w600;
  static const FontWeight bold = FontWeight.w700;

  static const TextStyle display = TextStyle(
    fontFamily: fontFamily,
    fontSize: 32,
    height: 40 / 32,
    fontWeight: bold,
    fontVariations: [FontVariation('wght', 700)],
    letterSpacing: -0.32, // -0.01em
    color: DSColors.textPrimary,
  );

  static const TextStyle h1 = TextStyle(
    fontFamily: fontFamily,
    fontSize: 24,
    height: 32 / 24,
    fontWeight: semibold,
    fontVariations: [FontVariation('wght', 600)],
    letterSpacing: -0.24, // -0.01em
    color: DSColors.textPrimary,
  );

  static const TextStyle h2 = TextStyle(
    fontFamily: fontFamily,
    fontSize: 20,
    height: 28 / 20,
    fontWeight: medium,
    fontVariations: [FontVariation('wght', 500)],
    color: DSColors.textPrimary,
  );

  static const TextStyle h3 = TextStyle(
    fontFamily: fontFamily,
    fontSize: 16,
    height: 24 / 16,
    fontWeight: semibold,
    fontVariations: [FontVariation('wght', 600)],
    color: DSColors.textPrimary,
  );

  static const TextStyle bodyLg = TextStyle(
    fontFamily: fontFamily,
    fontSize: 16,
    height: 24 / 16,
    fontWeight: regular,
    fontVariations: [FontVariation('wght', 400)],
    color: DSColors.textPrimary,
  );

  static const TextStyle body = TextStyle(
    fontFamily: fontFamily,
    fontSize: 14,
    height: 20 / 14,
    fontWeight: regular,
    fontVariations: [FontVariation('wght', 400)],
    color: DSColors.textPrimary,
  );

  static const TextStyle caption = TextStyle(
    fontFamily: fontFamily,
    fontSize: 12,
    height: 16 / 12,
    fontWeight: regular,
    fontVariations: [FontVariation('wght', 400)],
    color: DSColors.textSecondary,
  );

  static const TextStyle overline = TextStyle(
    fontFamily: fontFamily,
    fontSize: 10,
    height: 12 / 10,
    fontWeight: semibold,
    fontVariations: [FontVariation('wght', 600)],
    letterSpacing: 0.8, // +0.08em
    color: DSColors.textSecondary,
  );

  /// Re-weight a variable-font style so the semantic `fontWeight` AND the `wght`
  /// axis move together. Needed because `copyWith(fontWeight:)` alone is a no-op
  /// on a variable font (the axis in [fontVariations] wins). DS-internal use.
  static TextStyle withWeight(TextStyle base, FontWeight weight) {
    const axis = <FontWeight, double>{
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    };
    return base.copyWith(
      fontWeight: weight,
      fontVariations: [FontVariation('wght', axis[weight] ?? 400)],
    );
  }
}
