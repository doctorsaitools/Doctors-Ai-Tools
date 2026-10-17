---
title: "FDA AI Medical Devices: Five Datasets, 1995–2026"
description: "Five downloadable datasets from the FDA's AI-enabled device list: authorizations by year, panel, pathway and company, plus pathology. Limits stated."
category: Guides
type: guide
keyword: fda ai enabled medical devices list
date: 2026-10-17
updated: 2026-10-17
reviewed: false
preview: true
reviewedOn:
tone: b
---
The FDA publishes a list of medical devices it has authorized that use artificial intelligence. We downloaded it and turned it into five small datasets you can read here and download as CSV files. Nothing in them is estimated: every figure is a count of rows in the FDA file, or a percentage worked out from those counts.

**Status: data from the FDA list, not yet reviewed by Dr. Gupta.** The file we used has 1,614 devices with decision dates from 29 September 1995 to 29 June 2026. We downloaded it on 17 October 2026. A later download will have more rows, and totals quoted elsewhere (for example the 1,430 devices to December 2025 in our [radiology guide](/radiology-ai/how-radiology-ai-works/)) will differ, because they come from a different source and cut-off date.

## How to read these numbers

- **The list is not complete.** The FDA says it is not a comprehensive resource. Devices are included mainly because AI-related terms appear in their summary or classification. Counts here are counts of that list, not of every AI device on the US market.
- **An authorization is not a performance result.** It says the FDA decided a device met a standard for a stated use. It does not show the tool will help your patients or save you time.
- **The file has no description of what each tool does.** We cannot split devices into triage, detection or reporting, so we do not.
- **The last year is partial.** 2026 runs to 29 June only.

## Dataset 1: authorizations per year

The yearly count grew from 18 in 2016 to 335 in 2025. In 2025 the count was 43% higher than in 2024 (235). 42 devices on the list were decided before 2016. Download: [us-fda-ai-devices-per-year.csv](/data/us-fda-ai-devices-per-year.csv) (all years from 1995).

| Year | Devices |
|---|---|
| 2016 | 18 |
| 2017 | 27 |
| 2018 | 65 |
| 2019 | 80 |
| 2020 | 114 |
| 2021 | 129 |
| 2022 | 162 |
| 2023 | 226 |
| 2024 | 235 |
| 2025 | 335 |
| 2026 (to 29 June) | 181 |

## Dataset 2: by FDA review panel

The FDA assigns each device a lead review panel. These are FDA panels, not clinical specialties, so a device can be listed under a panel that differs from the specialty that uses it. Radiology is 76.2% of the list. Download: [us-fda-ai-devices-by-review-panel.csv](/data/us-fda-ai-devices-by-review-panel.csv) (all 18 panels; the table shows the top eight).

| FDA review panel | Devices | Share |
|---|---|---|
| Radiology | 1230 | 76.2% |
| Cardiovascular | 154 | 9.5% |
| Neurology | 73 | 4.5% |
| Anesthesiology | 30 | 1.9% |
| Gastroenterology-Urology | 27 | 1.7% |
| Hematology | 22 | 1.4% |
| Pathology | 10 | 0.6% |
| Ophthalmic | 10 | 0.6% |

## Dataset 3: authorization pathway by year

The submission number shows the route. K numbers are 510(k) clearances, D numbers (DEN) are De Novo authorizations and P numbers are premarket approvals (PMA). Of 1,614 devices, 1,553 are 510(k), 40 are De Novo and 21 are PMA. Download: [us-fda-ai-devices-pathway-by-year.csv](/data/us-fda-ai-devices-pathway-by-year.csv) (all years).

| Year | 510(k) | De Novo | PMA |
|---|---|---|---|
| 2018 | 58 | 7 | 0 |
| 2019 | 80 | 0 | 0 |
| 2020 | 113 | 1 | 0 |
| 2021 | 122 | 6 | 1 |
| 2022 | 160 | 1 | 1 |
| 2023 | 219 | 6 | 1 |
| 2024 | 225 | 9 | 1 |
| 2025 | 329 | 2 | 4 |
| 2026 | 176 | 4 | 1 |

## Dataset 4: companies with the most authorizations

Companies are shown exactly as the FDA lists them, so one company can appear under several names (for example separate lines for Siemens Medical Solutions USA and Siemens Healthcare GmbH, or for different GE and Philips entities). We did not merge them. Only companies with eight or more devices are shown. Download: [us-fda-ai-devices-top-companies.csv](/data/us-fda-ai-devices-top-companies.csv).

