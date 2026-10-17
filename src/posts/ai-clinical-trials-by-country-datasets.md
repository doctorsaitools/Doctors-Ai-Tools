---
title: "AI Clinical Trials by Country: 5,818 Studies in Data"
description: "Six downloadable datasets from ClinicalTrials.gov on studies that mention AI, counted by country, start year, status and sponsor for ten countries."
category: Guides
type: guide
keyword: ai clinical trials by country
date: 2026-10-18
updated: 2026-10-18
reviewed: false
preview: true
reviewedOn:
tone: c
---
ClinicalTrials.gov, run by the US National Library of Medicine, is a large public register where researchers around the world list their clinical studies. On 18 October 2026 we searched it for studies that mention artificial intelligence and related methods, and turned the result into six datasets for ten countries that you can read here and download as CSV files. Every figure is a count of rows in the file we downloaded, or a percentage worked out from those counts.

**Status: data from a ClinicalTrials.gov download, awaiting Dr. Gupta's review.** The file held 7,734 studies. After our checks, 5,818 are counted here. The rules are in the next section.

<div class="ds-keys"><div class="ds-key"><b>5,818</b><span>studies counted, each with a clear AI phrase in its own text</span></div><div class="ds-key"><b>2,331</b><span>of them list a site in at least one of the ten countries</span></div><div class="ds-key"><b>973</b><span>list a site in the United States, the most of the ten</span></div><div class="ds-key"><b>1,253</b><span>list a site in China, which is not one of the ten</span></div></div>

## How to read these numbers

- **A mention is not proof that an AI tool was tested.** We counted studies whose own text uses an AI phrase. 3,411 of the 5,818 (58.6%) are observational, which means they watch or analyse patients without assigning an intervention. The other 2,407 are interventional. An AI phrase in either kind says nothing about how well a tool works.
- **How we chose what to count.** ClinicalTrials.gov returned 7,734 studies for 14 phrases (listed under Sources). We counted a study only when its own text in the file uses a core phrase (hyphens ignored, plurals included): artificial intelligence, machine learning, deep learning, natural language processing, large language model, generative AI, ChatGPT, or a convolutional, deep, artificial, recurrent or graph neural network. That left 5,821. We removed three whose use of "deep learning" does not describe an AI method (two mean a way of studying or teaching; one does not say), which gives 5,818.
- **What we left out.** 1,916 returned studies are not counted. 625 matched only on neural network, computer vision, reinforcement learning, computer-aided detection or computer-aided diagnosis, phrases that also describe brain networks, reward learning in psychology, an eye-strain condition and software that is not always AI. 1,288 contain none of our phrases in the fields the file includes; the file has no detailed-description or keyword column, so the register may have matched them there. 386 of the 1,916 use the letters "AI" on their own, which we cannot assume means artificial intelligence.
- **A country counts when a study lists a site there.** A study with sites in several countries counts in each, so country rows add up to more than the totals; the "any of the ten" rows count each study once. 108 studies list sites in two or more of the ten. 645 of the 5,818 (11.1%) list no sites, so they appear in no country row. 2,842 list sites only in other countries, and 5 list a site with no country shown, which we left out.
- **The register is not a full census.** Countries also keep their own registers, so a low count here does not mean little AI research there.
- **Dates and statuses come from the sponsors' own records and change over time.** A start date in the future is a planned date.

## Dataset 1: studies by country

The table counts studies that list at least one site in the country.

<div class="ds-card"><h3>Studies by country</h3><p class="ds-sub">Studies listing at least one site in the country; 2,331 studies in total across the ten</p><ul class="ds-bars"><li><span class="l">United States</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">973</span></li><li><span class="l">Italy</span><span class="t"><i style="--w:34.5%"></i></span><span class="v">336</span></li><li><span class="l">France</span><span class="t"><i style="--w:33.0%"></i></span><span class="v">321</span></li><li><span class="l">United Kingdom</span><span class="t"><i style="--w:23.9%"></i></span><span class="v">233</span></li><li><span class="l">Spain</span><span class="t"><i style="--w:22.7%"></i></span><span class="v">221</span></li><li><span class="l">Canada</span><span class="t"><i style="--w:17.6%"></i></span><span class="v">171</span></li><li><span class="l">Germany</span><span class="t"><i style="--w:15.2%"></i></span><span class="v">148</span></li><li><span class="l">Singapore</span><span class="t"><i style="--w:5.5%"></i></span><span class="v">54</span></li><li><span class="l">Australia</span><span class="t"><i style="--w:3.3%"></i></span><span class="v">32</span></li><li><span class="l">Japan</span><span class="t"><i style="--w:1.8%"></i></span><span class="v">18</span></li></ul><a class="ds-dl" href="/data/ai-clinical-trials-by-country-summary.csv">ai-clinical-trials-by-country-summary.csv</a></div>

