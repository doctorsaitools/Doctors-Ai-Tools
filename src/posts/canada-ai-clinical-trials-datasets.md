---
title: "Canada AI Clinical Trials: 171 Studies in Data"
description: "Five downloadable datasets from ClinicalTrials.gov on 171 studies that mention AI and list a site in Canada, by start year, status and sponsor."
category: Guides
type: guide
keyword: canada ai clinical trials
date: 2026-10-19
updated: 2026-10-19
reviewed: false
preview: true
reviewedOn:
tone: c
---
ClinicalTrials.gov, run by the US National Library of Medicine, is a large public register where researchers around the world list their clinical studies. On 18 October 2026 we searched it for studies that mention artificial intelligence and related methods. This page covers the 171 counted studies that list at least one site in Canada, and turns them into five datasets that you can read here and download as CSV files. Every figure is a count of rows in the file we downloaded, or a percentage worked out from those counts.

**Status: data from a ClinicalTrials.gov download, awaiting Dr. Gupta's review.** The file held 7,734 studies. After our checks, 5,818 are counted across all countries, and 171 of them list a site in Canada. The rules are in the next section.

<div class="ds-keys"><div class="ds-key"><b>171</b><span>studies mentioning AI that list a site in Canada</span></div><div class="ds-key"><b>90</b><span>are interventional; 81 are observational</span></div><div class="ds-key"><b>Sixth</b><span>of the ten countries on our cross-country page, by number of studies</span></div><div class="ds-key"><b>2</b><span>have results posted on the register</span></div></div>

## How to read these numbers

- **A mention is not proof that an AI tool was tested.** We counted studies whose own text uses an AI phrase. 81 of the 171 (47.4%) are observational, which means they watch or analyze patients without assigning an intervention. The other 90 are interventional. An AI phrase in either kind says nothing about how well a tool works.
- **How we chose what to count.** ClinicalTrials.gov returned 7,734 studies for 14 phrases (listed under Sources). We counted a study only when its own text in the file uses a core phrase (hyphens ignored, plurals included): artificial intelligence, machine learning, deep learning, natural language processing, large language model, generative AI, ChatGPT, or a convolutional, deep, artificial, recurrent or graph neural network. That left 5,821. We removed three whose use of "deep learning" does not describe an AI method, which gives 5,818. The [cross-country page](/ai-clinical-trials-by-country-datasets/) gives the full rules and what was left out.
- **A study counts here when it lists a site in Canada.** 28 of the 171 also list a site in another of the ten countries on the cross-country page, so they also appear in that country's rows. Of those, 4 list a site in the United Kingdom. 645 of the 5,818 counted studies (11.1%) list no sites at all, so they cannot be placed in any country and this page may undercount.
- **The register is not a full census.** Countries also keep their own registers, so a low count here does not mean little AI research there.
- **Dates and statuses come from the sponsors' own records and change over time.** A start date in the future is a planned date.

On this count, Canada is sixth of the ten countries on the cross-country page, with 171 studies.

## Dataset 1: studies by start year

Each study is placed in the year of its start date as entered. Interventional and observational studies are split.

<div class="ds-card"><h3>Studies by start year</h3><p class="ds-sub">171 studies listing a site in Canada, 2015 to 2026; 2026 includes planned start dates</p><ul class="ds-bars"><li><span class="l">2015</span><span class="t"><i style="--w:0.0%"></i></span><span class="v">0</span></li><li><span class="l">2016</span><span class="t"><i style="--w:0.0%"></i></span><span class="v">0</span></li><li><span class="l">2017</span><span class="t"><i style="--w:10.7%"></i></span><span class="v">3</span></li><li><span class="l">2018</span><span class="t"><i style="--w:14.3%"></i></span><span class="v">4</span></li><li><span class="l">2019</span><span class="t"><i style="--w:46.4%"></i></span><span class="v">13</span></li><li><span class="l">2020</span><span class="t"><i style="--w:39.3%"></i></span><span class="v">11</span></li><li><span class="l">2021</span><span class="t"><i style="--w:50.0%"></i></span><span class="v">14</span></li><li><span class="l">2022</span><span class="t"><i style="--w:96.4%"></i></span><span class="v">27</span></li><li><span class="l">2023</span><span class="t"><i style="--w:78.6%"></i></span><span class="v">22</span></li><li><span class="l">2024</span><span class="t"><i style="--w:75.0%"></i></span><span class="v">21</span></li><li><span class="l">2025</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">28</span></li><li><span class="l">2026</span><span class="t"><i style="--w:75.0%"></i></span><span class="v">21</span></li></ul><a class="ds-dl" href="/data/canada-ai-clinical-trials-by-start-year.csv">canada-ai-clinical-trials-by-start-year.csv</a></div>

