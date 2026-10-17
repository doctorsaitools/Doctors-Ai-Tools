---
title: "Japan's Approved AI Medical Devices: 41 in Data"
description: "Four downloadable datasets from Japan's official table of approved AI medical software, 2018–2024: by year, company and input data, plus the full list."
category: Guides
type: guide
keyword: japan approved ai medical devices
date: 2026-10-18
updated: 2026-10-18
reviewed: true
reviewedOn: 2026-10-18
tone: c
---
Japan's medical device review agency, the Pharmaceuticals and Medical Devices Agency (PMDA), publishes a table of approved medical software that uses artificial intelligence. We took the version dated end of September 2024 and turned it into four datasets you can read here and download as CSV files. Every figure is a count of rows in that table, or a percentage worked out from those counts.

**Status: data from the PMDA table, reviewed by Dr. Gupta.** The table lists 41 products approved between 2018 and 2024. We copied it on 18 October 2026.

<div class="ds-keys"><div class="ds-key"><b>41</b><span>AI medical software products in the official table</span></div><div class="ds-key"><b>23</b><span>companies holding the approvals</span></div><div class="ds-key"><b>14</b><span>products that read endoscopy images</span></div><div class="ds-key"><b>5</b><span>COVID-19 pneumonia tools on CT, approved 2020–2022</span></div></div>

## How to read these numbers

- **The table is not complete, and says so.** Its own footnote states that it lists only some examples of medical software whose approval application said it used AI or machine learning. It does not cover every AI product approved in Japan.
- **It stops at September 2024.** Products approved after that date are not in it. We use this version because it is the latest one we could check.
- **An approval is not a performance result.** It shows the product was approved for a stated purpose. It does not show how well it works on your patients.
- **Dates are converted from the Japanese calendar.** The table uses era years (Heisei 30 is 2018; Reiwa 1 to 6 are 2019 to 2024). We converted each date and checked the conversion twice. Where a product had a later partial-change approval, we count it under its first approval date and show the later date in the CSV.
- **Company names and descriptions are our English versions.** The CSV keeps the Japanese product and company names exactly as listed, next to our translation.

## Dataset 1: approvals by year

<div class="ds-card"><h3>Products by year of first approval</h3><p class="ds-sub">2018 to September 2024 (2024 is a part year)</p><ul class="ds-bars"><li><span class="l">2018</span><span class="t"><i style="--w:9.1%"></i></span><span class="v">1</span></li><li><span class="l">2019</span><span class="t"><i style="--w:18.2%"></i></span><span class="v">2</span></li><li><span class="l">2020</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">11</span></li><li><span class="l">2021</span><span class="t"><i style="--w:54.5%"></i></span><span class="v">6</span></li><li><span class="l">2022</span><span class="t"><i style="--w:45.5%"></i></span><span class="v">5</span></li><li><span class="l">2023</span><span class="t"><i style="--w:45.5%"></i></span><span class="v">5</span></li><li><span class="l">2024</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">11</span></li></ul><a class="ds-dl" href="/data/japan-ai-devices-by-year.csv">japan-ai-devices-by-year.csv</a></div>

The first product in the table, EndoBRAIN, was approved in December 2018 to help tell neoplastic from non-neoplastic colorectal lesions on endoscopy. In 2020, 11 products were approved, 2 of them COVID-19 pneumonia tools. The first nine months of 2024 matched that with 11.

| Year | Products | Share |
|---|---|---|
| 2018 | 1 | 2.4% |
| 2019 | 2 | 4.9% |
| 2020 | 11 | 26.8% |
| 2021 | 6 | 14.6% |
| 2022 | 5 | 12.2% |
| 2023 | 5 | 12.2% |
| 2024 | 11 | 26.8% |

## Dataset 2: what the software reads

This grouping is ours. We sorted each product by the kind of data it analyses, using the table's own description. The full list in Dataset 4 shows how we placed each one.

<div class="ds-card"><h3>Products by input data</h3><p class="ds-sub">All 41 products; our grouping from the table's descriptions</p><ul class="ds-bars"><li><span class="l">GI endoscopy</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">12</span></li><li><span class="l">CT</span><span class="t"><i style="--w:75.0%"></i></span><span class="v">9</span></li><li><span class="l">Chest X-ray</span><span class="t"><i style="--w:50.0%"></i></span><span class="v">6</span></li><li><span class="l">ECG</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">3</span></li><li><span class="l">Pulse or motion sensors</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">3</span></li><li><span class="l">Ultrasound</span><span class="t"><i style="--w:25.0%"></i></span><span class="v">3</span></li><li><span class="l">Surgical endoscopy</span><span class="t"><i style="--w:16.7%"></i></span><span class="v">2</span></li><li><span class="l">Dental X-ray</span><span class="t"><i style="--w:8.3%"></i></span><span class="v">1</span></li><li><span class="l">MRI</span><span class="t"><i style="--w:8.3%"></i></span><span class="v">1</span></li><li><span class="l">Throat camera images</span><span class="t"><i style="--w:8.3%"></i></span><span class="v">1</span></li></ul><a class="ds-dl" href="/data/japan-ai-devices-by-input.csv">japan-ai-devices-by-input.csv</a></div>

