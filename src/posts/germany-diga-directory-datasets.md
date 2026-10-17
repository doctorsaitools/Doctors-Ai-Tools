---
title: "Germany's Prescribable Health Apps: DiGA in Data"
description: "Five downloadable datasets from Germany's official DiGA directory: status, conditions, prices, makers and removed apps. Digital health apps, not AI."
category: Guides
type: guide
keyword: diga directory germany list
date: 2026-10-18
updated: 2026-10-18
reviewed: true
reviewedOn: 2026-10-18
tone: c
---
In Germany, doctors can prescribe approved health apps and statutory health insurance pays for them. These apps are called DiGA (Digitale Gesundheitsanwendungen, digital health applications), and the federal drugs and devices institute, BfArM, keeps the official directory. We copied it on 18 October 2026 and turned it into five datasets you can read here and download as CSV files. Every figure is a count of entries in the directory, or a figure worked out from those entries.

**Status: data from the BfArM directory, reviewed by Dr. Gupta.** The directory holds 82 entries: 63 apps listed today and 19 that have been removed.

**These are digital health apps, not AI devices.** The directory does not say whether an app uses artificial intelligence, and we do not guess. We include it because it is an official public record of digital tools doctors can prescribe and insurers pay for.

<div class="ds-keys"><div class="ds-key"><b>63</b><span>apps listed and prescribable today</span></div><div class="ds-key"><b>50</b><span>permanently listed</span></div><div class="ds-key"><b>13</b><span>provisionally listed, on trial</span></div><div class="ds-key"><b>19</b><span>apps removed from the directory since 2022</span></div></div>

## How to read these numbers

- **This is one day's copy.** The directory changes as apps are added, made permanent or removed. A later copy will differ.
- **Provisional means on trial.** A provisionally listed app can be prescribed while its maker gathers evidence of benefit. A permanent listing means BfArM has accepted that evidence.
- **Prices are the manufacturer's price shown in the directory.** We report them as shown, in euros. One app, My7steps, shows a range (€0.00 to €207.00) rather than one price, so we leave it out of price figures.
- **Conditions use the first ICD-10 code shown.** Many apps list several codes and the directory hides some behind "and X more". We group each app by the chapter of its first code. A few apps span chapters: HelloBetter Chronische Schmerzen lists pain disorder (F) and fibromyalgia (M), for example.
- **A listing is not a recommendation.** It shows the app met BfArM's requirements. Whether it suits a given patient is a clinical decision.

## Dataset 1: permanent and provisional listings

<div class="ds-card"><h3>Listed apps by status</h3><p class="ds-sub">All 63 apps listed on 18 October 2026</p><ul class="ds-bars"><li><span class="l">Permanent</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">50</span></li><li><span class="l">Provisional</span><span class="t"><i style="--w:26.0%"></i></span><span class="v">13</span></li></ul><a class="ds-dl" href="/data/germany-diga-by-status.csv">germany-diga-by-status.csv</a></div>

79.4% of listed apps are permanent. The provisional 13 are spread across urology, women's health, ADHD, dementia, back and shoulder pain, depression and blood pressure.

## Dataset 2: conditions

