---
title: "How Radiology AI Works: Triage, Detection and Reporting"
description: "A radiologist's plain-English guide to what radiology AI does, what FDA clearance means, and the limits every buyer should understand before a pilot."
category: Radiology AI
type: guide
keyword: how does radiology ai work
date: 2026-10-17
updated: 2026-10-17
reviewed: false
preview: true
reviewedOn:
tone: b
---
Radiology AI is software that reads a medical image, or the report written about it, and flags something for a human to look at. It does not replace the radiologist. It changes what the radiologist sees first, what gets highlighted on the image, or how fast the report is drafted.

Radiology AI is not one product. It is three kinds of tool that solve different problems, so the first step in any purchase is to ask which problem you are solving. This guide explains the three, what "FDA-cleared" does and does not tell you, and where the limits are. Vendor figures are the vendor's own claims, not our findings.

## The three jobs radiology AI does

### 1. Triage: putting urgent studies first

A triage tool scans each new study as it arrives and moves suspected urgent findings, such as a possible stroke or bleed, to the top of the worklist or sends an alert to the care team. The scan still gets read by a radiologist. What changes is the order.

Examples from our research include Aidoc, which says it flags urgent findings across radiology, neurovascular, vascular and cardiology, and Viz.ai, which detects suspected disease including large vessel occlusion and alerts the care team.

### 2. Detection: a second pair of eyes

A detection tool marks findings on the image itself. Chest X-ray and head CT are common starting points. Harrison.ai offers findings on chest X-ray and non-contrast head CT. Qure.ai covers chest X-ray, lung nodules, stroke and traumatic brain injury, and musculoskeletal X-ray. Lunit focuses on 2D and 3D mammography and chest X-ray.

These tools suit high-volume work, where a second look is valuable and a missed finding is costly. They also create work. Every false alert is something a radiologist must review and dismiss.

### 3. Reporting: faster, more consistent reports

Reporting tools work on the words, not the pixels. Rad AI drafts report impressions and flags incidental findings that need follow-up. Microsoft's PowerScribe offers Smart Impression Reporting. The radiologist still reviews and signs the report.

## How the software fits into a department

Most tools sit between the scanner and your viewing system. A study goes from the scanner to PACS, a copy is sent to the AI, and the result returns as a worklist flag, an overlay on the image, or a line in the report. The best tools show results inside your normal worklist. A separate screen is easy to ignore, and a tool nobody opens saves no time.

Ask early about integration with your PACS and RIS, and about where images are processed and stored.

## What "FDA-cleared" means

A clearance means the FDA decided the tool met a safety and effectiveness standard for a stated use. It does not show the tool will improve your results or save your department time.

The numbers show how common clearance is. A 2026 study in *Cureus*, summarised by AuntMinnie, counted 1,430 AI-enabled devices on the FDA's list between September 1995 and December 2025. Of these, 1,094 (76.5%) were radiology devices, and 1,376 of the total went through the 510(k) pathway. The authors did not assess the clinical evidence behind the clearances.

Two points follow:

- **Check the exact indication.** A vendor with many clearances may not have one for the finding you need.
- **Ask for evidence beyond the clearance.** Ask for performance on patients like yours.

Other regions have their own regulators. In the UK, devices go through the MHRA. In Canada, Health Canada licenses them. In Australia, the TGA regulates them. A tool cleared in one country is not automatically available in another, so check the register for your own country.

## Reading accuracy claims

Vendors often quote sensitivity (how many true cases the tool finds) and specificity (how many normal cases it correctly leaves alone). Three questions make these numbers useful:

1. **What was the test population?** A tool tested on a hospital with many sick patients may perform differently in a screening clinic.
2. **How many false alerts will you handle each day?** In a low-prevalence setting, even a small false-positive rate produces many false alerts.
3. **Was it tested on scanners like yours?** Performance can change with equipment and protocols.

The best answer to all three is a pilot on your own studies before you sign.

## A worked example: why false alerts add up

These numbers are made up to show the arithmetic. They are not any vendor's results.

Suppose a department scans 1,000 studies and 2% (20 studies) contain the finding. A tool with 90% sensitivity and 95% specificity would:

- flag 18 of the 20 true cases (and miss 2)
- wrongly flag 49 of the 980 normal studies (5% of 980)

That is 67 alerts, and 49 of them (about 73%) are false. The tool is performing exactly as advertised, and most of its alerts still need to be dismissed. In a department where 20% of studies are positive, the same tool would raise 180 true alerts and 40 false ones. The setting changes the result as much as the software does, which is why local testing matters.

## What a good pilot measures

A pilot on your own studies should answer four questions, ideally over several weeks:

1. How many true findings did the tool catch that you would otherwise have reached later?
2. How many false alerts did it raise per day, and how long did each take to dismiss?
3. Did it change time to report, or time to treatment for urgent cases?
4. Did radiologists actually use it, or work around it?

Write the targets down before the pilot starts, so the result decides the purchase, not the sales demo.

## What radiology AI cannot do

- It does not know the patient. It cannot weigh history, prior studies or the clinical question the way a radiologist does.
- It only looks for what it was built to find. A tool built for chest X-ray findings will not tell you about an unexpected finding elsewhere.
- It can be wrong in both directions. The radiologist signs the report and stays accountable for it.

<div class="callout"><b>Dr. Gupta's note.</b> Dr. Gupta's note will appear here after his review.</div>

## Before you buy: six questions

1. Is it cleared in your region for your exact use?
2. Has it been tested on patients like yours?
3. How many false alerts will you handle?
4. Does it fit your PACS and RIS?
5. Where do images and reports go, and under which privacy rules (HIPAA, UK GDPR, PHIPA, the Australian Privacy Act)?
6. Who is responsible when it is wrong?

Our [Radiology AI hub](/radiology-ai/) lists the vendors we are researching and explains each question in more detail.

## Sources

- [AuntMinnie: Radiology dominates thirty years of FDA AI device approvals](https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals), summarising the *Cureus* study
- Vendor sites for Aidoc, Viz.ai, Harrison.ai, Qure.ai, Lunit, Rad AI and Microsoft PowerScribe, as listed on our [Radiology AI hub](/radiology-ai/), checked 17 Oct 2026
- [FDA: AI-enabled medical devices list](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices)
