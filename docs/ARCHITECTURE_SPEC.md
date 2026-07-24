# Gastro App — Architecture Specification

Version: 1.0 (adapted from Audio App spec v1.1)
Status: Canonical
Audience: Developers, AI agents (Copilot, Codex, Claude)

---

## 0. Purpose of This Document

This document is the single source of truth for the architecture of the Gastro application.

It defines:
- global project structure
- architectural layers and their responsibilities
- rules and constraints for implementation
- naming and structural conventions

All developers and AI agents must follow this document.
If something is not described here, it must not be invented without explicit approval.

This is an architectural contract, not a guideline.

Related documents:
- `DOMAIN_SPEC.md` — domain entities (to be written for the Gastro domain)
- `DATA_SPEC.md` — data layer contract
- `SCREENS_SPEC.md` — screen inventory (to be written from the design bundle)
- `design_bundle/BUNDLE.md` — how to read the design bundle

---

## 1. High-Level Architecture Overview

```text
lib/
├── core/                         # Global core
│   ├── di/                       # Riverpod providers (Dependency Injection)
│   ├── extensions/               # BuildContext aliases (ds_extensions.dart)
│   ├── navigation/               # go_router global route configuration + shell
│   ├── network/                  # Dio, ApiClient, Interceptors
│   └── utils/                    # Formatters, loggers
│
├── design_system/                # Design system (built from design_bundle)
│   ├── foundations/              # Tokens (atoms)
│   │   ├── ds_colors.dart        # Gray ramp, status hues, brand accent
│   │   ├── ds_typography.dart    # 8-tier text styles
│   │   ├── ds_spacing.dart       # 4px grid, spacing scale, layout presets
│   │   ├── ds_radius.dart        # Radius ramp + semantic aliases
│   │   └── ds_sizing.dart        # Component heights, touch targets, icon sizes
│   ├── components/               # Cross-screen widgets (from bundle specs)
│   └── theme/                    # Theme assembly from tokens
│       └── ds_theme_data.dart
│
├── domain/                       # BUSINESS LOGIC (pure Dart + state)
│   ├── entities/                 # Data models (Freezed) — see DOMAIN_SPEC.md
│   ├── repositories/             # Interfaces (contracts)
│   └── state/                    # Domain State Providers
│
├── data/                         # IMPLEMENTATION (infrastructure)
│   ├── dto/                      # JSON models (Data Transfer Objects)
│   └── repositories/             # Real/mock implementations
│
├── features/                     # PRESENTATION (UI + screen state)
│   ├── home/
│   │   └── presentation/
│   │       └── home/
│   │           ├── home_screen.dart
│   │           ├── home_controller.dart
│   │           └── widgets/      # Screen-local widgets (optional)
│   ├── menu/
│   ├── restaurant/
│   └── auth/
│
└── main.dart                     # Entry point and Riverpod initialization
```

Design System is isolated: visual changes are made only inside `design_system/`.
Controller Pattern: each feature screen has exactly two files — Screen + Controller
(when a controller is needed).

Widget placement:
- used by more than one screen → `design_system/components/`
- used by one screen only → `features/<screen>/widgets/`

Widgets receive data through props and callbacks; they do not fetch data themselves.

---

## 2. Layer Responsibility and Access Rules

- Domain layer contains pure business models, repository interfaces, and domain state.
- Data layer implements domain repositories and owns all infrastructure details.
- Features layer depends only on domain abstractions and shared UI/system utilities.
- Direct access to ApiClient, DTOs, or repository implementations from features is forbidden.

ApiClient is a shared infrastructure component located in `core/network/`.
- Used exclusively by the data layer
- Provides the only allowed HTTP access point
- Must not be accessed from domain or features

---

## 3. Domain Layer Specification

The domain layer is **UI-agnostic** and **API-agnostic**. It defines *what the app works
with*, not *how data is fetched*.

### 3.1 Folder Structure

```text
lib/
  domain/
    entities/        # pure models (Freezed) — inventory in DOMAIN_SPEC.md
    repositories/    # abstract classes (contracts)
    state/           # Domain State Providers
```

Entity and repository inventory is defined in `DOMAIN_SPEC.md` once the Gastro domain
model is written. Do not invent entities ahead of that document.

### 3.2 `domain/entities/*`

Contains **pure domain models** (entities), without any knowledge of JSON, HTTP,
or persistence.

#### Freezed (Domain Entities) — Mandatory

All domain entities in `lib/domain/entities/*` MUST be implemented using Freezed.
Domain entities must NOT contain JSON parsing (`fromJson/toJson`) or DTO logic.

### 3.3 `domain/repositories/*`

Contains **interfaces (abstract classes)** that describe how the domain expects to access
data. Implementations live in the `data/` layer. They do not know anything about HTTP,
Dio, JSON, or persistence.

### 3.4 `domain/state/*`

