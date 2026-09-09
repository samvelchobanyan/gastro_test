# Hardcoded-value audit — remediation backlog

Audit of 12 components for values outside the design-system token scales.
Legend: **FIX** = worth tokenizing · *keep* = intentional/structural (spec-fixed sizes, QR colors, placeholder rgba).

## Greeting
- **FIX** text-stack `gap: 2` → `--space-xxs`
- **FIX** icon `fontSize: 24 / 22 / 20 / 18` → nearest `--icon-*`
- keep: bell dot `top:9/right:10/9×9`; avatar 36×36; logo/mark height 32; bell target 44×44
- row gap already `--space-md`

## Stories
- **FIX** `gap: 6` → `--space-xs`
- keep: `padding: 0`, `width: size + 8` (structural)

## LoyaltyPointsCard
- **FIX** `marginTop: 6` → `--space-xs`; `padding: 4` → `--space-xs`
- keep: QR `#000`/`#fff` (scannability); `rgba(255,255,255,0.04)` stripe; width/height 328/116 (spec-fixed); QR 64×64; +10px right pad (intentional)

## Wallet
- keep: icon 48×48; `rgba(255,255,255,0.06)` placeholder stripe; width 328 (spec-fixed)

## Voucher
- **FIX** `gap: 2` → `--space-xxs`
- keep: icon 48×48; `rgba(0,0,0,0.05)` stripe

## TabBar
- **FIX** `padding: 4` → `--space-xs`; indicator `top/bottom/left: 3/4`; `gap: 6` → `--space-xs`; `minHeight: 32/40` (off-scale) → nearest sizing token; icon `fontSize: 16` → `--icon-xs`

## BuyAgainCard / FavouriteVerticalCard
- **FIX** `gap: 2` → `--space-xxs`; `gap: 4` → `--space-xs`; pin `fontSize: 14` → `--icon-xs`(16) or token
- keep: placeholder stripe (gray tokens); width 128 (structural)

## BranchCard
- clean (tokenized in earlier passes)

## Divider
- clean

## SectionHeader
- clean (`padding: 0` reset only)

## BottomTabBar
- **FIX** `gap: 2` → `--space-xxs`; `padding: '6px 0'` → token; badge `fontSize: 10` → `--font-size-body-xs`
- keep/decide: badge `top:-4/right:-8/16×16/padding:0 4px` (structural)

## Notes
- `--space-xxs` = 2px (added earlier). Spacing scale otherwise xs/sm/md/base/lg…
- Intentional exceptions to leave alone: QR black/white, translucent placeholder-stripe rgba, spec-fixed card dims (328/116, 328), tap-target 44×44.
