import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/components/ds_image.dart';
import 'package:gastro_test/design_system/components/status_pill.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _thumb = 72;

/// BranchCard — a row for one physical location (bundle
/// `restaurant/BranchCard.jsx`): photo, name with optional distance, address,
/// today's hours and an open/closed [StatusPill].
///
/// Despite the name it is no longer a card: the 2026-09 bundle stripped the
/// surface, border, padding and shadow, so it is a bare row and the list that
/// hosts it supplies the separators.
///
/// Dumb: content in via props, tap out via [onTap]. With [onTap] null the row
/// is static — no caret, no press feedback.
class BranchCard extends StatefulWidget {
  final String? imageAsset;
  final String name;
  final String address;
  final String hours;
  final bool isOpenNow;
  final String? distance;
  final VoidCallback? onTap;

  const BranchCard({
    super.key,
    this.imageAsset,
    required this.name,
    required this.address,
    required this.hours,
    this.isOpenNow = true,
    this.distance,
    this.onTap,
  });

  bool get _interactive => onTap != null;

  @override
  State<BranchCard> createState() => _BranchCardState();
}

class _BranchCardState extends State<BranchCard> {
  bool _pressed = false;

  void _setPressed(bool v) {
    if (widget._interactive && _pressed != v) setState(() => _pressed = v);
  }

  @override
  Widget build(BuildContext context) {
    final row = Row(
      children: [
        DSImage(
          asset: widget.imageAsset,
          width: _thumb,
          height: _thumb,
          borderRadius: BorderRadius.circular(DSRadius.md),
        ),
        const SizedBox(width: DSSpacing.md),
        Expanded(child: _details()),
        if (widget._interactive) ...[
          const SizedBox(width: DSSpacing.sm),
          const Icon(
            PhosphorIconsRegular.caretRight,
            size: DSSizing.iconSm,
            color: DSColors.textTertiary,
          ),
        ],
      ],
    );

    if (!widget._interactive) return row;
    return GestureDetector(
      onTap: widget.onTap,
      onTapDown: (_) => _setPressed(true),
      onTapUp: (_) => _setPressed(false),
      onTapCancel: () => _setPressed(false),
      behavior: HitTestBehavior.opaque,
      child: AnimatedScale(
        scale: _pressed ? 0.97 : 1,
        duration: const Duration(milliseconds: 90),
        child: row,
      ),
    );
  }

  Widget _details() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.baseline,
          textBaseline: TextBaseline.alphabetic,
          children: [
            Flexible(
              child: Text(
                widget.name,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: DSTypography.body,
              ),
            ),
            if (widget.distance != null) ...[
              const SizedBox(width: DSSpacing.sm),
              Text(
                widget.distance!,
                style: DSTypography.caption.copyWith(
                  color: DSColors.textTertiary,
                ),
              ),
            ],
          ],
        ),
        const SizedBox(height: DSSpacing.xs),
        Row(
          children: [
            const Icon(
              PhosphorIconsRegular.mapPin,
              size: DSSizing.iconXs,
              color: DSColors.textTertiary,
            ),
            const SizedBox(width: DSSpacing.xs),
            Expanded(
              child: Text(
                widget.address,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: DSTypography.bodySm.copyWith(
                  color: DSColors.textSecondary,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: DSSpacing.xs),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              PhosphorIconsRegular.clock,
              size: DSSizing.iconXs,
              color: DSColors.textTertiary,
            ),
            const SizedBox(width: DSSpacing.xs),
            Text(
              widget.hours,
              style: DSTypography.bodyXs.copyWith(color: DSColors.textTertiary),
            ),
            const SizedBox(width: DSSpacing.xs),
            StatusPill(
              label: widget.isOpenNow ? 'Open' : 'Closed',
              tone: widget.isOpenNow ? DSStatusTone.success : DSStatusTone.error,
            ),
          ],
        ),
      ],
    );
  }
}
