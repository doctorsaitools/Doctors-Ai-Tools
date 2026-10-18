---
title: "United Kingdom AI Clinical Trials: 233 Studies in Data"
description: "Five downloadable datasets from ClinicalTrials.gov on 233 studies that mention AI and list a site in the United Kingdom, by start year, status and sponsor."
category: Guides
type: guide
keyword: uk ai clinical trials
date: 2026-10-19
updated: 2026-10-19
reviewed: false
preview: true
reviewedOn:
tone: c
---
ClinicalTrials.gov, run by the US National Library of Medicine, is a large public register where researchers around the world list their clinical studies. On 18 October 2026 we searched it for studies that mention artificial intelligence and related methods. This page covers the 233 counted studies that list at least one site in the United Kingdom, and turns them into five datasets that you can read here and download as CSV files. Every figure is a count of rows in the file we downloaded, or a percentage worked out from those counts.

**Status: data from a ClinicalTrials.gov download, awaiting Dr. Gupta's review.** The file held 7,734 studies. After our checks, 5,818 are counted across all countries, and 233 of them list a site in the United Kingdom. The rules are in the next section.

<div class="ds-keys"><div class="ds-key"><b>233</b><span>studies mentioning AI that list a site in the United Kingdom</span></div><div class="ds-key"><b>54</b><span>are interventional; 179 are observational</span></div><div class="ds-key"><b>Fourth</b><span>of the ten countries on our cross-country page, by number of studies</span></div><div class="ds-key"><b>4</b><span>have results posted on the register</span></div></div>

## How to read these numbers

- **A mention is not proof that an AI tool was tested.** We counted studies whose own text uses an AI phrase. 179 of the 233 (76.8%) are observational, which means they watch or analyse patients without assigning an intervention. The other 54 are interventional. An AI phrase in either kind says nothing about how well a tool works.
- **How we chose what to count.** ClinicalTrials.gov returned 7,734 studies for 14 phrases (listed under Sources). We counted a study only when its own text in the file uses a core phrase (hyphens ignored, plurals included): artificial intelligence, machine learning, deep learning, natural language processing, large language model, generative AI, ChatGPT, or a convolutional, deep, artificial, recurrent or graph neural network. That left 5,821. We removed three whose use of "deep learning" does not describe an AI method, which gives 5,818. The [cross-country page](/ai-clinical-trials-by-country-datasets/) gives the full rules and what was left out.
- **A study counts here when it lists a site in the United Kingdom.** 32 of the 233 also list a site in another of the ten countries on the cross-country page, so they also appear in that country's rows. Of those, 4 list a site in Canada. 645 of the 5,818 counted studies (11.1%) list no sites at all, so they cannot be placed in any country and this page may undercount.
- **The register is not a full census.** Countries also keep their own registers, so a low count here does not mean little AI research there.
- **Dates and statuses come from the sponsors' own records and change over time.** A start date in the future is a planned date.

On this count, the United Kingdom is fourth of the ten countries on the cross-country page, with 233 studies.

## Dataset 1: studies by start year

Each study is placed in the year of its start date as entered. Interventional and observational studies are split.

<div class="ds-card"><h3>Studies by start year</h3><p class="ds-sub">233 studies listing a site in the United Kingdom, 2015 to 2026; 2026 includes planned start dates</p><ul class="ds-bars"><li><span class="l">2015</span><span class="t"><i style="--w:2.2%"></i></span><span class="v">1</span></li><li><span class="l">2016</span><span class="t"><i style="--w:2.2%"></i></span><span class="v">1</span></li><li><span class="l">2017</span><span class="t"><i style="--w:4.3%"></i></span><span class="v">2</span></li><li><span class="l">2018</span><span class="t"><i style="--w:17.4%"></i></span><span class="v">8</span></li><li><span class="l">2019</span><span class="t"><i style="--w:34.8%"></i></span><span class="v">16</span></li><li><span class="l">2020</span><span class="t"><i style="--w:54.3%"></i></span><span class="v">25</span></li><li><span class="l">2021</span><span class="t"><i style="--w:56.5%"></i></span><span class="v">26</span></li><li><span class="l">2022</span><span class="t"><i style="--w:50.0%"></i></span><span class="v">23</span></li><li><span class="l">2023</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">46</span></li><li><span class="l">2024</span><span class="t"><i style="--w:58.7%"></i></span><span class="v">27</span></li><li><span class="l">2025</span><span class="t"><i style="--w:60.9%"></i></span><span class="v">28</span></li><li><span class="l">2026</span><span class="t"><i style="--w:60.9%"></i></span><span class="v">28</span></li></ul><a class="ds-dl" href="/data/united-kingdom-ai-clinical-trials-by-start-year.csv">united-kingdom-ai-clinical-trials-by-start-year.csv</a></div>

