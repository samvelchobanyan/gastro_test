import 'package:flutter/widgets.dart';

/// Neutral ramp, status hues, alpha overlays (bundle Tier-1 primitives) plus the
/// **brand-independent** Tier-2 semantic aliases (text / bg / border / status).
///
/// Brand-dependent tokens (accent ramp, brand-primary, focus ring, button / chip
/// / fab fills, interactive borders) do NOT live here — they are in `DSBrand`
/// (ThemeExtension) and are read only through `Theme.of(context)`. See CLAUDE.md
/// §3.3: importing a brand value directly would silently break the re-skin.
abstract final class DSColors {
  // ---- Neutral ramp (13 solid steps — numeric names per density rule) ----
  static const Color gray0 = Color(0xFFFFFFFF);
  static const Color gray50 = Color(0xFFF8F9FA);
  static const Color gray100 = Color(0xFFF1F3F5);
  static const Color gray200 = Color(0xFFE9ECEF);
  static const Color gray300 = Color(0xFFDEE2E6);
  static const Color gray400 = Color(0xFFCED4DA);
  static const Color gray500 = Color(0xFFADB5BD);
  static const Color gray600 = Color(0xFF868E96);
  static const Color gray700 = Color(0xFF495057);
  static const Color gray800 = Color(0xFF343A40);
  static const Color gray900 = Color(0xFF212529);
  static const Color gray950 = Color(0xFF16191C);
  static const Color gray1000 = Color(0xFF000000);

  // ---- Status hues ----
  static const Color green50 = Color(0xFFEBFBEE);
  static const Color green100 = Color(0xFFD3F9D8);
  static const Color green500 = Color(0xFF2F9E44);
  static const Color green600 = Color(0xFF2B8A3E);
  static const Color green700 = Color(0xFF237032);

  static const Color amber50 = Color(0xFFFFF9DB);
  static const Color amber100 = Color(0xFFFFF3BF);
  static const Color amber500 = Color(0xFFF08C00);
  static const Color amber600 = Color(0xFFE67700);
  static const Color amber700 = Color(0xFFB35A00);

  static const Color red50 = Color(0xFFFFF5F5);
  static const Color red100 = Color(0xFFFFE3E3);
  static const Color red500 = Color(0xFFE03131);
  static const Color red600 = Color(0xFFC92A2A);
  static const Color red700 = Color(0xFFA51F1F);

  static const Color blue50 = Color(0xFFE7F5FF);
  static const Color blue100 = Color(0xFFD0EBFF);
  static const Color blue500 = Color(0xFF1971C2);
  static const Color blue600 = Color(0xFF1864AB);
  static const Color blue700 = Color(0xFF145591);

  // ---- Alpha overlays (pressed / scrim states) ----
  static const Color alphaBlack4 = Color(0x0A000000);
  static const Color alphaBlack8 = Color(0x14000000);
  static const Color alphaBlack12 = Color(0x1F000000);
  static const Color alphaBlack40 = Color(0x66000000);
  static const Color alphaBlack60 = Color(0x99000000);
  static const Color alphaWhite8 = Color(0x14FFFFFF);
  static const Color alphaWhite12 = Color(0x1FFFFFFF);
  static const Color alphaWhite24 = Color(0x3DFFFFFF);

  // ---- Semantic Tier-2 (brand-INDEPENDENT only) ----
  // Backgrounds
  static const Color bgCanvas = gray50;
  static const Color bgMain = gray0;
  static const Color bgSurface = gray0;
  static const Color bgSurfaceSunken = gray100;
  static const Color bgInverse = gray900;
  static const Color bgScrim = alphaBlack40;

  // Text
  static const Color textPrimary = gray900;
  static const Color textSecondary = gray700;
  static const Color textTertiary = gray600;
  static const Color textDisabled = gray500;
  static const Color textOnBrand = gray0; // accent-contrast is locked #FFFFFF
  static const Color textInverse = gray0;

  // Borders / dividers
  static const Color borderMuted = gray200;
  static const Color borderDefault = gray300;
  static const Color borderStrong = gray400;

  // Status roles
  static const Color statusSuccess = green500;
  static const Color bgSuccess = green50;
  static const Color borderSuccess = green100;
  static const Color textSuccess = green700;

  static const Color statusWarning = amber500;
  static const Color bgWarning = amber50;
  static const Color borderWarning = amber100;
  static const Color textWarning = amber700;

  static const Color statusError = red500;
  static const Color bgError = red50;
  static const Color borderError = red100;
  static const Color textError = red700;

  static const Color statusInfo = blue500;
  static const Color bgInfo = blue50;
  static const Color borderInfo = blue100;
  static const Color textInfo = blue700;

  // State overlays / disabled
  static const Color overlayPressDark = alphaBlack12;
  static const Color overlayPressLight = alphaWhite12;
  static const Color overlayHoverDark = alphaBlack4;
  static const double stateDisabledOpacity = 0.35;
}
