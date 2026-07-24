import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:gastro_test/design_system/theme/ds_brand.dart';

/// Assembles Flutter's [ThemeData] from the design tokens:
/// - the type family + a **partial** `TextTheme` (common roles only, per
///   docs/typography_rules.md — this adapter layer is not used directly in UI),
/// - a neutral [ColorScheme] seeded from the brand accent,
/// - the [DSBrand] extension so brand tokens are reachable via `context.brand`.
abstract final class DSTheme {
  static ThemeData light({DSBrand? brand}) {
    final b = brand ?? DSBrand.placeholder();
    return ThemeData(
      useMaterial3: true,
      fontFamily: DSTypography.fontFamily,
      scaffoldBackgroundColor: DSColors.bgCanvas,
      colorScheme: ColorScheme.fromSeed(
        seedColor: b.primary,
        brightness: Brightness.light,
      ).copyWith(
        primary: b.primary,
        onPrimary: b.onAccent,
        surface: DSColors.bgSurface,
        onSurface: DSColors.textPrimary,
        error: DSColors.statusError,
      ),
      textTheme: _textTheme,
      extensions: [b],
    );
  }

  // Adapter layer: DS tiers → Material roles. Intentionally partial.
  static const TextTheme _textTheme = TextTheme(
    displayLarge: DSTypography.display,
    headlineMedium: DSTypography.h1,
    headlineSmall: DSTypography.h2,
    titleLarge: DSTypography.h3,
    bodyLarge: DSTypography.bodyLg,
    bodyMedium: DSTypography.body,
    bodySmall: DSTypography.caption,
    labelSmall: DSTypography.overline,
  );
}