<div class="ds-wide">

| Start year | Studies | Interventional | Observational |
|---|---|---|---|
| Before 2015 | 6 | 2 | 4 |
| 2015 | 0 | 0 | 0 |
| 2016 | 0 | 0 | 0 |
| 2017 | 3 | 3 | 0 |
| 2018 | 4 | 2 | 2 |
| 2019 | 13 | 2 | 11 |
| 2020 | 11 | 3 | 8 |
| 2021 | 14 | 10 | 4 |
| 2022 | 27 | 12 | 15 |
| 2023 | 22 | 10 | 12 |
| 2024 | 21 | 12 | 9 |
| 2025 | 28 | 20 | 8 |
| 2026 | 21 | 13 | 8 |
| 2027 or later | 1 | 1 | 0 |
| Total | 171 | 90 | 81 |

</div>

Starts peak in 2025 with 28 studies. 158 of the 171 (92.4%) start in 2019 or later, and 13 start before 2019. The 2026 figure of 21 includes 9 studies listed as not yet recruiting, whose start dates are planned.

## Dataset 2: study status

The status is the sponsor's latest entry. "Unknown" is the register's label for a study whose record has not been updated recently enough to know where it stands. The CSV and this table keep all nine statuses apart.

<div class="ds-wide">

| Status | Studies | Interventional | Observational |
|---|---|---|---|
| Completed | 58 | 36 | 22 |
| Recruiting | 52 | 25 | 27 |
| Not yet recruiting | 14 | 8 | 6 |
| Active, not recruiting | 14 | 7 | 7 |
| Enrolling by invitation | 4 | 3 | 1 |
| Suspended | 2 | 1 | 1 |
| Terminated | 4 | 2 | 2 |
| Withdrawn | 4 | 3 | 1 |
| Unknown | 19 | 5 | 14 |
| Total | 171 | 90 | 81 |

</div>

Download: <a class="ds-dl" href="/data/canada-ai-clinical-trials-by-status.csv">canada-ai-clinical-trials-by-status.csv</a>

Completed studies number 58 of 171 (33.9%) and recruiting studies 52 (30.4%). A further 19 (11.1%) have an unknown status.

Results are posted on the register for 2 of the 171 studies (1.2%): 2 of the 90 interventional studies and 0 of the 81 observational ones. Posting is not required for every study, so a missing result is not by itself a sign of a problem.

## Dataset 3: lead sponsor type

This is the register's class for the lead sponsor. "Other" is the class for sponsors that are neither industry nor government. "Government" combines other government bodies, NIH and US federal agencies; the CSV keeps them apart.

<div class="ds-wide">

| Sponsor type | Studies | Share |
|---|---|---|
| Industry | 28 | 16.4% |
| Other | 138 | 80.7% |
| Government | 4 | 2.3% |
| Network or unknown | 1 | 0.6% |
| Total | 171 | 100.0% |

</div>

Download: <a class="ds-dl" href="/data/canada-ai-clinical-trials-by-sponsor-type.csv">canada-ai-clinical-trials-by-sponsor-type.csv</a>

"Other" is the largest class and covers 138 of 171 studies (80.7%). Industry is the lead sponsor of 28 (16.4%).

## Dataset 4: lead sponsors

The register names one lead sponsor for each study. The table shows the sponsors with 4 or more studies; the CSV lists all 77. Names are as entered in the register, so a hospital and its university can appear as separate sponsors, and we have not merged spelling variants.

