# Review of the Design System project export

Reviewed: `ds/export/components` (18 files), `ds/export/foundations` (19 files).

**Verdict: the components are buildable.** 12 of 18 need no change. Below: what is missing
from the export, what blocks the build, what exists only as prose, and form.

Tags: **[required]** affects what we build · **[recommended]** a fact exists only in prose,
or is needed for updates · **[cosmetic]** form only.

---

## Export completeness

**1. [required] Three components are missing.**
Exported components reference them, but the files are not in the export:

| Missing | Used by |
|---|---|
| `StatusPill` | `BranchCard` |
| `Button` | `Wallet` |
| `MembershipTierPill` | `LoyaltyPointsCard` |

Add them to the export. Rule: when a component is exported, everything it is composed of
is exported too.

**2. [required] One complete source of tokens.**
There are two sources now, and they disagree. Foundations — JSON, with usage notes, but
183 tokens of 262: no status colors (green / amber / red / blue), no alpha overlays, no
component aliases (`--button-*`, `--input-*`, `--chip-*`, `--card-*` …), no shadows, no
transitions. The CSS in the UI project's snapshot — all 262, but without notes. Six tokens
exist only in foundations: `--glass-bg`, `--glass-border`, `--glass-blur`,
`--button-height-xxs`, `--button-height-2xs`, `--text-body-sm-semibold`.
We propose bringing foundations to all 262 tokens — then we no longer need the CSS. Export
all tokens, not only the ones in use: alias chains pull each other in.

**3. [recommended] One date across all files.**
Currently `Voucher` is `2026-09-11`, most files are `09-12`, and `Badge`, `Dropdown`,
`LoyaltyPointsCard`, `Wallet` and all foundations are `09-16`. With mixed dates we cannot
tell which files are current or what changed since the previous export. One export — one
date on every file, including the files that did not change.

**4. [recommended] `_ds_manifest.json` in the Design System export.**
It currently arrives only with the UI project's snapshot. We need `exportDate` and
`brandFonts` from it. The full component list (78) is useful as a catalogue for new screens.

**5. [required] A reference to a file that does not exist.**
`LoyaltyPointsCard.json` references `./qr-code.svg`; `notes` says "the file is provided by
the design team". The file is in neither export. Attach it or remove the reference.

---

## Components — required

**6. `BottomNavigation.json` — height as a number, and the number does not match the token.**
Root height is the number `64`, the `showLabels: false` variant sets `56`, and `notes` says
"(64px)". Meanwhile the tokens `--bottomnav-height` and `--bottomnav-height-labeled` are
both `48px`. Remove the numbers; keep only the reference to the token.

**7. `LoyaltyPointsCard.json` — tree and prose contradict each other.**
The `left` column has `spacing: [0, 0]`, while `notes` says there is a `--space-xs` gap
above the tier pill. Put `--space-xs` into `spacing`.

**8. `TabBar.json` — the active look of the small tab exists only in prose.**
What an active small tab looks like (background `--gray-0`, border `--color-brand-primary`,
text `--color-text-accent`) is written only in `notes`. In `variants`, the `active` case
only changes the text color to `--color-text-primary` — that is the big tab's look. Add a
`small × active` case to `variants`.

**9. `Button` — when exporting, check the default background and radius.**
`Button` is not in the export (item 1), but in the copy from the UI project it has neither
`background` nor `radius` for the default look (primary, md): `surface: null`, and a
background appears only in the `secondary` / `tertiary` / `destructive` variants. It needs
`surface: { background: "--button-primary-bg", radius: … }`. In addition, `Wallet.json`
calls `Button` with `"radius": "full"` (pill), but `Button` has no `radius` axis. Add the axis.

**10. `MembershipTierPill` — when exporting, state the fill.**
Not in the export (item 1). In the copy from the UI project, `description` says "translucent
pill on dark surfaces", but the tree has no background at all. State the fill
(`--alpha-white-8` / `-12` / `-24` — whichever the design uses). In the same file `padding`
is written as the numbers `12` / `4`, although the tokens `--space-md` / `--space-xs` exist.

---

## Components — recommended: the fact exists, but only in `notes`

**11. `Stories.json` — the white gap exists only in prose.**
Between the colored ring and the photo there is a 2px gap in `--color-bg-surface`. It is
stated only in `notes`. Write it as `border` on the `photo` node.

**12. `Dropdown.json` — the open menu exists only in prose.**
What the open list looks like (surface, radius, shadow, rows, selected row) is only in
`notes`. Add a `menu` node, hidden by default and shown by the `open` variant.

**13. Font weight in `notes` in eight files.**
`BuyAgainCard`, `ProductVerticalCard`, `ProductMenuCard`, `SectionHeader`, `Greeting`,
`ScreenHeader`, `Wallet`, `Badge` write in `notes` "weight is bold/semibold over
`--text-…`". Either the token already carries that weight (`--text-h1`, `--text-h3` in
`typography-scale.json` are already bold — then the note is redundant), or the needed token
does not exist (`--text-body-sm-semibold` — see item 2). Add the missing `--text-*` tokens,
reference them in `style`, remove the notes.

---

## Components — cosmetic

**14. `"transparent"` as a background value.**
In `Greeting`, `IconButton`, `ScreenHeader`, `TabBar`, `Wallet` the `background` field
contains the word `"transparent"`. By the format a value is a token, a number, or a word
from a closed list; `"transparent"` is a CSS word. "No fill" is written as `null`.

**15. `spacing` length is not equal to `children − 1`.**
Violated in `BranchCard` (root and hours row), `Dropdown`, `Greeting`, `MenuTabsVertical`,
`ProductMenuCard`, `ScreenHeader`, `TabBar`, `Wallet`. Zero is written in two ways:
`[0, 0]` and `[]`. Pick one.

**16. `padding` as a string instead of an object.**
`MenuTabsVertical`, `ProductMenuCard`, `TabBar` write `"padding": "--space-xs"`; by the
format it is an object, `{ "all": "--space-xs" }` or per side.

**17. Fields that are not in the format.**
`overlayImage` (`LoyaltyPointsCard`), `weight` on a text node (`MenuTabsVertical`,
`TabBar`), `rotate` (`Dropdown`), `margin` (`Divider`), `opacity` (`Dropdown`, `IconButton`),
`scale` (`BranchCard`); computed sizes `{1/n}`, `{size+8}`, `{width}`. Each is a real need,
so we will add them to `FORMAT.md` rather than ask to remove them. For now — treat them as
extensions.

**18. `shows.children` in `BranchCard`, `Wallet`.**
`children` is a prop name from React. Use the name of the content slot (`label`).

**19. `Badge.json` — a name with parentheses.**
`name` is written as `"Badge (count)"`. A name is an identifier; there should be no
parentheses.
