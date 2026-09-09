import 'package:flutter/material.dart';
import 'package:gastro_test/core/extensions/ds_extensions.dart';
import 'package:gastro_test/design_system/components/network_image.dart';
import 'package:gastro_test/design_system/components/stepper.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_elevation.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_spacing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens.
const double _thumb = 104;
const double _addButtonSize = 36;
const double _tagPadV = 2;

/// MenuItemCard — a horizontal dish card (bundle `menu/MenuItemCard.jsx`):
/// text column left, 104px image + add-action right.
///
/// Dumb and **controlled by [quantity]** — it holds no quantity state. Tapping
/// Add fires [onAdd]; the parent raises quantity, which re-renders the card into
/// the [DSStepper] branch. Decrementing to 0 fires `onQuantityChange(0)` and the
/// parent flips it back to the Add button. The only local state is the Add
/// button's pressed visual.
class MenuItemCard extends StatefulWidget {
  final String name;
  final String? description;
  final double price;
  final String currency;
  final String? imageUrl;
  final String? tag;
  final int quantity;
  final VoidCallback onAdd;
  final ValueChanged<int> onQuantityChange;

  const MenuItemCard({
    super.key,
    required this.name,
    this.description,
    required this.price,
    this.currency = '\$',
    this.imageUrl,
    this.tag,
    this.quantity = 0,
    required this.onAdd,
    required this.onQuantityChange,
  });

  @override
  State<MenuItemCard> createState() => _MenuItemCardState();
}

class _MenuItemCardState extends State<MenuItemCard> {
  bool _addPressed = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(DSSpacing.base),
      decoration: BoxDecoration(
        color: DSColors.bgSurface,
        borderRadius: BorderRadius.circular(DSRadius.card),
        border: Border.all(
          color: DSColors.borderMuted,
          width: DSSizing.borderWidthDefault,
        ),
        boxShadow: DSElevation.card,
      ),
      child: IntrinsicHeight(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(child: _textColumn(context)),
            const SizedBox(width: DSSpacing.base),
            SizedBox(width: _thumb, child: _imageAction()),
          ],
        ),
      ),
    );
  }

  Widget _textColumn(BuildContext context) {
    final brand = context.brand;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.tag != null) ...[
          Container(
            padding: const EdgeInsets.symmetric(
              horizontal: DSSpacing.sm,
              vertical: _tagPadV,
            ),
            decoration: BoxDecoration(
              color: brand.subtle,
              borderRadius: BorderRadius.circular(DSRadius.tag),
            ),
            child: Text(
              widget.tag!.toUpperCase(),
              style: DSTypography.overline.copyWith(color: brand.textAccent),
            ),
          ),
          const SizedBox(height: DSSpacing.sm),
        ],
        Text(widget.name, style: DSTypography.h3),
        if (widget.description != null) ...[
          const SizedBox(height: DSSpacing.xs),
          Text(
            widget.description!,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: DSTypography.body.copyWith(color: DSColors.textSecondary),
          ),
        ],
        const Spacer(),
        Text(
          '${widget.currency}${widget.price.toStringAsFixed(2)}',
          style: DSTypography.withWeight(DSTypography.h3, DSTypography.bold),
        ),
      ],
    );
  }

  Widget _imageAction() {
    return Stack(
      children: [
        Positioned.fill(
          child: DSNetworkImage(
            imageUrl: widget.imageUrl,
            fit: BoxFit.cover,
            borderRadius: BorderRadius.circular(DSRadius.md),
          ),
        ),
        if (widget.quantity > 0)
          Positioned(
            right: 0,
            bottom: DSSpacing.sm,
            child: DSStepper(
              value: widget.quantity,
              min: 0,
              onChanged: widget.onQuantityChange,
            ),
          )
        else
          Positioned(
            right: DSSpacing.sm,
            bottom: DSSpacing.sm,
            child: _addButton(context),
          ),
      ],
    );
  }

  Widget _addButton(BuildContext context) {
    final brand = context.brand;
    return GestureDetector(
      onTapDown: (_) => setState(() => _addPressed = true),
      onTapUp: (_) => setState(() => _addPressed = false),
      onTapCancel: () => setState(() => _addPressed = false),
      onTap: widget.onAdd,
      child: Container(
        width: _addButtonSize,
        height: _addButtonSize,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: _addPressed ? brand.buttonPrimaryBgActive : brand.buttonPrimaryBg,
          borderRadius: BorderRadius.circular(DSRadius.md),
          boxShadow: DSElevation.raised,
        ),
        child: Icon(
          PhosphorIconsRegular.plus,
          size: DSSizing.iconMd,
          color: brand.onAccent,
        ),
      ),
    );
  }
}
