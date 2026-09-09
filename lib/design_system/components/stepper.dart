import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_radius.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';
import 'package:gastro_test/design_system/foundations/ds_typography.dart';
import 'package:phosphor_icons/phosphor_icons.dart';

// Component geometry — local, not global tokens (a control's own dimensions are
// layout, not design language). Single compact size (bundle `sm`).
const double _height = 32;
const double _button = 32;
const double _valueMin = 32;

/// DSStepper — quantity increment/decrement control (bundle `forms/Stepper.jsx`).
/// `DS` prefix avoids the collision with `material.Stepper`.
///
/// Controlled: [value] comes in, changes go out via [onChanged]. `−` disables at
/// [min]; `+` is always enabled (no upper bound in this project). Step is fixed
/// at 1. Pill: 1px default border, full radius, white fill.
class DSStepper extends StatefulWidget {
  final int value;
  final int min;
  final ValueChanged<int> onChanged;

  const DSStepper({
    super.key,
    required this.value,
    this.min = 0,
    required this.onChanged,
  });

  @override
  State<DSStepper> createState() => _DSStepperState();
}

class _DSStepperState extends State<DSStepper> {
  bool _decPressed = false;
  bool _incPressed = false;

  bool get _canDec => widget.value > widget.min;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: _height,
      decoration: BoxDecoration(
        color: DSColors.bgMain,
        borderRadius: BorderRadius.circular(DSRadius.full),
        border: Border.all(
          color: DSColors.borderDefault,
          width: DSSizing.borderWidthDefault,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          _StepButton(
            icon: PhosphorIconsRegular.minus,
            enabled: _canDec,
            pressed: _decPressed,
            onPressed: () => widget.onChanged(widget.value - 1),
            onPressChange: (v) => setState(() => _decPressed = v),
          ),
          Container(
            constraints: const BoxConstraints(minWidth: _valueMin),
            alignment: Alignment.center,
            child: Text(
              '${widget.value}',
              style: DSTypography.withWeight(
                DSTypography.body,
                DSTypography.semibold,
              ),
            ),
          ),
          _StepButton(
            icon: PhosphorIconsRegular.plus,
            enabled: true,
            pressed: _incPressed,
            onPressed: () => widget.onChanged(widget.value + 1),
            onPressChange: (v) => setState(() => _incPressed = v),
          ),
        ],
      ),
    );
  }
}

class _StepButton extends StatelessWidget {
  final IconData icon;
  final bool enabled;
  final bool pressed;
  final VoidCallback onPressed;
  final ValueChanged<bool> onPressChange;

  const _StepButton({
    required this.icon,
    required this.enabled,
    required this.pressed,
    required this.onPressed,
    required this.onPressChange,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: enabled ? (_) => onPressChange(true) : null,
      onTapUp: enabled ? (_) => onPressChange(false) : null,
      onTapCancel: enabled ? () => onPressChange(false) : null,
      onTap: enabled ? onPressed : null,
      child: Container(
        width: _button,
        height: _button,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: pressed ? DSColors.overlayPressDark : Colors.transparent,
          borderRadius: BorderRadius.circular(DSRadius.full),
        ),
        child: Icon(
          icon,
          size: DSSizing.iconXs,
          color: enabled ? DSColors.textPrimary : DSColors.textDisabled,
        ),
      ),
    );
  }
}
