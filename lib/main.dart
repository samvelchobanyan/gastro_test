import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:gastro_test/core/navigation/app_router.dart';
import 'package:gastro_test/design_system/theme/ds_theme_data.dart';

void main() {
  runApp(const ProviderScope(child: GastroApp()));
}

class GastroApp extends StatelessWidget {
  const GastroApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Gastro',
      debugShowCheckedModeBanner: false,
      theme: DSTheme.light(),
      routerConfig: appRouter,
    );
  }
}
