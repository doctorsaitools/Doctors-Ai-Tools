---
title: "How Digital Pathology AI Works: From Glass Slide to Algorithm"
description: "How a glass slide becomes a whole-slide image, what pathology AI does with it, and what FDA authorizations and CAP validation guidance say."
category: Pathology AI
type: guide
keyword: what is digital pathology
date: 2026-10-17
updated: 2026-10-17
reviewed: false
preview: true
reviewedOn:
tone: c
---
Digital pathology means a pathologist reads a scanned image of a slide on a screen instead of looking through a microscope. Pathology AI is software that works on that image: it can mark areas that look suspicious, grade a tumor, or count cells for a stain score. The pathologist still makes the diagnosis.

This guide follows a slide from the lab bench to the algorithm and explains the milestones, the types of tool and the checks a lab should make before relying on any of them. Vendor claims are attributed to the vendor.

## Step 1: the glass slide becomes an image

A slide scanner photographs the whole slide at high magnification and stitches the result into one very large file called a whole-slide image. Several companies sell scanners and viewing systems, including Philips and Roche.

These files are large. Storing and moving them is a real cost, and labs need to plan for it before they scan their first case. We will cover this in a separate guide on storage and IT costs.

## Step 2: the image is stored and viewed

An image management system holds the files, links them to the lab's case records, and lets the pathologist view, annotate and share them. Vendors in this area include Sectra, Philips, Proscia (Concentriq) and PathAI (AISight). Many AI tools plug into one of these systems rather than running on their own.

## Step 3: AI works on the image

Pathology AI falls into two main groups.

- **Detection and grading.** The software looks for tumor, or grades it, and shows the pathologist where to look. Paige Prostate, for prostate biopsies, is the best-known example. Ibex's Galen covers prostate, breast and gastric tissue, according to an industry survey from Intuition Labs.
- **Image analysis and scoring.** These tools measure what is on the slide, such as counting cells or quantifying stained tissue. Indica Labs (HALO AI) and Visiopharm work in this area.

## Two milestones every lab should know

### 2017: the first digital system cleared for primary diagnosis

On 13 April 2017, Philips announced that its IntelliSite Pathology Solution had received FDA clearance through the De Novo pathway for primary diagnostic use in the US. Philips said the FDA evaluated a study of about 2,000 surgical pathology cases, in which 16 pathologists at four sites made about 16,000 reads. Philips described it as the first US digital pathology solution cleared for primary diagnostic use.

### 2021: the first FDA-authorized AI for pathology

On 21 September 2021, the FDA authorized Paige Prostate through the De Novo pathway. The FDA described it as an adjunct, used alongside review of scanned slide images, that marks the area on a prostate biopsy most likely to contain cancer so a pathologist can look at it further.

The FDA's own summary is worth reading closely:

- In a study, 16 pathologists reviewed 527 slide images. Cancer detection on individual slides improved by an average of 7.3%.
- The study did not evaluate the effect on the final patient diagnosis.
- The FDA noted false negatives and false positives are possible, and said professional evaluation by a qualified pathologist who takes the patient's history into account reduces that risk.

Paige has since been bought by Tempus, according to Intuition Labs and Fierce Healthcare, so the product now sits inside a larger company.

## Where the market stands

Intuition Labs reports that Proscia received FDA clearance for primary diagnosis from whole-slide images in 2024 and that PathAI's AISight platform received a CE mark in 2025. In February 2026, Labcorp said it will deploy PathAI's AISight Dx, an FDA-cleared platform for primary diagnosis, across its national network of anatomic pathology labs. These are industry and vendor reports, and details change quickly, so check the current status with the vendor.

The pattern is clear. Digital pathology platforms are being adopted first, and AI tools are being added on top of them. That order is also sensible for a single lab, as the next section explains.

## Validating a digital system in your lab

A cleared scanner and viewer do not remove the lab's duty to check that the system works in its own hands. In the US, the College of American Pathologists (CAP) published a guideline on validating whole-slide imaging in December 2013. An update came out online on 18 May 2021 and in print in April 2022. It includes a recommendation that concordance between light microscopy and whole-slide imaging be greater than 95%, and it contains three strong recommendations and nine good practice statements. Read the guideline itself for the details before you plan a validation.

A sensible order for a lab is to validate the scanner and viewer first, and add an AI tool as an adjunct only after the digital workflow is stable.

Labs outside the US should check their own accreditation body and regulator. In Europe, Intuition Labs lists Ibex as IVDR-compliant and Aiforia with CE-IVD status for multi-cancer models, and the UK, Canada and Australia have their own rules. Our [Pathology AI hub](/pathology-ai/) will carry country guides as we publish them.

## What pathology AI cannot do

- It does not read the clinical history, the gross description or the other slides in the case.
- It is built for specific tissue and tasks. A prostate tool says nothing about a lymph node.
- It can be wrong, and a missed or false flag can change what the pathologist looks at. The pathologist signs the report.
- Its performance depends on how the slide was cut, stained and scanned. A lab with different stains or scanners should not assume a vendor's published numbers apply.

<div class="callout"><b>Dr. Gupta's note.</b> Dr. Gupta's note will appear here after his review.</div>

## Questions to ask a vendor

1. Which tissue types, stains and scanners is the tool cleared or validated for?
2. In what regions is it authorized, and for what exact use?
3. How was performance measured, and on which patient populations?
4. How does it integrate with our image management system and LIS?
5. Where are images stored, and who can use them to train models?
6. What happens to our workflow if the vendor changes hands, as Paige did?

## Sources

- [Philips: IntelliSite Pathology Solution cleared for primary diagnostic use in the US](https://www.usa.philips.com/a-w/about/news/archive/standard/news/press/2017/20170413-philips-fda-clearance-intellisite-pathology-solution-primary-diagnostic.html), 13 April 2017
- [FDA: FDA authorizes software that can help identify prostate cancer](https://www.fda.gov/news-events/press-announcements/fda-authorizes-software-can-help-identify-prostate-cancer), 21 September 2021
- [BioSpace: FDA authorizes software that can help identify prostate cancer](https://www.biospace.com/fda-authorizes-software-that-can-help-identify-prostate-cancer), for the date
- [CAP: Validating Whole Slide Imaging for Diagnostic Purposes in Pathology](https://cap.org/protocols-and-guidelines/cap-guidelines/current-cap-guidelines/validating-whole-slide-imaging-for-diagnostic-purposes-in-pathology)
- [Labcorp: expands collaboration with PathAI to deploy FDA-cleared digital pathology platform nationwide](https://ir.labcorp.com/news-releases/news-release-details/labcorp-expands-collaboration-pathai-deploy-fda-cleared-digital)
- [MedAI Verdict: best AI pathology platforms 2026](https://medaiverdict.com/best-ai-pathology), for the list of image management and analysis vendors
- [Intuition Labs: imaging and pathology AI vendors](https://intuitionlabs.ai/articles/imaging-pathology-ai-vendors)
- [Fierce Healthcare: Tempus claims AI pathology developer Paige in $81M deal](https://www.fiercehealthcare.com/medtech/tempus-claims-ai-pathology-developer-paige-81m-deal)