Contains **Domain State Providers** — long-lived state management for business entities.

- Uses Riverpod
- Operates on domain entities only
- Does not know about DTOs, API details, or UI
- Provides business operations (load, toggle, refresh)
- Lives longer than screens (survives navigation)

See Section 8 (State Management Policy) for detailed rules.

### 3.5 Summary

- Domain layer contains pure entities (no JSON/HTTP/persistence).
- Domain layer defines repository interfaces; implementations live in the data layer.
- Domain layer contains domain state providers for shared business data.

---

## 4. Data Layer Specification

The data layer is responsible for:
- talking to external data sources (HTTP API for now)
- mapping raw JSON → DTOs → domain entities
- implementing domain repository interfaces

We intentionally keep the data layer **simple**:
- no separate remote/local data sources (for now)
- no over-segmentation
- just DTOs + repository implementations
- a shared `ApiClient` lives in `core/`

### 4.1 Folder Structure

```text
lib/
  core/
    network/
      api_client.dart
      api_exceptions.dart   // optional
  data/
    dto/                    # one DTO per API response shape
    repositories/           # one *RepositoryImpl per domain interface
```

### 4.2 DTOs (data/dto/*)

DTOs represent **how API responses look**, not how the domain models look.

#### Freezed DTOs + JSON — Mandatory

All DTOs in `lib/data/dto/*` MUST be implemented using Freezed + json_serializable.

Rules:
- DTO fields represent the API response shape.
- Each DTO provides generated `fromJson`.
- Each DTO MUST provide mapping to domain (`toDomain()`), either as a method or extension.
- DTOs must not be used outside the data layer.

### 4.3 Repository Implementations (data/repositories/*)

Each `*RepositoryImpl`:
- implements exactly one domain repository interface
- uses `ApiClient` to talk to the backend
- uses DTOs to parse and map JSON to domain entities
- returns only domain entities from public methods

### 4.4 Summary

- The data layer: `ApiClient` (HTTP) → JSON → DTO → domain entities.
- Keep it simple: no local/remote split, no complex caching for now.
- If offline/cache support is added later: introduce `local/`, keep DTOs as the persisted
  format, keep domain layer unchanged.

### 4.5 Error Handling (Contract)

Goals:
- Features and UI MUST NOT depend on transport-level exceptions (Dio/HTTP).
- Errors MUST be represented in a stable, app-level form.

Rules:
- The data layer MUST convert transport-level failures (HTTP status, timeouts, network
  issues, invalid JSON) into a stable app-level error representation.
- Features/controllers MUST NOT catch or depend on Dio/HTTP exceptions directly.
- Repositories MUST expose errors only in app-level form (no DTOs, no Dio exceptions).
- Controllers MUST expose errors to the UI via UI-safe state (e.g., error state or
  `errorMessage`).
- Screens SHOULD support the relevant states: loading, empty, error, success.

Non-goals:
- This document does not define a specific error type yet (e.g. `Failure`), only the
  contract.

### 4.6 Navigation (Standard)

- The project uses `go_router` as the navigation solution.
- Global route configuration lives in `lib/core/navigation/`.
- Features define screens only; they MUST NOT own global route configuration.
- Navigation targets MUST be screen-level widgets (`*Screen`).
- Route naming SHOULD be stable and human-readable (e.g., `/home`, `/menu`,
  `/restaurant/:id`).

#### 4.6.1 Navigation Shell

The app has a persistent bottom tab bar across its main sections. This is an application
architecture decision, not a bundle instruction: in the design prototype the tab bar is
duplicated inside every page, but in Flutter it lives once, in the shell.

