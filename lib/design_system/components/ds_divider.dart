import 'package:flutter/material.dart';
import 'package:gastro_test/design_system/foundations/ds_colors.dart';
import 'package:gastro_test/design_system/foundations/ds_sizing.dart';

/// DSDivider — a hairline separating list rows (bundle
/// `data-display/Divider.jsx`).
///
/// The bundle's component also carries `inset`, `label` and `vertical`
/// variants; none is used by the screens we build, so they are left out until
/// something needs them. Named `DS*` because Material already owns `Divider`.
class DSDivider extends StatelessWidget {
  const DSDivider({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: DSSizing.borderWidthDefault,
      color: DSColors.borderMuted,
    );
  }
}
