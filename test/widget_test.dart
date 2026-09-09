import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:gastro_test/main.dart';

void main() {
  testWidgets('app boots into Home', (tester) async {
    await tester.pumpWidget(const ProviderScope(child: GastroApp()));
    await tester.pump();

    expect(find.text('Aram'), findsOneWidget);
    expect(find.text('Nearest branches'), findsOneWidget);
  });
}