- The shell is implemented with `StatefulShellRoute` in `lib/core/navigation/`.
- The tab bar widget itself (from the bundle's `BottomTabBar` spec) lives in
  `design_system/components/`; the shell composes it.
- Tab branches preserve their own navigation stacks.
- Screens do not render or manage the tab bar.

### 4.7 Dependency Injection (Standard)

- Riverpod is the primary DI mechanism.
- Infrastructure dependencies (ApiClient, repository implementations, other core services)
  MUST be exposed via Riverpod providers in `lib/core/di/`.
- Features/controllers MUST NOT construct `ApiClient` or repository implementations
  directly.
- Features/controllers MAY read only:
  - domain repository providers (interfaces)
  - domain state providers
  - feature-safe services if explicitly provided via `core/di/`
- Domain layer MUST NOT depend on DI (except for `domain/state/` which uses Riverpod).

---

## 5. Features / Presentation Layer Specification

We use a **feature-first** structure for presentation code:
- `domain/` and `data/` are global (shared across features)
- `features/` contains **presentation only**

State management choice (for this project): **Riverpod (flutter_riverpod v2)**

### UI State — Freezed (Standard)

Screen state models in the features layer SHOULD be implemented using Freezed.

Naming rules (fixed):
- UI entry widgets are **Screen**: `MenuScreen`, `RestaurantScreen`, etc.
- Screen file names use `*_screen.dart`
- Screen controller file (when needed): `*_controller.dart`
- **No `*_providers.dart` by default**

### 5.1 What Lives in `features/` (high-level)

**Included:**
- Screens (Flutter UI)
- Screen-local widgets (only when needed)
- Screen controllers with UI-specific state (only when needed)

**Excluded:**
- HTTP / ApiClient (belongs to `core/`)
- DTOs (belong to `data/dto/`)
- repository implementations (belong to `data/repositories/`)
- domain entities and repository interfaces (belong to `domain/`)
- domain state (belongs to `domain/state/`)
- cross-screen widgets (belong to `design_system/components/`)

### 5.2 Screen Files

For every screen we create:

**Always required:**
```text
<screen>_screen.dart
```

**Optional (only when UI-specific state needed):**
```text
<screen>_controller.dart   // includes: UI State + Notifier + Provider
```

Optional:
- `widgets/` folder only if the screen has multiple local widgets.

### 5.3 One Screen Folder Template (approved)

```text
features/<feature>/presentation/<screen>/
  <screen>_screen.dart
  <screen>_controller.dart   // optional
  widgets/                   // optional
```

### 5.4 Approved `features/` Structure (V1)

Initial structure follows the four screens in the design bundle. It grows per screen as
the app develops; new features follow the template in 5.3.

```text
lib/
  features/
    home/
      presentation/
        home/
          home_screen.dart
          home_controller.dart

    menu/
      presentation/
        menu/
          menu_screen.dart
          menu_controller.dart

    restaurant/
      presentation/
        restaurant/
          restaurant_screen.dart
          restaurant_controller.dart

    auth/
      presentation/
        login/
          login_screen.dart
          login_controller.dart
```

---

## 6. Rules for AI Agents

- This document is canonical
- Do not invent new layers or folders
- Do not bypass domain repositories
- Follow naming and structural conventions strictly
- If something is unclear — ask, do not guess

---

## 7. State Management Policy

### 7.1 Two Types of State

**Domain State** — business data and operations:
- Entities (menu items, orders, restaurants, loyalty)
- Loading status and errors
- Business operations (load, refresh, toggle)
- Lives in `domain/state/`
- Long-lived (survives navigation between screens)

**Screen State** — UI-specific state:
- Search query, filters, selected category
- Selected items (multi-select)
- Scroll position, expanded/collapsed flags
- Lives in `features/.../presentation/.../`
- Short-lived (lives while screen is open)

### 7.2 Usage Rules

1. **Screen without UI-logic** — works directly with Domain State:
```dart
final menuState = ref.watch(menuStateProvider);
```

2. **Screen with UI-logic** — watches both:
```dart
final menuState = ref.watch(menuStateProvider);        // data
final uiState = ref.watch(menuControllerProvider);     // UI state
```

3. **Forbidden** — proxying domain data through screen controller:
```dart
// ❌ Bad
class MenuController {
  List<MenuItem> get items => _ref.read(menuStateProvider).items;
}

// ✅ Good — screen gets data directly
final menuState = ref.watch(menuStateProvider);
```

### 7.3 When Screen Controller is Needed

**Needed:**
- Search / filtering on screen
- Multi-select
- Local UI flags (isExpanded, isEditing)
- Scroll/tab state that should persist

**Not needed:**
- Screen just displays data from Domain State
- No UI-specific "memory"

### 7.4 Domain State Provider Template

```dart
// domain/state/menu_state.dart

@freezed
class MenuState with _$MenuState {
  const factory MenuState({
    @Default({}) Map<String, MenuItem> items,
    @Default(false) bool isLoading,
    String? error,
  }) = _MenuState;
}

class MenuNotifier extends StateNotifier<MenuState> {
  final MenuRepository _repository;

  MenuNotifier(this._repository) : super(const MenuState());

  Future<void> loadMenu() async {
    state = state.copyWith(isLoading: true, error: null);
    try {
      final items = await _repository.getMenu();
      final itemsMap = {for (var i in items) i.id: i};
      state = state.copyWith(items: itemsMap, isLoading: false);
    } catch (e) {
      state = state.copyWith(isLoading: false, error: e.toString());
    }
  }

  MenuItem? getItem(String id) => state.items[id];
  List<MenuItem> get itemsList => state.items.values.toList();
}

final menuStateProvider = StateNotifierProvider<MenuNotifier, MenuState>((ref) {
  final repository = ref.watch(menuRepositoryProvider);
  return MenuNotifier(repository);
});
```

> Note: this template uses `StateNotifier`, carried over from the previous project.
> Riverpod 2 recommends `Notifier` / `AsyncNotifier` for new code. Whether to migrate the
> template is an open decision — raise it before writing the first domain state provider.

---

End of ARCHITECTURE_SPEC.md