<div class="ds-wide">

| Lead sponsor | Sponsor type | Studies | Share |
|---|---|---|---|
| University Health Network, Toronto | Other | 15 | 8.8% |
| Centre hospitalier de l'Université de Montréal (CHUM) | Other | 12 | 7.0% |
| McGill University | Other | 9 | 5.3% |
| University of Alberta | Other | 8 | 4.7% |
| University of British Columbia | Other | 8 | 4.7% |
| The Hospital for Sick Children | Other | 7 | 4.1% |
| Montreal Heart Institute | Other | 5 | 2.9% |
| Ottawa Hospital Research Institute | Other | 5 | 2.9% |
| Innodem Neurosciences | Industry | 4 | 2.3% |
| McMaster University | Other | 4 | 2.3% |
| St. Joseph's Healthcare Hamilton | Other | 4 | 2.3% |
| Sunnybrook Health Sciences Centre | Other | 4 | 2.3% |

</div>

Download: <a class="ds-dl" href="/data/canada-ai-clinical-trials-by-lead-sponsor.csv">canada-ai-clinical-trials-by-lead-sponsor.csv</a>

The 12 sponsors shown lead 85 of the 171 studies (49.7%). 49 of the 77 sponsors lead only one study.

## Phrases that matched

A study can use several phrases, so the rows add up to more than the number of studies.

| Core phrase | Studies | Share |
|---|---|---|
| artificial intelligence | 82 | 48.0% |
| machine learning | 91 | 53.2% |
| deep learning | 11 | 6.4% |
| natural language processing | 3 | 1.8% |
| large language model | 4 | 2.3% |
| generative AI | 3 | 1.8% |
| ChatGPT | 5 | 2.9% |
| qualified neural network | 6 | 3.5% |

"Artificial intelligence" appears in 82 of the 171 studies (48.0%) and "machine learning" in 91 (53.2%). A large language model, ChatGPT or generative AI is mentioned in 10 of the studies, and 9 of those start in 2023 or later.

## Dataset 5: the full list

Every study listing a site in Canada, one row each: NCT number, title, type, status, start date, lead sponsor, sponsor type, results posted, other countries among the ten, core phrases found and a link to its register record. Download: <a class="ds-dl" href="/data/canada-ai-clinical-trials-register-extract.csv">canada-ai-clinical-trials-register-extract.csv</a>

## What this means for doctors

Use this page as a map of where AI research is registered in Canada, not as evidence that a tool works. If you are asked to join an AI study, or to use a tool still in one, open its record by NCT number and check the status, the sponsor and whether results are posted. For most of these studies the register cannot tell you how the tool performed.

<div class="callout"><b>Dr. Gupta's note.</b> To be added after his review.</div>

## Related pages

For all ten countries side by side, see [AI clinical trials by country](/ai-clinical-trials-by-country-datasets/). The same data for the United Kingdom is on [its own page](/united-kingdom-ai-clinical-trials-datasets/). We have also built datasets from regulator lists of approved products: [United States](/united-states-fda-ai-devices-datasets/), [Australia](/australia-tga-ai-devices-datasets/), [Japan](/japan-ai-medical-devices-datasets/) and [Germany's DiGA directory](/germany-diga-directory-datasets/), which lists digital health apps and not AI. Those count approved products and this page counts registered studies, so the totals are not comparable.

## Sources

<p class="ds-src">ClinicalTrials.gov, U.S. National Library of Medicine, <a href="https://clinicaltrials.gov/">clinicaltrials.gov</a>. On 18 October 2026 we searched the register for "artificial intelligence" OR "machine learning" OR "deep learning" OR "neural network" OR "neural networks" OR "natural language processing" OR "computer vision" OR "large language model" OR "large language models" OR "generative AI" OR "ChatGPT" OR "reinforcement learning" OR "computer-aided detection" OR "computer-aided diagnosis" and downloaded the results as a CSV file with all columns (7,734 studies). The register is updated continuously, so a new search will return different numbers.</p>