<div class="ds-card"><h3>Listed apps by ICD-10 chapter</h3><p class="ds-sub">Chapter of the first code shown for each app</p><ul class="ds-bars"><li><span class="l">Mental and behavioural (F)</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">30</span></li><li><span class="l">Genitourinary (N)</span><span class="t"><i style="--w:33.3%"></i></span><span class="v">10</span></li><li><span class="l">Musculoskeletal (M)</span><span class="t"><i style="--w:23.3%"></i></span><span class="v">7</span></li><li><span class="l">Endocrine and metabolic (E)</span><span class="t"><i style="--w:16.7%"></i></span><span class="v">5</span></li><li><span class="l">Cancer (C)</span><span class="t"><i style="--w:6.7%"></i></span><span class="v">2</span></li><li><span class="l">Circulatory (I)</span><span class="t"><i style="--w:6.7%"></i></span><span class="v">2</span></li><li><span class="l">Ear (H)</span><span class="t"><i style="--w:6.7%"></i></span><span class="v">2</span></li><li><span class="l">Nervous system (G)</span><span class="t"><i style="--w:6.7%"></i></span><span class="v">2</span></li><li><span class="l">Digestive (K)</span><span class="t"><i style="--w:3.3%"></i></span><span class="v">1</span></li><li><span class="l">Factors influencing health (Z)</span><span class="t"><i style="--w:3.3%"></i></span><span class="v">1</span></li><li><span class="l">Symptoms and signs (R)</span><span class="t"><i style="--w:3.3%"></i></span><span class="v">1</span></li></ul><a class="ds-dl" href="/data/germany-diga-by-icd-chapter.csv">germany-diga-by-icd-chapter.csv</a></div>

Mental and behavioural conditions dominate: 30 of 63 apps (47.6%). Depression, anxiety and panic, insomnia, ADHD, eating disorders, smoking and alcohol all have apps. Genitourinary conditions come next with 10, including incontinence, endometriosis, menopause and period pain. Musculoskeletal conditions have 7.

## Dataset 3: prices

<div class="ds-card"><h3>Median manufacturer's price by status</h3><p class="ds-sub">62 apps with one price shown</p><ul class="ds-bars"><li><span class="l">Provisional</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">€595</span></li><li><span class="l">Permanent</span><span class="t"><i style="--w:38.9%"></i></span><span class="v">€231</span></li></ul><a class="ds-dl" href="/data/germany-diga-by-status.csv">germany-diga-by-status.csv</a></div>

| Status | Apps with a price | Median | Lowest | Highest |
|---|---|---|---|---|
| Permanent | 49 | €231.25 | €119.00 | €765.00 |
| Provisional | 13 | €595.00 | €360.00 | €795.00 |

The median provisional app is priced at more than twice the median permanent one. The directory does not explain individual prices, and we do not draw conclusions about why. Every listed app shows "no extra costs" for the patient.

16 apps (25.4%) say they need services from a contracted doctor alongside the app. 2 need an extra device, 2 include one, and 6 can use one optionally. The other 53 need no extra device.

## Dataset 4: manufacturers

38 manufacturers make the 63 listed apps. 10 make more than one.

<div class="ds-card"><h3>Manufacturers with more than one listed app</h3><p class="ds-sub">Names as shown in the directory</p><ul class="ds-bars"><li><span class="l">GAIA AG</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">8</span></li><li><span class="l">GET.ON Institut für Online Gesundheitstrainings GmbH</span><span class="t"><i style="--w:75.0%"></i></span><span class="v">6</span></li><li><span class="l">Endo Health GmbH</span><span class="t"><i style="--w:50.0%"></i></span><span class="v">4</span></li><li><span class="l">Selfapy GmbH</span><span class="t"><i style="--w:50.0%"></i></span><span class="v">4</span></li><li><span class="l">Kranus Health GmbH</span><span class="t"><i style="--w:37.5%"></i></span><span class="v">3</span></li><li><span class="l">Elona Health GmbH</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">2</span></li><li><span class="l">IVPNetworks GmbH</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">2</span></li><li><span class="l">Mindable Health GmbH</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">2</span></li><li><span class="l">Oviva AG (Zweigniederlassung Deutschland)</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">2</span></li><li><span class="l">PrehApp GmbH</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">2</span></li></ul><a class="ds-dl" href="/data/germany-diga-listed.csv">germany-diga-listed.csv</a></div>

4 listed apps come from makers outside Germany: ACTICORE1 (Switzerland), edupression.com (Austria), Untire (Netherlands), Vitadio (Czech Republic). The full list of 63 apps, with status, first ICD-10 code, platforms, price and requirements, is in the CSV.

On platforms, 15 apps run only in a web browser, 35 only as iOS and Android apps, and 13 on all three. Every app is available in German; the directory lists more languages for some.