| Company (as listed by FDA) | Devices |
|---|---|
| Siemens Medical Solutions USA, Inc. | 56 |
| Canon Medical Systems Corporation | 42 |
| Aidoc Medical, Ltd. | 30 |
| Shanghai United Imaging Healthcare Co., Ltd. | 29 |
| Philips Ultrasound LLC | 14 |
| Siemens Healthcare GmbH | 13 |
| GE Medical Systems Ultrasound and Primary Care Diagnostics | 13 |
| Samsung Medison Co., Ltd. | 13 |
| GE Medical Systems, LLC | 13 |
| Clarius Mobile Health Corp. | 12 |
| Hyperfine, Inc. | 12 |
| GE Medical Systems SCS | 12 |
| Viz.ai, Inc. | 10 |
| Subtle Medical, Inc. | 9 |
| Brainlab AG | 9 |
| GE Medical Systems Ultrasound and Primary Care Diagnostics, | 9 |
| Brainomix Limited | 8 |
| Philips Medical Systems Nederland B.V. | 8 |
| Qure.ai Technologies | 8 |

## Dataset 5: the FDA's "Pathology" panel

Only 10 devices have Pathology as the lead panel. This is a count of a panel label, and the list includes products that are not whole-slide AI: two 1990s automated Pap smear screening systems and genomic tests. Read the device names, not just the count. The Paige Prostate decision date matches the FDA's own announcement of 21 September 2021. Download: [us-fda-ai-devices-pathology.csv](/data/us-fda-ai-devices-pathology.csv).

| Decision date | Submission | Device | Company | Pathway |
|---|---|---|---|---|
| 09/29/1995 | P950009 | AUTOPAP(R) 300 QC AUTOMATIC PAP SCREENER/QC SYSTEM | BD DIAGNOSTICS | PMA |
| 11/08/1995 | P940029 | PAPNET Testing System | Neuromedical Systems, Inc. | PMA |
| 09/21/2021 | DEN200080 | Paige Prostate | Paige.AI | De Novo |
| 04/28/2023 | P210011 | xT CDx | Tempus Labs, Inc. | PMA |
| 01/31/2024 | DEN210035 | Genius Digital Diagnostics System with the Genius Cervical AI algorithm | Hologic Inc. | De Novo |
| 01/24/2025 | K241232 | Galen Second Read | Ibex Medical Analytics Ltd. | 510(k) |
| 07/31/2025 | DEN240068 | ArteraAI Prostate | Artera Inc. | De Novo |
| 08/29/2025 | K250003 | GENESEEQPRIME NGS Tumor Profiling Assay (FFPE) (GS6005) | Geneseeq Technology Inc. | 510(k) |
| 12/09/2025 | K243449 | INFINITT DPS | Infinitt Healthcare Co., Ltd. | 510(k) |
| 05/04/2026 | K254115 | ArteraAI Breast | Artera, Inc. | 510(k) |

Pathology AI devices can also sit under other panels, such as Radiology or Clinical Chemistry, so this is not a full list of pathology AI. See our [digital pathology guide](/pathology-ai/how-digital-pathology-ai-works/) for the wider picture.

## Using this when you evaluate a tool

Look up the exact submission number on the FDA's own database and read the stated indication before you buy. Then ask the vendor for performance on patients like yours. The clinician stays responsible for every result. Our [radiology AI guide](/radiology-ai/how-radiology-ai-works/) explains what clearance does and does not tell you.

<div class="callout"><b>Dr. Gupta's note.</b> Dr. Gupta's note will appear here after his review.</div>

## Outside the US

Other regulators publish different lists. Australia's TGA lists AI-enabled devices in its ARTG register and says the list does not capture every such device. Health Canada's licence listing (MDALL) covers Class II, III and IV devices and has no AI flag that we found. In the UK, the MHRA's registration database (PARD) searches by manufacturer and device type. An earlier third-party analysis by Hardian Health said AI devices cannot be identified there. The MHRA has since launched a new PARD site, and we have not checked whether it adds an AI filter. We plan separate datasets where the data supports them.

## Sources

- [FDA: Artificial Intelligence-Enabled Medical Devices](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices), CSV downloaded 17 Oct 2026
- [FDA: FDA authorizes software that can help identify prostate cancer](https://www.fda.gov/news-events/press-announcements/fda-authorizes-software-can-help-identify-prostate-cancer), 21 September 2021
- [TGA: AI-enabled medical devices in the ARTG](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software/ai-enabled-medical-devices-artg)
- [Health Canada: Medical Devices Active Licence Listing](https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/licences/medical-devices-active-licence-listing.html)
- [MHRA: Public Access Registration Database](https://pard.mhra.gov.uk/)
- [Hardian Health: How many AI-enabled medical devices are approved for use in the UK?](https://www.hardianhealth.com/insights/how-many-ai-enabled-medical-devices-are-approved-for-use-in-the-uk)
