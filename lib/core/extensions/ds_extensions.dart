import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:gastro_test/design_system/theme/ds_brand.dart';

/// Preferred entry point for typography in UI code (docs/typography_rules.md):
/// `Text(title, style: context.h2)`. copyWith is allowed only for color /
/// decoration overrides — never fontSize / weight / height / spacing / family.
extension DSTypographyX on BuildContext {
  TextStyle get display => DSTypography.display;
  TextStyle get h1 => DSTypography.h1;
  TextStyle get h2 => DSTypography.h2;
  TextStyle get h3 => DSTypography.h3;
  TextStyle get bodyLg => DSTypography.bodyLg;
  TextStyle get body => DSTypography.body;
  TextStyle get caption => DSTypography.caption;
  TextStyle get overline => DSTypography.overline;
}

/// Access to the white-label brand tokens. This is the ONLY sanctioned way to
/// read a brand-dependent color in UI code.
extension DSBrandX on BuildContext {
  DSBrand get brand => Theme.of(this).extension<DSBrand>()!;
}