## Dataset 5: removed apps

19 apps have been removed from the directory. The directory shows a removal date for each and, for two, a reason.

<div class="ds-card"><h3>Apps removed by year</h3><p class="ds-sub">Year of the removal date shown</p><ul class="ds-bars"><li><span class="l">2022</span><span class="t"><i style="--w:71.4%"></i></span><span class="v">5</span></li><li><span class="l">2023</span><span class="t"><i style="--w:14.3%"></i></span><span class="v">1</span></li><li><span class="l">2024</span><span class="t"><i style="--w:42.9%"></i></span><span class="v">3</span></li><li><span class="l">2025</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">7</span></li><li><span class="l">2026</span><span class="t"><i style="--w:42.9%"></i></span><span class="v">3</span></li></ul><a class="ds-dl" href="/data/germany-diga-removed-by-year.csv">germany-diga-removed-by-year.csv</a></div>

| App | Removed | Reason shown |
|---|---|---|
| Mika | 2022-03-25 | — |
| M-sense Migräne | 2022-04-04 | — |
| Rehappy | 2022-09-26 | — |
| ESYSTA App & Portal | 2022-10-04 | — |
| Selfapys Online-Kurs bei Panikstörung | 2022-11-18 | — |
| CANKADO PRO-React Onco | 2023-04-21 | — |
| re.flex | 2024-05-27 | — |
| Kaia COPD | 2024-05-31 | — |
| optimune | 2024-07-14 | — |
| My Dose Coach | 2025-01-10 | — |
| Selfapys Online-Kurs bei chronischen Schmerzen | 2025-05-28 | — |
| Vantis | KHK und Herzinfarkt | 2025-06-10 | — |
| MindDoc Auf Rezept | 2025-06-25 | — |
| mebix | 2025-07-14 | — |
| Orthopy bei Knieverletzungen | 2025-09-09 | — |
| actensio | 2025-10-01 | — |
| sinCephalea | 2026-01-22 | Decision of the Schleswig-Holstein Higher Social Court |
| Uroletics | 2026-03-23 | — |
| Una Health für Diabetes | 2026-09-28 | Decision of the Hamburg Higher Social Court |

Download the full table: <a class="ds-dl" href="/data/germany-diga-removed.csv">germany-diga-removed.csv</a>. The directory shows no reason for 17 of the 19 removals, so we do not suggest one.

## What this means for doctors

If you practise in Germany, these are apps you can prescribe today, and the directory shows no extra cost to the patient for any of them. Check whether the app is permanent or provisional, and whether it needs your own services alongside it. Before prescribing, it is worth asking four questions the directory helps answer:

- **Is it permanent or provisional?** A provisional app is still gathering evidence.
- **Does it need your services?** 16 apps say a contracted doctor's services are required alongside them.
- **Does it need a device?** Check whether the patient needs, gets or can add extra hardware.
- **Does it run on the patient's phone or browser?** Some apps are web-only, others app-only.

If you practise elsewhere, the directory is still worth knowing. It is an official, public record of which digital therapies one health system has agreed to pay for, and which it has stopped paying for.

<div class="callout"><b>Dr. Gupta's note.</b> I have read this page. It counts apps in Germany's official directory of health apps that doctors can prescribe. These are digital health apps, and the directory does not say whether any of them use AI. A provisional listing means the evidence of benefit is still being gathered. Check the status and what the app requires of you and the patient before you prescribe.</div>

## Related datasets

For AI medical devices specifically, see our datasets for [the United States](/united-states-fda-ai-devices-datasets/), [Australia](/australia-tga-ai-devices-datasets/) and [Japan](/japan-ai-medical-devices-datasets/).

## Sources

<p class="ds-src">BfArM, DiGA-Verzeichnis (directory of digital health applications), all entries including removed apps: <a href="https://diga.bfarm.de/de/verzeichnis">diga.bfarm.de/de/verzeichnis</a>. Copied 18 October 2026.</p>