35 of the 41 products (85.4%) analyse images. Endoscopy leads, with 12 products for the digestive tract and 2 that highlight anatomy during surgery. All 9 CT products work on the chest or abdomen, and 5 of them were built for COVID-19 pneumonia. The 3 sensor programs are Apple's: irregular rhythm notification, atrial fibrillation history and sleep apnoea notification.

## Dataset 3: companies

23 companies hold the 41 approvals. 7 hold more than one; the other 16 hold one each.

<div class="ds-card"><h3>Companies with more than one product</h3><p class="ds-sub">English names; Japanese names as listed are in the CSV</p><ul class="ds-bars"><li><span class="l">Fujifilm</span><span class="t"><i style="--w:100.0%"></i></span><span class="v">7</span></li><li><span class="l">Cybernet Systems</span><span class="t"><i style="--w:71.4%"></i></span><span class="v">5</span></li><li><span class="l">LPixel</span><span class="t"><i style="--w:57.1%"></i></span><span class="v">4</span></li><li><span class="l">Apple</span><span class="t"><i style="--w:42.9%"></i></span><span class="v">3</span></li><li><span class="l">CES Descartes</span><span class="t"><i style="--w:28.6%"></i></span><span class="v">2</span></li><li><span class="l">Fujitsu Japan</span><span class="t"><i style="--w:28.6%"></i></span><span class="v">2</span></li><li><span class="l">Fukuda Denshi</span><span class="t"><i style="--w:28.6%"></i></span><span class="v">2</span></li></ul><a class="ds-dl" href="/data/japan-ai-devices-by-company.csv">japan-ai-devices-by-company.csv</a></div>

Fujifilm's 7 products cover CT, chest X-ray and endoscopy. Cybernet Systems' 5 are all EndoBRAIN endoscopy tools. Apart from Apple Inc. and iRhythm Technologies, Inc., both US companies, every holder is listed under a Japanese company name, including Siemens' Japanese arm.

## Dataset 4: the full list

Every product in the table, in the table's order. Descriptions are our short English versions of the table's summary. Download: <a class="ds-dl" href="/data/japan-ai-devices-register-extract.csv">japan-ai-devices-register-extract.csv</a>

