# Дизайн-бандл Gastro — как читать

Экспорт из **Claude Design**. Веб-стек: CSS-переменные + React-компоненты.
**Код отсюда не портируется.** Бандл — это спецификация, по которой пишется Flutter.

Читается при работе с дизайн-системой и экранами. Общие правила проекта — в `CLAUDE.md`.

## Структура

```
design_bundle/
├── _ds/gastro-design-system-472aed.../   дизайн-система
│   ├── tokens/*.css                      значения (9 файлов в работе)
│   ├── components/**/*.jsx               спецификации компонентов (~70)
│   ├── _ds_manifest.json                 те же токены машиночитаемо (254 шт.)
│   ├── styles.css                        манифест @import — порядок разрешения
│   └── readme.md                         принципы системы
└── _pages/*.dc.html                      4 экрана
```

Что чем является:

| Что | Даёт | Когда нужно |
|---|---|---|
| `tokens/` + `_ds_manifest.json` | Все значения | Шаг foundation |
| `components/*.jsx` | **Внутренности** компонентов | Шаг виджетов |
| `_pages/*.dc.html` | **Композицию** экранов | Шаг экранов |

Связка на шаге экрана: `.dc.html` — каркас и пропсы, `.jsx` — устройство компонентов,
`tokens/` — значения.

---

## Токены

Трёхуровневая цепочка, порядок разрешения задан в `styles.css`:

```
fonts → primitives + brand → foundations → semantic → components
```

- **Tier 1 `primitives.css`** — сырая палитра: `--gray-0…1000`, статусные hue, alpha-оверлеи.
- **Tier 1 `brand.css`** — **единственный файл под клиента.** Акцентная шкала `--accent-50…900`.
  ⚠ Плейсхолдер. Комментарий внутри говорит «indigo», по факту лежит красный `#E42832` —
  комментарий устарел. Реальные цвета придут от заказчика.
- **Tier 2 `semantic.css`** — по назначению: `--color-text-primary`, `--color-bg-surface`,
  статусные роли, оверлеи состояний.
- **Tier 3 `components.css`** — точечные алиасы: `--button-primary-bg`, `--input-border-focus`,
  `--chip-bg-selected`, `--appbar-bg`. **Это значения, не компоненты** → foundation.

Основания: `typography.css`, `spacing.css`, `radius.css`, `sizing.css`, `fonts.css`.

**Правило системы:** компонент никогда не ссылается на Tier 1 напрямую — только через семантику.

**Не используем в этом проекте:** `motion.css`, `elevation.css`.

### Нюансы конвертации в Dart

- **Композитные текстовые токены.** `--text-h1` — CSS-шорткат `weight size/line-height family`.
  Во Flutter `height` — **множитель**, а не пиксели: H1 = 24/32 → `fontSize: 24, height: 32/24`.
  Так же для всех 8 ступеней.
- **Шрифт** Plus Jakarta Sans → в `pubspec.yaml` как ассет.
- **Иконки** Phosphor (`ph ph-<name>`) → нужен Flutter-пакет + маппинг имён.
- `/* @kind other */` в комментариях — служебная разметка экспорта, игнорировать.

### Чек-лист white-label

15 листовых токенов, которые должны перекраситься при смене бренда. Подменить один
`--accent-500` недостаточно — проверять по этому списку:

```
--accent-500, --accent-600, --accent-50,
--color-brand-primary, --color-brand-interactive, --color-brand-subtle,
--color-text-accent, --color-border-interactive, --color-focus-ring,
--button-primary-bg, --button-primary-bg-active,
--input-border-focus, --chip-bg-selected, --control-on-bg, --fab-bg
```

---

## Компоненты (`.jsx`)

**Это спека, а не код для порта.** Берём: варианты, шкалу размеров, состояния
(pressed / loading / disabled), слоты под иконки, имена и семантику пропсов,
внутреннюю композицию компонента.

Игнорируем: хуки, `className`, инлайн-стили, JSX-разметку, React-модель состояния.

⚠ **Часть значений захардкожена мимо токенов.** Например в `Button` объекты `fonts` и `pads`
заданы числами. Сверяться и с токенами, и с JSX — иначе размеры разъедутся.

---

## Экраны (`_pages/*.dc.html`)

Четыре самостоятельных документа. Каждый описывает себя полностью — метрики, токены,
компоненты, состояние и моки лежат прямо в файле.

| Экран | Компоненты DS |
|---|---|
| `Login.dc.html` | BottomTabBar, Button, TextInput |
| `Home.dc.html` | Avatar, BottomTabBar, BranchCard, LoyaltyWidget, NewsListing, QuickActionTiles, SectionHeader |
| `Menu.dc.html` | Avatar, BottomTabBar, FilterBar, MenuItemCard |
| `Restaurant.dc.html` | BottomTabBar, BranchCard, MenuItemCard, RestaurantHeader, SegmentedControl |

Холст: дизайн-ширина **360px**, фрейм **390×820**, сетка **4px**, поля **16px**.

### Синтаксис Claude Design

| Конструкция | Значение |
|---|---|
| `<x-import component-from-global-scope="...Namespace.X" ...>` | Инстанс компонента DS, атрибуты = пропсы |
| `<sc-for list="{{ items }}" as="item">` | Цикл по коллекции |
| `{{ ... }}` | Биндинг к состоянию или данным |
| `hint-size="w,h"` | Размеры компонента (напр. `100%,136px`) |
| `hint-placeholder-count` | Сколько заглушек рисовать в превью |
| `<script type="text/x-dc">` | Состояние, логика и моковые данные экрана |

Инлайн-стили на `<div>` дают отступы, гэпы, поведение скролла и ссылки на токены
(`font:var(--text-h1)`, `background:var(--color-bg-canvas)`).

`class Component extends DCLogic` в конце файла содержит `state`, методы-хендлеры
и массивы моков — годится как фикстуры для превью и как описание поведения.
**Стейт-менеджмент при этом — по вики, а не по этому коду.**

Границы файла: он описывает **композицию экрана**, но не внутренности компонентов.
Как устроена карточка внутри — в `MenuItemCard.jsx`.

Картинки грузятся с CDN Unsplash → в проде самохостить.

Общей обёртки в прототипе нет: `BottomTabBar` продублирован внутри каждого экрана.
Навигационная оболочка во Flutter — наше архитектурное решение.

---

## Чего в бандле нет

Исходные ТЗ, на которые ссылается `readme.md` (`Gastro Mobile App Design Specs.docx`
и список компонентов), в экспорт не попали. Нужен первоисточник — запрашивать у дизайнеров.
