import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:gastro_test/design_system/theme/ds_theme_data.dart';
import 'package:gastro_test/dev/ds_preview_screen.dart';

void main() {
  runApp(const ProviderScope(child: GastroApp()));
}

class GastroApp extends StatelessWidget {
  const GastroApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Gastro',
      debugShowCheckedModeBanner: false,
      theme: DSTheme.light(),
      // Temporary: DS gallery for eyeballing the ported tokens + components.
      // Replaced by the go_router shell once navigation is assembled.
      home: const DSPreviewScreen(),
    );
  }
}
