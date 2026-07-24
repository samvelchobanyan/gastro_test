import 'package:flutter/material.dart';

/// The white-label brand layer — the ONLY tokens that change per client.
///
/// A client is onboarded with a **single accent color** ([DSBrand.fromAccent]);
/// the derived shades are computed, not enumerated by hand (CLAUDE.md §3.3):
/// - interactive (pressed/active) = `lerp(accent, black, 0.18)`
/// - subtle (tinted surface)      = `lerp(white,  accent, 0.12)`
///
/// Everything downstream (button/chip/fab fills, focus ring, interactive border,
/// accent text) resolves from these — this single extension covers the whole
/// re-skin checklist. Read ONLY via `Theme.of(context)` / `context.brand`; a
/// direct import would silently drop the element from the white-label layer.
@immutable
class DSBrand extends ThemeExtension<DSBrand> {
  /// accent-500 / color-brand-primary
  final Color primary;

  /// accent-600 / color-brand-interactive — pressed / active
  final Color interactive;

  /// accent-50 / color-brand-subtle — tinted surfaces
  final Color subtle;

  /// accent-contrast — text / icon sitting on an accent fill
  final Color onAccent;

  /// color-text-accent — accent-colored text on a neutral surface
  final Color textAccent;

  /// color-border-interactive / input-border-focus
  final Color borderInteractive;

  /// color-focus-ring
  final Color focusRing;

  const DSBrand({
    required this.primary,
    required this.interactive,
    required this.subtle,
    required this.onAccent,
    required this.textAccent,
    required this.borderInteractive,
    required this.focusRing,
  });

  /// Build the whole brand layer from one accent color.
  factory DSBrand.fromAccent(
    Color accent, {
    Color onAccent = const Color(0xFFFFFFFF),
  }) {
    final interactive = Color.lerp(accent, const Color(0xFF000000), 0.18)!;
    final subtle = Color.lerp(const Color(0xFFFFFFFF), accent, 0.12)!;
    return DSBrand(
      primary: accent,
      interactive: interactive,
      subtle: subtle,
      onAccent: onAccent,
      textAccent: interactive,
      borderInteractive: accent,
      focusRing: accent,
    );
  }

  /// Placeholder accent (`#E42832`). No brand colors are finalized yet — the
  /// real accent arrives from the customer. Swapping this one call re-skins the
  /// whole app.
  factory DSBrand.placeholder() => DSBrand.fromAccent(const Color(0xFFE42832));

  // ---- Tier-3 component leaves (the re-skin checklist), resolved from above ----
  Color get buttonPrimaryBg => primary;
  Color get buttonPrimaryBgActive => interactive;
  Color get chipBgSelected => primary;
  Color get controlOnBg => primary;
  Color get fabBg => primary;
  Color get fabBgActive => interactive;
  Color get inputBorderFocus => borderInteractive;

  @override
  DSBrand copyWith({
    Color? primary,
    Color? interactive,
    Color? subtle,
    Color? onAccent,
    Color? textAccent,
    Color? borderInteractive,
    Color? focusRing,
  }) {
    return DSBrand(
      primary: primary ?? this.primary,
      interactive: interactive ?? this.interactive,
      subtle: subtle ?? this.subtle,
      onAccent: onAccent ?? this.onAccent,
      textAccent: textAccent ?? this.textAccent,
      borderInteractive: borderInteractive ?? this.borderInteractive,
      focusRing: focusRing ?? this.focusRing,
    );
  }

  @override
  DSBrand lerp(ThemeExtension<DSBrand>? other, double t) {
    if (other is! DSBrand) return this;
    return DSBrand(
      primary: Color.lerp(primary, other.primary, t)!,
      interactive: Color.lerp(interactive, other.interactive, t)!,
      subtle: Color.lerp(subtle, other.subtle, t)!,
      onAccent: Color.lerp(onAccent, other.onAccent, t)!,
      textAccent: Color.lerp(textAccent, other.textAccent, t)!,
      borderInteractive: Color.lerp(borderInteractive, other.borderInteractive, t)!,
      focusRing: Color.lerp(focusRing, other.focusRing, t)!,
    );
  }
}
