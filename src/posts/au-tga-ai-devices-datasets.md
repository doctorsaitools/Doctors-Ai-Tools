---
title: "AI Devices on Australia's TGA Register: Five Datasets"
description: "Five downloadable datasets from the TGA's list of AI-enabled devices in the ARTG: class, manufacturers, sponsors, register extract and update history."
category: Guides
type: guide
keyword: ai enabled medical devices artg
date: 2026-10-17
updated: 2026-10-17
reviewed: false
preview: true
reviewedOn:
tone: c
---
The Therapeutic Goods Administration (TGA) publishes a list of medical devices on the Australian Register of Therapeutic Goods (ARTG) that use artificial intelligence or machine learning. We took the version dated 10 September 2026 and turned it into five small datasets you can read here and download as CSV files. Every figure is a count of entries in the TGA list, or a percentage worked out from those counts.

**Status: data from the TGA list, not yet reviewed by Dr. Gupta.** The list has 100 entries. We copied the table on 17 October 2026. The TGA replaces the table from time to time, so a later version will differ.

## How to read these numbers

- **The list is not complete.** The TGA says it does not capture every device that may use AI or machine learning. It includes devices where those terms appear in the product name or intended purpose, or where the sponsor reported AI use after March 2025.
- **An entry is not proof that a device does its work with AI.** Some entries say in their own intended purpose that the device does no analysis by itself and is used with a separate AI analysis system. Read the entry before you rely on it.
- **A listing is not a performance result.** It shows the product is on the register for a stated intended purpose. It does not show how well the tool works on your patients.
- **We do not sort devices by clinical use.** The CSV files carry the TGA's ARTG ID, so you can open each entry on the TGA's site and read its full intended purpose.

## Dataset 1: entries by classification

Download: [au-tga-ai-list-by-class.csv](/data/au-tga-ai-list-by-class.csv). Most entries are Class IIa or IIb.

| Classification | Entries | Share |
|---|---|---|
| Class 1 | 20 | 20.0% |
| Class IIa | 46 | 46.0% |
| Class IIb | 33 | 33.0% |
| Class 3 | 1 | 1.0% |

## Dataset 2: manufacturers with more than one entry

Manufacturers appear exactly as the TGA lists them, and we did not merge variants. There are 75 different manufacturer names in the list. The table shows the 19 with two or more entries. Download: [au-tga-ai-list-by-manufacturer.csv](/data/au-tga-ai-list-by-manufacturer.csv).

| Manufacturer (as listed) | Entries |
|---|---|
| Shenzhen Viatom Technology Co Ltd | 4 |
| Avicenna AI | 3 |
| GE Medical Systems Ultrasound and Primary Care Diagnostics LLC | 3 |
| Brainlab SE | 3 |
| Overjet Inc | 3 |
| Aidoc Medical Ltd | 2 |
| Precision AI Pty Ltd | 2 |
| EKO AI Pte Ltd | 2 |
| CurveBeam LLC DBA CurveBeam AI | 2 |
| OASIS Diagnostics S A | 2 |
| MIM Software Inc | 2 |
| MIM Fertility Sp zo o | 2 |
| Neusoft Medical Systems Co Ltd | 2 |
| Riverain Technologies Inc | 2 |
| Manteia Technologies Co Ltd | 2 |
| RetInSight GmbH | 2 |
| Withings | 2 |
| Whoop Inc | 2 |
| MyCardium AI Ltd | 2 |

## Dataset 3: sponsors with more than one entry

The sponsor is the Australian party named on each entry. There are 52 different sponsors. The table shows the 17 with two or more entries. One sponsor, Emergo, is named on 22 entries for many different manufacturers. Download: [au-tga-ai-list-by-sponsor.csv](/data/au-tga-ai-list-by-sponsor.csv).

| Sponsor (as listed) | Entries |
|---|---|
| Emergo Asia Pacific Pty Ltd T/a Emergo Australia | 22 |
| ACRA Regulatory Services Pty Ltd | 5 |
| Share Info Pty Ltd | 4 |
| Taevas Life Sciences Pty Ltd | 4 |
| GE Healthcare Australia Pty Ltd | 4 |
| MedEnvoy Global Pty Ltd | 3 |
| Brainlab Australia Pty Ltd | 3 |
| Precision AI Pty Ltd | 2 |
| Compliance Management Solutions | 2 |
| Medtronic Australasia Pty Ltd | 2 |
| Asia Actual Australia | 2 |
| Siemens Healthcare Pty Ltd | 2 |
| CurveBeam AI Limited | 2 |
| Murray Medical Solutions Pty Ltd | 2 |
| Gytech Pty Ltd | 2 |
| Stonestar Wholesale Pty Ltd | 2 |
| Oxford Scientific Pty Ltd | 2 |