<div class="ds-wide">

| Start year | Studies | Interventional | Observational |
|---|---|---|---|
| Before 2015 | 2 | 0 | 2 |
| 2015 | 1 | 0 | 1 |
| 2016 | 1 | 0 | 1 |
| 2017 | 2 | 0 | 2 |
| 2018 | 8 | 2 | 6 |
| 2019 | 16 | 3 | 13 |
| 2020 | 25 | 4 | 21 |
| 2021 | 26 | 5 | 21 |
| 2022 | 23 | 7 | 16 |
| 2023 | 46 | 5 | 41 |
| 2024 | 27 | 8 | 19 |
| 2025 | 28 | 9 | 19 |
| 2026 | 28 | 11 | 17 |
| 2027 or later | 0 | 0 | 0 |
| Total | 233 | 54 | 179 |

</div>

Starts peak in 2023 with 46 studies. 219 of the 233 (94.0%) start in 2019 or later, and 14 start before 2019. The 2026 figure of 28 includes 15 studies listed as not yet recruiting, whose start dates are planned.

## Dataset 2: study status

The status is the sponsor's latest entry. "Unknown" is the register's label for a study whose record has not been updated recently enough to know where it stands. The CSV and this table keep all nine statuses apart.

<div class="ds-wide">

| Status | Studies | Interventional | Observational |
|---|---|---|---|
| Completed | 58 | 14 | 44 |
| Recruiting | 58 | 11 | 47 |
| Not yet recruiting | 19 | 7 | 12 |
| Active, not recruiting | 21 | 6 | 15 |
| Enrolling by invitation | 5 | 0 | 5 |
| Suspended | 1 | 1 | 0 |
| Terminated | 5 | 1 | 4 |
| Withdrawn | 4 | 2 | 2 |
| Unknown | 62 | 12 | 50 |
| Total | 233 | 54 | 179 |

</div>

Download: <a class="ds-dl" href="/data/united-kingdom-ai-clinical-trials-by-status.csv">united-kingdom-ai-clinical-trials-by-status.csv</a>

Completed studies number 58 of 233 (24.9%) and recruiting studies 58 (24.9%). A further 62 (26.6%) have an unknown status.

Results are posted on the register for 4 of the 233 studies (1.7%): 2 of the 54 interventional studies and 2 of the 179 observational ones. Posting is not required for every study, so a missing result is not by itself a sign of a problem.

## Dataset 3: lead sponsor type

This is the register's class for the lead sponsor. "Other" is the class for sponsors that are neither industry nor government. "Government" combines other government bodies, NIH and US federal agencies; the CSV keeps them apart.

<div class="ds-wide">

| Sponsor type | Studies | Share |
|---|---|---|
| Industry | 30 | 12.9% |
| Other | 186 | 79.8% |
| Government | 17 | 7.3% |
| Network or unknown | 0 | 0.0% |
| Total | 233 | 100.0% |

</div>

Download: <a class="ds-dl" href="/data/united-kingdom-ai-clinical-trials-by-sponsor-type.csv">united-kingdom-ai-clinical-trials-by-sponsor-type.csv</a>

"Other" is the largest class and covers 186 of 233 studies (79.8%). Industry is the lead sponsor of 30 (12.9%).

## Dataset 4: lead sponsors

