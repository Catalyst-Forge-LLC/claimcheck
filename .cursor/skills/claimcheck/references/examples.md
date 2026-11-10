# Examples

Read before you emit a finding. Each dimension has one finding
to emit and one to drop. The emit examples use the data-center
water case from the shipped sample; figures in them were checked
against the sources named in that sample. Do not reuse these
numbers in a new report without opening the source again.

## 1 · Mechanism

**Emit — clear failure**

> "Every query drinks water that is gone forever."

Why: Evaporative cooling consumes water from the local supply by
turning it to vapor; the water re-enters the hydrologic cycle and
is not destroyed. "Gone forever" treats consumption as
destruction. Withdrawal (water taken and returned, such as cooling
tower blowdown) is a third category the claim does not separate.
Next step: LBNL 2024 report, Section 4, cooling systems table —
which systems evaporate water and which do not.

**Drop**

> "Data centers consume water for cooling."

"Consume" matches the mechanism for evaporative systems. Wanting
a softer verb is a phrasing note, not a literacy gap.

## 2 · Magnitude

**Emit — clear failure**

> "17 billion gallons a year!"

Why: No denominator. Against the USGS 2015 national irrigation
consumptive use (73.2 Bgal/d, about 26,700 Bgal/yr), the figure
is under a tenth of a percent. The reader cannot tell big from
small without some baseline.
Next step: USGS Circular 1441, consumptive use by category.

**Drop**

A claim that gives a share of a named total and a comparison to
one larger use passes even if you would have picked a different
comparison.

## 3 · Boundary

**Emit — partial**

> "Our county's aquifer is falling, and nationally AI is draining
> the country."

Why: The first half names a local, checkable stress. The second
half carries it to a national total without a national figure.
Local stress and national share are separate questions.
Next step: the county's groundwater monitoring data; the
facility's water permit or utility filing.

**Drop**

National totals used for a national claim, with the boundary
stated, are not a boundary finding.

## 4 · Trade-off

**Emit — clear failure**

Absent: the source demands data centers "stop using water" and
never mentions what cooling would use instead.
Why: Dry and air-cooled systems cut on-site water but use more
electricity, and electricity generation consumes water too. LBNL
2024: "While air-cooled chillers use no water, they use more
energy."
Next step: LBNL 2024, PUE and WUE results; the facility's
cooling design.

**Drop**

A claim about a resource with no plausible substitute, or one
whose argument does not turn on substitution: mark `N/A`.

## 5 · Output

**Emit — clear failure**

> "All that water wasted so a chatbot can write a poem."

Why: Names one trivial output and calls the whole use waste. The
same facilities serve search, email, payments, logistics, and
research compute. A claim may argue the output is not worth it,
but it must count what is produced.
Next step: name the services the facility runs; compare water
per unit of output with other uses the reader accepts.

**Drop**

> "I don't think this is worth the water."

A stated value judgment that names the output is an opinion the
claim is entitled to. Not a finding.

## 6 · Recency

**Emit — partial**

> "A 2023 study says a bottle of water per conversation."

Why: Dates the figure (good) but uses an early per-response
estimate for older models and hardware, without noting newer
measured per-prompt disclosures or that the study's scope
included water at power plants.
Next step: open the study's latest version and its scope
definition; compare with the newest operator disclosures.

**Drop**

A figure that is old but still the latest available, and dated
as such, passes.

## 7 · Evidence

**Emit — clear failure**

> "I saw a graphic that said…"

Why: Secondary amplification of an unnamed figure. The
systematic report the figure probably came from exists and was
not cited.
Next step: name and open the report.

**Drop**

Citing a reputable news story that itself links the primary
report is `partial`, not `clear failure`: the trail exists, the
claim just did not follow it.

## Do not emit, any dimension

- Tone, sarcasm, or loaded words with no literacy consequence.
- A disagreement with the claim's values when the claim names
  what it is weighing.
- A missing number you could have looked up for the author, if
  the claim's conclusion does not depend on it.
- A finding on the author's character or motives.