## Dataset 4: the register extract

All 100 entries with four fields: ARTG ID, manufacturer, sponsor and classification. We left out the TGA's long device description (GMDN term) and intended purpose text. Open each ARTG ID on the TGA's site for the full wording. Download: [au-tga-ai-list-register-extract.csv](/data/au-tga-ai-list-register-extract.csv).

## Dataset 5: how the TGA list has changed

The TGA's page history shows the table was first published on 29 August 2025 and replaced four times since. Download: [au-tga-ai-list-update-history.csv](/data/au-tga-ai-list-update-history.csv).

| Date | Change |
|---|---|
| 29 August 2025 | Original publication |
| 16 December 2025 | Data table replaced with new version |
| 9 April 2026 | Data table replaced with new version |
| 27 July 2026 | Data table replaced with new version |
| 10 September 2026 | Data table replaced with new version |

## Vendors we cover, and what the list shows

These are the entries from vendors covered on this site, with the TGA's own description in short. Classes differ between products, and two triage products in the list sit in different classes, so read each entry's intended purpose before comparing them.

| Manufacturer | ARTG ID | Sponsor | Class | TGA wording, in short |
|---|---|---|---|---|
| Aidoc Medical Ltd | 316044 | ACRA Regulatory Services Pty Ltd | Class 1 | BriefCase radiological triage and notification software |
| Aidoc Medical Ltd | 459908 | ACRA Regulatory Services Pty Ltd | Class 1 | Medical image AI operating system that routes studies to other AI devices |
| Avicenna AI | 403475 | ACRA Regulatory Services Pty Ltd | Class IIb | CINA, radiological triage and notification software for head CT |
| Ibex Medical Analytics Ltd | 459645 | Taevas Life Sciences Pty Ltd | Class 3 | Software to support the pathologist reading whole slide images of H&E stained slides; prostate, breast and gastric |
| Lunit Inc | 406912 | Emergo Asia Pacific Pty Ltd T/a Emergo Australia | Class IIa | INSIGHT CXR, concurrent reading aid for chest radiographs |
| Harrison-AI Medical Pty Ltd | 454945 | Harrison-AI Medical Pty Ltd | Class 1 | Accessory that interfaces with x-ray image interpretive software |
| ScreenPoint Medical B.V. | 405621 | Siemens Healthcare Pty Ltd | Class IIb | Support for detection and diagnosis of breast lesions and breast density and cancer risk assessment |
| iCAD Inc | 387417 | Regional Health Care Group Pty Ltd | Class IIb | ProFound AI for mammography and breast tomosynthesis |
| AZmed | 470185 | Taevas Life Sciences Pty Ltd | Class IIa | Rayvolve, detection of fractures and bone measures on X-rays |

Several vendors we cover do not appear in this version of the list, including Viz.ai, Qure.ai, Gleamer and Paige. Because the TGA says the list is incomplete, that does not mean they are not on the ARTG. Check the register itself. No AI scribe product appears in this version either. Our planned guides on AI scribes in Australia will cover when a scribe counts as a medical device.

## Using this when you evaluate a tool

Look up the ARTG ID on the TGA's site and read the intended purpose. Then ask the vendor for performance on patients like yours. The clinician stays responsible for every result. Our [radiology AI guide](/radiology-ai/how-radiology-ai-works/) and [digital pathology guide](/pathology-ai/how-digital-pathology-ai-works/) explain what a regulatory listing does and does not tell you.

<div class="callout"><b>Dr. Gupta's note.</b> Dr. Gupta's note will appear here after his review.</div>

## Outside Australia

The United States has its own list. See our [FDA datasets](/fda-ai-devices-datasets-us/) for the same kind of counts from the FDA's AI-enabled device list.

## Sources

- [TGA: AI-enabled medical devices in the ARTG](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software/ai-enabled-medical-devices-artg), list dated 10 September 2026, table copied 17 Oct 2026