The register names one lead sponsor for each study. The table shows the sponsors with 5 or more studies; the CSV lists all 118. Names are as entered in the register, so a hospital and its university can appear as separate sponsors, and we have not merged spelling variants.

<div class="ds-wide">

| Lead sponsor | Sponsor type | Studies | Share |
|---|---|---|---|
| Imperial College London | Other | 19 | 8.2% |
| Queen Mary University of London | Other | 10 | 4.3% |
| Royal Marsden NHS Foundation Trust | Other | 9 | 3.9% |
| University College, London | Other | 9 | 3.9% |
| King's College London | Other | 7 | 3.0% |
| NHS Greater Glasgow and Clyde | Other | 7 | 3.0% |
| King's College Hospital NHS Trust | Other | 6 | 2.6% |
| Guy's and St Thomas' NHS Foundation Trust | Other | 5 | 2.1% |
| IntelligentUltrasound Limited | Industry | 5 | 2.1% |
| Oxford University Hospitals NHS Trust | Other | 5 | 2.1% |
| University of Leeds | Other | 5 | 2.1% |

</div>

Download: <a class="ds-dl" href="/data/united-kingdom-ai-clinical-trials-by-lead-sponsor.csv">united-kingdom-ai-clinical-trials-by-lead-sponsor.csv</a>

The 11 sponsors shown lead 87 of the 233 studies (37.3%). 82 of the 118 sponsors lead only one study.

## Phrases that matched

A study can use several phrases, so the rows add up to more than the number of studies.

| Core phrase | Studies | Share |
|---|---|---|
| artificial intelligence | 140 | 60.1% |
| machine learning | 104 | 44.6% |
| deep learning | 22 | 9.4% |
| natural language processing | 1 | 0.4% |
| large language model | 2 | 0.9% |
| generative AI | 0 | 0.0% |
| ChatGPT | 0 | 0.0% |
| qualified neural network | 9 | 3.9% |

"Artificial intelligence" appears in 140 of the 233 studies (60.1%) and "machine learning" in 104 (44.6%). A large language model, ChatGPT or generative AI is mentioned in 2 of the studies, and 2 of those start in 2023 or later.

## Dataset 5: the full list

Every study listing a site in the United Kingdom, one row each: NCT number, title, type, status, start date, lead sponsor, sponsor type, results posted, other countries among the ten, core phrases found and a link to its register record. Download: <a class="ds-dl" href="/data/united-kingdom-ai-clinical-trials-register-extract.csv">united-kingdom-ai-clinical-trials-register-extract.csv</a>

## What this means for doctors

Use this page as a map of where AI research is registered in the United Kingdom, not as evidence that a tool works. If you are asked to join an AI study, or to use a tool still in one, open its record by NCT number and check the status, the sponsor and whether results are posted. For most of these studies the register cannot tell you how the tool performed.

<div class="callout"><b>Dr. Gupta's note.</b> To be added after his review.</div>

## Related pages

For all ten countries side by side, see [AI clinical trials by country](/ai-clinical-trials-by-country-datasets/). The same data for Canada is on [its own page](/canada-ai-clinical-trials-datasets/). We have also built datasets from regulator lists of approved products: [United States](/united-states-fda-ai-devices-datasets/), [Australia](/australia-tga-ai-devices-datasets/), [Japan](/japan-ai-medical-devices-datasets/) and [Germany's DiGA directory](/germany-diga-directory-datasets/), which lists digital health apps and not AI. Those count approved products and this page counts registered studies, so the totals are not comparable.

## Sources

<p class="ds-src">ClinicalTrials.gov, U.S. National Library of Medicine, <a href="https://clinicaltrials.gov/">clinicaltrials.gov</a>. On 18 October 2026 we searched the register for "artificial intelligence" OR "machine learning" OR "deep learning" OR "neural network" OR "neural networks" OR "natural language processing" OR "computer vision" OR "large language model" OR "large language models" OR "generative AI" OR "ChatGPT" OR "reinforcement learning" OR "computer-aided detection" OR "computer-aided diagnosis" and downloaded the results as a CSV file with all columns (7,734 studies). The register is updated continuously, so a new search will return different numbers.</p>
