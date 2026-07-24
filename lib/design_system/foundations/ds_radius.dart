/// Corner-radius ramp + semantic aliases (bundle `radius.css`). Radii scale with
/// element size.
///
/// Note: the bundle marks radius as part of the *swappable brand layer* (a client
/// may dial the whole app rounder/sharper). For this spike it stays an invariant
/// `const` foundation; if a client needs a different corner style it can be moved
/// into `DSBrand` later (CLAUDE.md §3.3 — "optionally the corner style").
abstract final class DSRadius {
  // Raw ramp
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 12;
  static const double lg = 16;
  static const double xl = 24;
  static const double xxl = 32;
  static const double full = 9999;

  // Semantic aliases (by component scale)
  static const double badge = xs; // badges, checkboxes, stars
  static const double checkbox = xs;
  static const double tag = sm; // tags, small buttons, thumbnails
  static const double buttonSm = sm;
  static const double tooltip = sm;
  static const double input = md; // inputs, dialogs
  static const double dialog = md;
  static const double card = lg; // cards
  static const double sheet = xl; // bottom sheets, modals
  static const double modal = xxl;
  static const double pill = full; // pills, tabs, avatars
  static const double avatar = full;
}