| Country | Studies | Interventional | Observational | Share observational |
|---|---|---|---|---|
| United States | 973 | 607 | 366 | 37.6% |
| Italy | 336 | 99 | 237 | 70.5% |
| France | 321 | 122 | 199 | 62.0% |
| United Kingdom | 233 | 54 | 179 | 76.8% |
| Spain | 221 | 91 | 130 | 58.8% |
| Canada | 171 | 90 | 81 | 47.4% |
| Germany | 148 | 55 | 93 | 62.8% |
| Singapore | 54 | 31 | 23 | 42.6% |
| Australia | 32 | 16 | 16 | 50.0% |
| Japan | 18 | 6 | 12 | 66.7% |
| Any of the ten (each study once) | 2,331 | 1,118 | 1,213 | 52.0% |

The United States has the most of the ten, with 973 studies, or 41.7% of the 2,331 that list a site in any of them. Italy (336), France (321), the United Kingdom (233) and Spain (221) follow. In the United States, 607 of 973 (62.4%) are interventional. In Italy, 237 of 336 (70.5%) are observational. Outside the ten, 1,253 studies list a site in China, more than any of the ten countries.

## Dataset 2: studies by start year

"Any of the ten" counts each study once. "All counted" also includes studies with no country information.

<div class="ds-card"><h3>Studies by start year</h3><p class="ds-sub">All 5,818 counted studies, 2015 to 2026; 2026 includes planned start dates</p><ul class="ds-bars"><li><span class="l">2015</span><span class="t"><i style="--w:4.3%"></i></span><span class="v">48</span></li><li><span class="l">2016</span><span class="t"><i style="--w:5.0%"></i></span><span class="v">56</span></li><li><span class="l">2017</span><span class="t"><i style="--w:6.7%"></i></span><span class="v">75</span></li><li><span class="l">2018</span><span class="t"><i style="--w:13.1%"></i></span><span class="v">147</span></li><li><span class="l">2019</span><span class="t"><i style="--w:18.5%"></i></span><span class="v">207</span></li><li><span class="l">2020</span><span class="t"><i style="--w:33.7%"></i></span><span class="v">378</span></li><li><span class="l">2021</span><span class="t"><i style="--w:43.1%"></i></span><span class="v">483</span></li><li><span class="l">2022</span><span class="t"><i style="--w:52.3%"></i></span><span class="v">586</span></li><li><span class="l">2023</span><span class="t"><i style="--w:63.5%"></i></span><span class="v">712</span></li><li><span class="l">2024</span><span class="t"><i style="--w:74.9%"></i></span><span class="v">840</span></li><li><span class="l">2025</span><span class="t"><i style="--w:89.2%"></i></span><span class="v">1,000</span></li><li><span class="l">2026</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">1,121</span></li></ul><a class="ds-dl" href="/data/ai-clinical-trials-by-country-by-start-year.csv">ai-clinical-trials-by-country-by-start-year.csv</a></div>

<div class="ds-wide">

