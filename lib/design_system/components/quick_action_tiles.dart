import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_elevation.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';

/// One shortcut action for [QuickActionTiles].
typedef QuickAction = ({IconData icon, String label, VoidCallback onTap});

/// QuickActionTiles — an evenly-spaced row of square shortcut tiles (bundle
/// `quick-action-tiles/QuickActionTiles.jsx`). Each tile: accent icon over a
/// label, on a raised card. Dumb: actions (with their callbacks) come in as props.
class QuickActionTiles extends StatelessWidget {
  final List<QuickAction> actions;

  const QuickActionTiles({super.key, required this.actions});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        for (var i = 0; i < actions.length; i++) ...[
          if (i > 0) const SizedBox(width: DSSpacing.md),
          Expanded(child: _Tile(action: actions[i])),
        ],
      ],
    );
  }
}

class _Tile extends StatefulWidget {
  final QuickAction action;

  const _Tile({required this.action});

  @override
  State<_Tile> createState() => _TileState();
}

class _TileState extends State<_Tile> {
  bool _pressed = false;

  void _setPressed(bool v) {
    if (_pressed != v) setState(() => _pressed = v);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: widget.action.onTap,
      onTapDown: (_) => _setPressed(true),
      onTapUp: (_) => _setPressed(false),
      onTapCancel: () => _setPressed(false),
      child: AnimatedScale(
        scale: _pressed ? 0.97 : 1,
        duration: const Duration(milliseconds: 90),
        child: AspectRatio(
          aspectRatio: 1,
          child: Container(
            decoration: BoxDecoration(
              color: DSColors.bgSurface,
              borderRadius: BorderRadius.circular(DSRadius.card),
              boxShadow: DSElevation.card,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  widget.action.icon,
                  size: DSSizing.iconLg,
                  color: context.brand.primary,
                ),
                const SizedBox(height: DSSpacing.sm),
                Text(
                  widget.action.label,
                  style: DSTypography.withWeight(
                    DSTypography.body,
                    DSTypography.medium,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
