import 'package:flutter/widgets.dart';

/// **Authored, not ported.** The bundle's `elevation.css` / `motion.css` are
/// intentionally not used (CLAUDE.md §3 / BUNDLE.md). These four neutral,
/// black-based shadow sets are hand-tuned from the readme's Elevation section
/// (card · raised · overlay · sheet) so real layers separate without dragging the
/// web token file into Flutter. Flat by default — elevation only marks true layers.
abstract final class DSElevation {
  /// Cards — subtle lift off the canvas.
  static const List<BoxShadow> card = [
    BoxShadow(color: Color(0x0D000000), blurRadius: 2, offset: Offset(0, 1)),
  ];

  /// FAB / cart bar — clearly raised above content.
  static const List<BoxShadow> raised = [
    BoxShadow(color: Color(0x14000000), blurRadius: 8, offset: Offset(0, 2)),
  ];

  /// Dialog / dropdown / toast — floating overlay.
  static const List<BoxShadow> overlay = [
    BoxShadow(color: Color(0x1F000000), blurRadius: 16, offset: Offset(0, 4)),
  ];

  /// Bottom sheet — upward cast.
  static const List<BoxShadow> sheet = [
    BoxShadow(color: Color(0x1F000000), blurRadius: 24, offset: Offset(0, -8)),
  ];
}