| Start year | US | UK | CA | AU | SG | FR | DE | JP | ES | IT | Any of the ten | All counted |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Before 2015 | 31 | 2 | 6 | 0 | 0 | 2 | 2 | 0 | 2 | 2 | 43 | 129 |
| 2015 | 9 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 12 | 48 |
| 2016 | 17 | 1 | 0 | 0 | 0 | 1 | 2 | 2 | 1 | 2 | 24 | 56 |
| 2017 | 18 | 2 | 3 | 0 | 2 | 3 | 2 | 0 | 2 | 1 | 32 | 75 |
| 2018 | 32 | 8 | 4 | 1 | 0 | 13 | 4 | 0 | 4 | 6 | 66 | 147 |
| 2019 | 44 | 16 | 13 | 4 | 0 | 15 | 3 | 1 | 4 | 4 | 100 | 207 |
| 2020 | 59 | 25 | 11 | 2 | 2 | 28 | 10 | 2 | 14 | 32 | 164 | 378 |
| 2021 | 92 | 26 | 14 | 3 | 12 | 32 | 14 | 1 | 21 | 31 | 237 | 483 |
| 2022 | 104 | 23 | 27 | 1 | 5 | 44 | 12 | 2 | 30 | 26 | 260 | 586 |
| 2023 | 110 | 46 | 22 | 3 | 7 | 49 | 31 | 0 | 33 | 66 | 331 | 712 |
| 2024 | 128 | 27 | 21 | 6 | 10 | 35 | 30 | 4 | 33 | 74 | 337 | 840 |
| 2025 | 149 | 28 | 28 | 9 | 11 | 49 | 23 | 3 | 42 | 51 | 362 | 1,000 |
| 2026 | 170 | 28 | 21 | 3 | 4 | 49 | 15 | 3 | 35 | 41 | 352 | 1,121 |
| 2027 or later | 10 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 36 |
| Total | 973 | 233 | 171 | 32 | 54 | 321 | 148 | 18 | 221 | 336 | 2,331 | 5,818 |

</div>

US United States, UK United Kingdom, CA Canada, AU Australia, SG Singapore, FR France, DE Germany, JP Japan, ES Spain, IT Italy. Scroll sideways on a phone.

Starts rose every year from 48 in 2015 to 1,000 in 2025. The 2026 figure of 1,121 includes 582 studies listed as not yet recruiting, whose start dates are planned. We kept start dates as entered, including a few that look early for the technology, such as 2004 for a study of large language models.

## Dataset 3: study status

The status is the sponsor's latest entry. "Other" combines enrolling by invitation, suspended, terminated and withdrawn; the CSV keeps all nine statuses apart. "Unknown" is the register's label for a study whose record has not been updated recently enough to know where it stands.

<div class="ds-wide">

| Country | Completed | Recruiting | Not yet recruiting | Active, not recruiting | Unknown | Other | Total |
|---|---|---|---|---|---|---|---|
| United States | 361 | 280 | 73 | 85 | 70 | 104 | 973 |
| Italy | 67 | 136 | 26 | 32 | 65 | 10 | 336 |
| France | 96 | 103 | 34 | 13 | 59 | 16 | 321 |
| United Kingdom | 58 | 58 | 19 | 21 | 62 | 15 | 233 |
| Spain | 75 | 68 | 19 | 14 | 40 | 5 | 221 |
| Canada | 58 | 52 | 14 | 14 | 19 | 14 | 171 |
| Germany | 47 | 53 | 6 | 11 | 26 | 5 | 148 |
| Singapore | 15 | 12 | 5 | 5 | 16 | 1 | 54 |
| Australia | 7 | 17 | 1 | 4 | 3 | 0 | 32 |
| Japan | 3 | 9 | 1 | 2 | 2 | 1 | 18 |
| Any of the ten (each study once) | 759 | 709 | 190 | 172 | 339 | 162 | 2,331 |

</div>

Download: <a class="ds-dl" href="/data/ai-clinical-trials-by-country-by-status.csv">ai-clinical-trials-by-country-by-status.csv</a>

Across the ten countries, 759 of 2,331 studies (32.6%) are completed and 709 (30.4%) are recruiting. Italy has the largest recruiting share among the countries with at least 100 studies: 136 of 336 (40.5%). The United Kingdom has the largest unknown share among them: 62 of 233 (26.6%).

Results are posted on the register for 102 of the 2,331 studies (4.4%): 89 of the 1,118 interventional studies and 13 of the 1,213 observational ones. Posting is not required for every study, so a missing result is not by itself a sign of a problem.

## Dataset 4: lead sponsor type

This is the register's class for the lead sponsor. "Other" is the class for sponsors that are neither industry nor government, for example universities. "Government" combines other government bodies, NIH and US federal agencies; the CSV keeps them apart.

<div class="ds-wide">

