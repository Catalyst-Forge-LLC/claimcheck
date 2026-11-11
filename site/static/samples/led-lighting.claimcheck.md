# ClaimCheck — "Swap the last incandescent bulbs"

Worked sample, written to show a mostly-passing report. The source
is an example written for ClaimCheck. Figures in
**Contrast** were checked on 2026-11-10 against the sources listed
at the end.

**Source:** `led-lighting.md` (example), read 2026-11-10. Unchanged.
**Central claim:** > "If you still have incandescent bulbs in the lamps you leave on for hours, swap them for LEDs."
**Summary:** clear failures: 0 · partial: 2 · passed: 5 · N/A: 0
**Score:** 6 / 7

The claim holds on mechanism, magnitude, boundary, trade-offs, and
output. Its one dated figure (lighting as about 15% of home
electricity) has been revised down, and one equivalence is uncited.
Neither changes the advice.

## Claims read

- **C-1** > "LEDs use at least 75 percent less energy than incandescent bulbs and last up to 25 times longer, for the same light."
- **C-2** > "Compare by lumens, not watts: an LED around 800 lumens replaces an old 60-watt bulb."
- **C-3** > "lighting is about 15% of an average home's electricity"
- **C-4** > "In a home that already switched most fixtures, the remaining savings are small"
- **C-5** > "an incandescent's waste heat slightly warms the room, so in a cold climate some of the saving shows up as a little more heating."

## Findings

### 1 · Mechanistic literacy — passed

> "Compare by lumens, not watts"

Why: The claim models the process correctly: watts measure power
drawn, lumens measure light produced, and the saving is the same
light for less energy. It does not confuse power with energy.

Contrast: DOE/EE-0344: "While a watt is a measure of electrical
power, a lumen is a measure of light (brightness)."

Next step: None.

### 2 · Quantitative and comparative literacy — passed

> "How much it saves depends on how many incandescents you have left and how long they burn."

Why: Gives a relative figure (≥75% less energy), a share of a
household total, and scales the saving to the bulbs and hours that
remain. A reader can judge size.

Contrast: DOE/EE-0344: LEDs "use at least 75 percent less energy than
incandescent bulbs."

Next step: None.

### 3 · Scale and boundary literacy — passed

> "In a home that already switched most fixtures, the remaining savings are small"

Why: Household boundary, stated and kept. No leap to national
savings.

Contrast: not needed.

Next step: None.

### 4 · Trade-off and substitution literacy — passed

> "in a cold climate some of the saving shows up as a little more heating. In summer it works the other way"

Why: Names the interaction between lighting waste heat and space
conditioning, in both directions, without overstating it.

Contrast: DOE/EE-0344: incandescent bulbs "waste 90% of their energy
as heat."

Next step: None.

### 5 · Output and value accounting — passed

> "for the same light"

Why: The output (light) is held constant; the comparison is per unit
of output.

Contrast: not needed.

Next step: None.

### 6 · Recency and updating literacy — partial

> "DOE's lighting guide says lighting is about 15% of an average home's electricity"

Why: The claim names its source but not its date. DOE/EE-0344 is from
October 2010. EIA's most recent survey puts lighting at about 6% of
U.S. home electricity in 2020 — the share fell, in large part
because many homes already made this switch. The advice survives
(and C-4 already anticipates it), but the 15% figure overstates the
typical remaining saving.

Contrast: EIA FAQ "How much electricity is used for lighting in the
United States?" (last updated March 15, 2024): "in 2020, electricity
consumption for lighting accounted for about 6% (81 billion
kilowatthours [kWh]) of electricity consumption in U.S. homes."

Next step: replace the 15% figure with EIA RECS 2020, or date it as
2010.

### 7 · Source and evidentiary literacy — partial · unverified

> "Source: DOE, *Guide to Energy Efficient Lighting* (DOE/EE-0344)." · "an LED around 800 lumens replaces an old 60-watt bulb"

Why: The main figures cite a primary agency source, which holds.
The 800-lumen / 60-watt equivalence is uncited, and the DOE guide
opened gives a different pairing (1,100 lumens for a 75-watt bulb).
The equivalence is widely used, but this run did not check it.

Contrast: DOE/EE-0344: "If you are looking for an energy-efficient
alternative to a 75-watt light bulb, you should look for a 1,100
lumen CFL or LED light."

Next step: cite the ENERGY STAR or DOE lumens-equivalence table for
the 60-watt line.

## Next steps

1. Update the household lighting share to EIA RECS 2020 (about 6%).
2. Cite a lumens-to-watts equivalence table for the 800 lm ≈ 60 W line.

## Unverified

- 800 lumens ≈ 60-watt incandescent — not stated in the DOE guide
  opened. Check ENERGY STAR's lighting guidance.

## A stronger version

None needed beyond the two next steps.

## Sources opened

- DOE, *Guide to Energy Efficient Lighting*, DOE/EE-0344, October 2010 — https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf — 75% less energy, 25× life, 15% of home electricity, watts vs lumens, 1,100 lm ≈ 75 W.
- EIA, FAQ "How much electricity is used for lighting in the United States?" — https://www.eia.gov/tools/faqs/faq.php?id=99 — about 6% (81 billion kWh) of home electricity in 2020.
