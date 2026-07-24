/// Component dimensions & touch targets (bundle `sizing.css`). All values land on
/// the 4px grid.
abstract final class DSSizing {
  // Touch target
  static const double touchTargetMin = 48;

  // Button heights
  static const double buttonHeightLg = 56;
  static const double buttonHeightMd = 48;
  static const double buttonHeightSm = 40;
  static const double buttonHeightXs = 32;

  /// Horizontal button padding per size. Component-specific metric (not a rhythm
  /// token). The bundle's `Button.jsx` hardcodes these as `pads`; centralized
  /// here so call sites never carry raw numbers.
  static const double buttonPadLg = 24;
  static const double buttonPadMd = 20;
  static const double buttonPadSm = 16;
  static const double buttonPadXs = 12;

  // Input / field heights
  static const double inputHeightFloating = 56;
  static const double inputHeightFixed = 48;
  static const double inputPaddingX = 16;
  static const double inputPaddingY = 12;

  // Bars & rows
  static const double appbarHeight = 56;
  static const double appbarHeightIos = 44;
  static const double bottomNavHeight = 56; // no labels
  static const double bottomNavHeightLabeled = 64; // with labels
  static const double rowHeightCompact = 48;
  static const double rowHeightIcon = 56;
  static const double rowHeightTwoLine = 72;
  static const double rowHeightMulti = 88;

  // Icon bounding boxes (multiples of 4)
  static const double iconXs = 16;
  static const double iconSm = 20;
  static const double iconMd = 24; // default: nav, header actions
  static const double iconLg = 32; // FAB, primary quick actions
  static const double iconXl = 40;

  // Borders / strokes
  static const double borderWidthDefault = 1;
  static const double borderWidthFocus = 2;
  static const double focusRingOffset = 2;
}