| Country | Industry | Other | Government | Network or unknown | Total |
|---|---|---|---|---|---|
| United States | 206 | 735 | 29 | 3 | 973 |
| Italy | 9 | 318 | 6 | 3 | 336 |
| France | 20 | 288 | 7 | 6 | 321 |
| United Kingdom | 30 | 186 | 17 | 0 | 233 |
| Spain | 30 | 183 | 6 | 2 | 221 |
| Canada | 28 | 138 | 4 | 1 | 171 |
| Germany | 22 | 124 | 1 | 1 | 148 |
| Singapore | 6 | 45 | 3 | 0 | 54 |
| Australia | 9 | 19 | 4 | 0 | 32 |
| Japan | 2 | 15 | 1 | 0 | 18 |
| Any of the ten (each study once) | 315 | 1,930 | 73 | 13 | 2,331 |

</div>

Download: <a class="ds-dl" href="/data/ai-clinical-trials-by-country-by-sponsor-type.csv">ai-clinical-trials-by-country-by-sponsor-type.csv</a>

"Other" is the largest class in every country and covers 1,930 of 2,331 studies (82.8%). Industry is the lead sponsor of 315 (13.5%). The industry share runs from 2.7% in Italy to 28.1% in Australia (9 of 32), and small counts move a percentage a lot.

## Dataset 5: which phrases matched

We searched 14 phrases. The table merges singular and plural forms. A study can use several phrases, so the rows add up to more than the number of studies. A core phrase counts a study on its own. A supporting phrase counts only when a core phrase also appears.

| Phrase | Type | In all 7,734 returned | In the 5,818 counted |
|---|---|---|---|
| artificial intelligence | Core | 3,482 | 3,482 |
| machine learning | Core | 2,001 | 2,001 |
| deep learning | Core | 863 | 860 |
| natural language processing | Core | 104 | 104 |
| large language model | Core | 236 | 236 |
| generative AI | Core | 56 | 56 |
| ChatGPT | Core | 143 | 143 |
| convolutional, deep, artificial, recurrent or graph neural network | Core | 222 | 222 |
| neural network | Supporting | 622 | 302 |
| computer vision | Supporting | 159 | 54 |
| reinforcement learning | Supporting | 137 | 13 |
| computer-aided detection | Supporting | 90 | 36 |
| computer-aided diagnosis | Supporting | 76 | 49 |

Download: <a class="ds-dl" href="/data/ai-clinical-trials-by-country-search-phrases.csv">ai-clinical-trials-by-country-search-phrases.csv</a>

"Artificial intelligence" appears in 3,482 of the 5,818 counted studies (59.8%) and "machine learning" in 2,001 (34.4%). 378 counted studies mention a large language model, ChatGPT or generative AI; 372 of them start in 2023 or later.

## Dataset 6: the full list

Every counted study, one row each: NCT number, title, type, status, start date, lead sponsor, sponsor type, results posted, countries among the ten, core phrases found and a link to its register record. Studies without sites say "none listed". Download: <a class="ds-dl" href="/data/ai-clinical-trials-by-country-register-extract.csv">ai-clinical-trials-by-country-register-extract.csv</a>

## What this means for doctors

Use this page as a map of where AI research is registered, not as evidence that a tool works. If you are asked to join an AI study, or to use a tool still in one, open its record by NCT number and check the status, the sponsor and whether results are posted. For most of these studies the register cannot tell you how the tool performed.

<div class="callout"><b>Dr. Gupta's note.</b> To be added after his review.</div>

## Outside this register

We have also built datasets from regulator lists of approved products: [United States](/united-states-fda-ai-devices-datasets/), [Australia](/australia-tga-ai-devices-datasets/), [Japan](/japan-ai-medical-devices-datasets/) and [Germany's DiGA directory](/germany-diga-directory-datasets/), which lists digital health apps and not AI. Those count approved products and this page counts registered studies, so the totals are not comparable. For how image-reading AI works, see [how radiology AI works](/radiology-ai/how-radiology-ai-works/).

## Sources

<p class="ds-src">ClinicalTrials.gov, U.S. National Library of Medicine, <a href="https://clinicaltrials.gov/">clinicaltrials.gov</a>. On 18 October 2026 we searched the register for "artificial intelligence" OR "machine learning" OR "deep learning" OR "neural network" OR "neural networks" OR "natural language processing" OR "computer vision" OR "large language model" OR "large language models" OR "generative AI" OR "ChatGPT" OR "reinforcement learning" OR "computer-aided detection" OR "computer-aided diagnosis" and downloaded the results as a CSV file with all columns (7,734 studies). The register is updated continuously, so a new search will return different numbers.</p>