| No. | First approved | Holder | What it does |
|---|---|---|---|
| 1 | 2018-12-06 | Cybernet Systems | Supports telling neoplastic from non-neoplastic colorectal lesions on ultra-magnifying endoscopy |
| 2 | 2019-09-17 | LPixel | Detects candidate aneurysm-like changes on brain MR angiography |
| 3 | 2019-12-25 | Fujifilm | Analyses regions of interest on CT (lung nodules, diffuse lung disease, liver masses) and searches the site's database for similar cases |
| 4 | 2020-04-27 | Cybernet Systems | Shows inflammation activity (active or remission) in ulcerative colitis on ultra-magnifying endoscopy |
| 5 | 2020-05-08 | Fujifilm | Detects candidate lung nodules on CT |
| 6 | 2020-06-03 | CES Descartes | Shows the likelihood of COVID-19 pneumonia findings on CT at three confidence levels |
| 7 | 2020-06-19 | Siemens Healthcare | Detects candidate lung nodules on CT |
| 8 | 2020-06-29 | Cybernet Systems | Detects colorectal polyps on endoscopy |
| 9 | 2020-06-29 | MIC Medical | Shows the likelihood of COVID-19 pneumonia findings on CT at three confidence levels |
| 10 | 2020-07-15 | Cybernet Systems | Supports predicting colorectal lesion pathology (non-neoplastic, adenoma or intramucosal cancer, invasive cancer) |
| 11 | 2020-08-20 | LPixel | Detects candidate lung nodules on chest X-ray |
| 12 | 2020-09-02 | Fujifilm | Detects colorectal polyps on endoscopy and supports their characterisation |
| 13 | 2020-11-24 | CES Descartes | Detects candidate lesions on breast ultrasound |
| 14 | 2020-11-30 | NEC | Marks candidate precancerous and early colorectal cancer lesions on endoscopy and supports diagnosis of protruding lesions |
| 15 | 2021-05-26 | Fujifilm | Shows the likelihood of COVID-19 pneumonia findings on CT at three confidence levels |
| 16 | 2021-07-07 | Fujifilm | Detects candidate abnormal shadows such as lung nodules and pneumothorax on chest X-ray |
| 17 | 2021-09-01 | Fujifilm | Detects candidate rib fractures on CT |
| 18 | 2021-10-11 | Konica Minolta | Detects candidate abnormal shadows such as lung nodules and masses on chest X-ray |
| 19 | 2021-12-09 | Doctor-Net | Shows the likelihood of infectious pneumonia findings on chest X-ray at three confidence levels |
| 20 | 2021-12-24 | Fujitsu Japan | Shows the likelihood of COVID-19 pneumonia findings on CT at three confidence levels |
| 21 | 2022-04-26 | Aillis | Supports diagnosis of influenza from throat images and clinical information |
| 22 | 2022-06-02 | Canon Medical Systems | Shows the likelihood of COVID-19 pneumonia findings on CT at two confidence levels |
| 23 | 2022-09-20 | Fujifilm | Detects oesophageal and gastric neoplastic lesions on endoscopy |
| 24 | 2022-11-14 | LPixel | Detects candidate colorectal polyps on endoscopy |
| 25 | 2022-12-16 | LPixel | Detects candidate abnormal shadows such as lung nodules and atelectasis on chest X-ray |
| 26 | 2023-01-17 | Cybernet Systems | Supports telling neoplastic from non-neoplastic colorectal lesions on colonoscopy |
| 27 | 2023-05-23 | Apple | Home-use program that analyses pulse-rate data and notifies the user of irregular rhythms suggesting atrial fibrillation |
| 28 | 2023-11-20 | Cosmotec | Detects candidate shadows of fibrosing interstitial lung disease on chest X-ray |
| 29 | 2023-12-21 | Olympus Medical Systems | Detects candidate colorectal polyps on endoscopy |
| 30 | 2023-12-26 | AI Medical Service | Detects gastric lesions on endoscopy that may need further examination |
| 31 | 2024-03-05 | OG Giken | Analyses endoscopy images of early gastric cancer and outputs the likelihood of intramucosal versus submucosal cancer as a number |
| 32 | 2024-04-12 | Anaut | Estimates and highlights anatomical structures on surgical endoscopy images |
| 33 | 2024-05-08 | Apple | Analyses pulse-rate data to estimate how much of the time Apple Watch was worn showed signs of atrial fibrillation |
| 34 | 2024-05-08 | Smart Opinion | Detects candidate lesions on breast ultrasound |
| 35 | 2024-05-21 | Media | Analyses dental panoramic X-rays to give information for the dentist's assessment of bone fragility |
| 36 | 2024-06-19 | Fukuda Denshi | Multifunction electrocardiograph that estimates the likelihood of paroxysmal atrial fibrillation in the past two years |
| 37 | 2024-07-29 | Fujitsu Japan | Detects and displays 18 parts of the fetal heart on screening ultrasound video to help avoid missed abnormalities |
| 38 | 2024-08-02 | Jmees | Estimates and highlights anatomical structures on surgical endoscopy images |
| 39 | 2024-08-26 | Fukuda Denshi | Multifunction electrocardiograph that estimates the likelihood of paroxysmal atrial fibrillation in the past two years |
| 40 | 2024-08-26 | Apple | Home-use program that analyses wrist-movement data from an accelerometer and notifies the user of breathing disturbances suggesting sleep apnoea |
| 41 | 2024-09-09 | iRhythm Technologies | Records and analyses up to 14 days of everyday ECG data to help diagnose arrhythmias |

## What this means for doctors in Japan

If you work in endoscopy, chest imaging or breast ultrasound, approved AI support already exists for your field, often from more than one company. Ask the vendor for the approval number and the approved purpose, and check that the version you are offered is the approved one. Then ask for evidence from patients like yours. The approval alone tells you neither.

If a product you are considering is not in this table, that does not mean it is unapproved. The table is a partial list. Check with the PMDA or the vendor.

<div class="callout"><b>Dr. Gupta's note.</b> I have read this page. It counts products in an official Japanese table of approved AI medical software. The table itself says it is only a partial list, so a product missing here may still be approved. Approval means the software may be sold for a stated purpose. It does not tell you how accurate it is on your patients. Ask the vendor for the approval details and the evidence before you rely on it.</div>

## Outside Japan

We have built the same kind of datasets for the [United States](/united-states-fda-ai-devices-datasets/) and [Australia](/australia-tga-ai-devices-datasets/). Totals are not comparable across countries: each regulator decides differently what goes on its list. For how image-reading AI works in general, see [how radiology AI works](/radiology-ai/how-radiology-ai-works/).

## Sources

<p class="ds-src">PMDA, "AIを活用した医療機器（プログラム）の承認状況（R6.9末現在）" [Approval status of AI-based medical device software, as of end of September 2024], in PMDA submission 資料2 to the 22nd regular exchange of views on approval review and safety measures for medical devices and in vitro diagnostics. The same table appears in this document on the Ministry of Health, Labour and Welfare website: <a href="https://www.mhlw.go.jp/content/11124500/001329696.pdf">mhlw.go.jp/content/11124500/001329696.pdf</a>. Copied 18 October 2026.</p>
