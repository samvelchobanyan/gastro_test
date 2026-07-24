/// The 4px-grid rhythm scale (bundle `spacing.css`). Reused across unrelated
/// contexts — general vertical/horizontal rhythm only.
///
/// Functional layout metrics (screen margins, gutters, column presets, safe
/// areas) are kept OUT of this scale in [DSLayout]: a value tied to one purpose
/// gets its own named constant, it does not dilute the rhythm scale.
abstract final class DSSpacing {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 12;
  static const double base = 16;
  static const double lg = 24;
  static const double xl = 32;
  static const double xxl = 48;

  // Auto-layout stacking gaps (spec)
  static const double gapText = 8; // headline <-> description
  static const double gapBlock = 16; // independent content blocks
}

/// Mobile layout metrics — single-purpose functional values, not rhythm tokens.
abstract final class DSLayout {
  static const double screenWidth = 360;
  static const double margin = 16; // left & right screen margins
  static const double gutter = 8; // space between columns
  static const double contentWidth = 328; // 360 - 16*2

  // Column presets
  static const double colQuarter = 76;
  static const double colHalf = 160;
  static const double colThree = 244;
  static const double colFull = 328;

  // Safe areas
  static const double safeTop = 48;
  static const double safeTopIos = 52;
  static const double safeBottom = 32;
}
