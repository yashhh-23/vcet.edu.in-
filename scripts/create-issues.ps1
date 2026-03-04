# ============================================================
# VCET GitHub Issues — Bulk Creator
# Run ONCE after: gh auth login
# ============================================================

$REPO = "CyberCodezilla/vcet.edu.in"
$GH   = "C:\Program Files\GitHub CLI\gh.exe"

# Create label if it does not already exist
Write-Host "Ensuring 'redesign' label exists..." -ForegroundColor Yellow
& $GH label create redesign --repo $REPO --description "Page redesign and refactor task" --color "0075ca" 2>&1 | Out-Null

function New-Issue($title, $body, $labels) {
    Write-Host "`nCreating: $title" -ForegroundColor Cyan
    & $GH issue create `
        --repo  $REPO `
        --title $title `
        --body  $body `
        --label $labels 2>&1
}

# ─────────────────────────────────────────
# ISSUE 1 — About VCET
# ─────────────────────────────────────────
New-Issue `
"[Redesign] About VCET — pages/about/ (Group 1)" `
@"
## Assigned to: Group 1

## Pages to redesign
All files under ``pages/about/``:

- [ ] ``AboutVCET.tsx``
- [ ] ``PresidentsDesk.tsx``
- [ ] ``PrincipalsDesk.tsx``
- [ ] ``GoverningCouncil.tsx``
- [ ] ``OrganizationalStructure.tsx``
- [ ] ``Administration.tsx``
- [ ] ``StrategicPlan.tsx``
- [ ] ``CodeOfConduct.tsx``

## What needs to be done
Redesign the layout, typography, component structure, and visual hierarchy of every page listed above.
You have full creative freedom on how these pages look and are laid out.

## Content rules (non-negotiable)
- All factual content — names, designations, text, images — must match the live reference site: https://vcet.edu.in
- Do not alter, remove, or fabricate any institutional information.
- If a piece of content is missing or outdated, flag it in this issue as a comment before making assumptions.

## Technical rules
- Do not modify any file outside ``pages/about/`` and ``components/`` shared components without opening a separate issue first.
- Do not touch ``api/`` under any circumstances.
- The shared layout wrapper ``PageLayout.tsx`` and ``PageBanner.tsx`` in ``components/`` may be modified only if the change benefits all pages that use them. Raise it as a separate PR.
- All TypeScript types must remain valid. Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-about-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-about-pages``
3. Work on files, commit with clear messages (e.g. ``feat(about): redesign PresidentsDesk layout``)
4. Open a PR into ``develop`` — not ``main``
5. Request review from at least one teammate
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 2 — Admissions
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Admissions — pages/admissions/ (Group 2)" `
@"
## Assigned to: Group 2

## Pages to redesign
All files under ``pages/admissions/``:

- [ ] ``CoursesIntake.tsx``
- [ ] ``FeesStructure.tsx``
- [ ] ``Scholarships.tsx``
- [ ] ``Brochure.tsx``
- [ ] ``DocumentsRequired.tsx``
- [ ] ``CutOff.tsx``

## What needs to be done
These pages are seen by prospective students and parents and are among the most visited sections of the site.
Redesign them to be clear, visually appealing, and easy to navigate on both desktop and mobile.

## Content rules (non-negotiable)
- All data — intake numbers, fees, scholarship details, cutoff ranks, document checklists — must match: https://vcet.edu.in
- Fees and intake numbers change each academic year. Do not guess or fill in placeholder values.
- If data is unavailable, leave the existing value and add a ``// TODO: update for AY 2025-26`` comment.

## Technical rules
- Do not modify any file outside ``pages/admissions/``.
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-admissions-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-admissions-pages``
3. Commit often with scoped messages (e.g. ``feat(admissions): redesign FeesStructure with sortable table``)
4. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 3 — Departments Group A (CS/IT)
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Departments Group A (CS/IT) — pages/departments/ (Group 3)" `
@"
## Assigned to: Group 3

## Pages to redesign
Subset of ``pages/departments/`` — CS and IT branches:

- [ ] ``DeptComputerEngg.tsx`` — Computer Engineering
- [ ] ``DeptCSDS.tsx`` — Computer Science (Data Science)
- [ ] ``DeptIT.tsx`` — Information Technology
- [ ] ``DeptAIDS.tsx`` — Artificial Intelligence and Data Science

## What needs to be done
Department pages are the identity of each branch. Redesign them to include clearly structured sections for:
- Department overview and vision/mission
- Programs offered (UG/PG)
- Faculty listing
- Labs and infrastructure
- Achievements and publications highlights
- Events and activities

## Content rules (non-negotiable)
- Faculty names, qualifications, and designations must exactly match: https://vcet.edu.in
- Do not add or remove faculty members based on assumption.
- Program intake numbers must match official DTE/AICTE approved figures.

## Shared template note
All four department pages use the shared ``DepartmentPage.tsx`` component in ``components/``.
If changes to that template are needed, open a separate issue so all department groups can coordinate.

## Technical rules
- Do not modify ``pages/departments/DeptMech.tsx``, ``DeptENTC.tsx``, ``DeptCivil.tsx``, or ``DeptFE.tsx`` — those belong to Group 4.
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-departments-cs-it``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-departments-cs-it``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 4 — Departments Group B (Core)
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Departments Group B (Core Branches) — pages/departments/ (Group 4)" `
@"
## Assigned to: Group 4

## Pages to redesign
Subset of ``pages/departments/`` — core engineering branches:

- [ ] ``DeptMech.tsx`` — Mechanical Engineering
- [ ] ``DeptENTC.tsx`` — Electronics and Telecommunication
- [ ] ``DeptCivil.tsx`` — Civil Engineering
- [ ] ``DeptFE.tsx`` — First Year Engineering

## What needs to be done
Redesign these pages with clearly structured sections:
- Department overview and vision/mission
- Programs offered
- Faculty listing
- Labs and infrastructure
- Achievements and highlights
- Events and activities

## Content rules (non-negotiable)
- Faculty names, qualifications, and designations must exactly match: https://vcet.edu.in
- Program intake numbers must match official DTE/AICTE approved figures.

## Shared template note
All department pages use the shared ``DepartmentPage.tsx`` component.
If you need to modify that component, coordinate with Group 3 and open a separate issue.

## Technical rules
- Do not modify the CS/IT pages — those belong to Group 3.
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-departments-core``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-departments-core``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 5 — Academics
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Academics — pages/academics/ (Group 5)" `
@"
## Assigned to: Group 5

## Pages to redesign
All files under ``pages/academics/``:

- [ ] ``DeanAcademics.tsx``
- [ ] ``AcademicCalendar.tsx``
- [ ] ``TeachingLearning.tsx``
- [ ] ``SwayamNPTEL.tsx``
- [ ] ``HonoursMinor.tsx``
- [ ] ``ExamCell.tsx``
- [ ] ``Downloads.tsx``

## What needs to be done
Redesign these pages with a clean, information-dense layout.
The academic calendar page should present dates clearly (timeline or table format preferred).
The downloads page should have a clean filterable document list.

## Content rules (non-negotiable)
- Academic calendar dates, exam schedules, and NPTEL course listings must match: https://vcet.edu.in
- Do not invent or assume academic dates.
- Downloads must link to the same documents as the reference site.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-academics-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-academics-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 6 — Research
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Research — pages/research/ (Group 6)" `
@"
## Assigned to: Group 6

## Pages to redesign
All files under ``pages/research/``:

- [ ] ``ResearchIntro.tsx``
- [ ] ``FundedResearch.tsx``
- [ ] ``Publications.tsx``
- [ ] ``ConsultancyProjects.tsx``
- [ ] ``ResearchFacility.tsx``
- [ ] ``ResearchConventions.tsx``
- [ ] ``ResearchPolicy.tsx``
- [ ] ``NIRF.tsx``

## What needs to be done
Research pages carry the academic credibility of the institution.
Redesign them to be professional, structured, and easy to read.
Publications and funded research should use card or table layouts.
NIRF page must present NIRF ranking data clearly and accurately.

## Content rules (non-negotiable)
- All publication titles, author names, funded project titles, and NIRF data must match: https://vcet.edu.in
- NIRF scores and ranking data are public record — do not alter them.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-research-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-research-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 7 — Facilities
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Facilities — pages/facilities/ (Group 7)" `
@"
## Assigned to: Group 7

## Pages to redesign
All files under ``pages/facilities/``:

- [ ] ``CentralComputing.tsx``
- [ ] ``Library.tsx``
- [ ] ``CounselingCell.tsx``
- [ ] ``LadiesCommonRoom.tsx``
- [ ] ``SportsGymkhana.tsx``
- [ ] ``HealthFacilities.tsx``
- [ ] ``DifferentlyAbled.tsx``

## What needs to be done
Facilities pages should give prospective students and parents a clear picture of campus infrastructure.
Use image-driven layouts where applicable.
The library page should highlight book count, digital resources, and seating capacity prominently.

## Content rules (non-negotiable)
- All facility details — equipment lists, capacity numbers, timings — must match: https://vcet.edu.in
- Do not use placeholder or stock images. Use only images from ``public/Images/``.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-facilities-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-facilities-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 8 — Student Life
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Student Life — pages/student-life/ (Group 8)" `
@"
## Assigned to: Group 8

## Pages to redesign
All files under ``pages/student-life/``:

- [ ] ``CareerAtVCET.tsx``
- [ ] ``StudentsCouncil.tsx``
- [ ] ``CulturalCommittee.tsx``
- [ ] ``SportsCommittee.tsx``
- [ ] ``Literati.tsx``
- [ ] ``NSS.tsx``
- [ ] ``EBSB.tsx``
- [ ] ``StudentsClub.tsx``
- [ ] ``Hackathon.tsx``
- [ ] ``NSDC.tsx``
- [ ] ``Training.tsx``
- [ ] ``ECell.tsx``
- [ ] ``IIIC.tsx``
- [ ] ``Parents.tsx``

## What needs to be done
Student life pages represent the energy and culture of VCET.
These pages should feel dynamic and engaging.
Committee and council pages should list office bearers clearly.
Event-based pages (Hackathon, Literati) should highlight past editions with photos and stats.

## Content rules (non-negotiable)
- Student council member names and committee office bearers must match: https://vcet.edu.in
- Event details (dates, winners, statistics) must match the reference site.
- Do not feature individual students without confirmation that their information is already public on the official site.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-student-life-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-student-life-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 9 — Technical Clubs
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Technical Clubs — pages/clubs/ (Group 9)" `
@"
## Assigned to: Group 9

## Pages to redesign
All files under ``pages/clubs/``:

- [ ] ``IEEE.tsx``
- [ ] ``CSI.tsx``
- [ ] ``IETE.tsx``
- [ ] ``ISHRAE.tsx``
- [ ] ``VMEA.tsx``
- [ ] ``IGBC.tsx``
- [ ] ``IIC.tsx``

## What needs to be done
Club pages should communicate the purpose, activities, and achievements of each professional body chapter at VCET.
Each page should have a consistent structure:
- About the national body and the VCET chapter
- Office bearers and faculty coordinator
- Past events and achievements
- How to join

## Content rules (non-negotiable)
- Office bearer names, roles, and faculty coordinator names must match: https://vcet.edu.in
- Do not use national chapter information (from ieee.org etc.) as VCET-specific content. Keep content specific to the VCET chapter.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-clubs-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-clubs-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 10 — Committees
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Committees — pages/committees/ (Group 10)" `
@"
## Assigned to: Group 10

## Pages to redesign
All files under ``pages/committees/``:

- [ ] ``CollegeDevelopmentCommittee.tsx``
- [ ] ``IQAC.tsx``
- [ ] ``GrievanceRedressal.tsx``
- [ ] ``SRGCCommittee.tsx``
- [ ] ``AntiRagging.tsx``
- [ ] ``SCSTCommittee.tsx``
- [ ] ``InternalComplaint.tsx``
- [ ] ``EqualOpportunity.tsx``
- [ ] ``SEDGCell.tsx``

## What needs to be done
Statutory committee pages must be presented in a formal, trustworthy layout.
These pages are referenced by NAAC, regulatory bodies, and students seeking grievance support.
Each page should clearly list committee composition, mandate, contact details, and relevant policy documents.

## Content rules (non-negotiable)
- Committee member names, designations, and contact information must exactly match: https://vcet.edu.in
- These pages are regulatory — any inaccuracy has compliance consequences.
- Anti-ragging and ICC pages must include the prescribed statutory content per UGC/AICTE guidelines.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-committees-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-committees-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 11 — NAAC
# ─────────────────────────────────────────
New-Issue `
"[Redesign] NAAC — pages/naac/ (Group 11)" `
@"
## Assigned to: Group 11

## Pages to redesign
All files under ``pages/naac/``:

- [ ] ``NAACScore.tsx``
- [ ] ``SSS.tsx``
- [ ] ``SSSReport.tsx``
- [ ] ``SSRCycle1.tsx``
- [ ] ``SSRCycle2.tsx``
- [ ] ``BestPractices.tsx``

## What needs to be done
NAAC pages are assessed directly during accreditation visits. They must be professionally presented and data-accurate.
The NAACScore page should highlight the B++ grade, CGPA, and cycle information prominently.
SSR (Self Study Report) pages should present the document download cleanly with clear cycle identification.
The BestPractices page should follow the prescribed NAAC format with title, objectives, and outcomes.

## Content rules (non-negotiable)
- NAAC grade, CGPA, cycle dates, and all SSR content must exactly match: https://vcet.edu.in
- SSR documents must link to the same PDFs currently hosted.
- Do not alter any NAAC policy or evaluation data.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-naac-pages``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-naac-pages``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

# ─────────────────────────────────────────
# ISSUE 12 — Contact
# ─────────────────────────────────────────
New-Issue `
"[Redesign] Contact Us — pages/contact/ (Group 12)" `
@"
## Assigned to: Group 12

## Pages to redesign
- [ ] ``pages/contact/ContactUs.tsx``

## What needs to be done
The contact page is the entry point for admissions inquiries, general queries, and visitor navigation.
Redesign it with:
- A clean contact form (UI only — form submission is out of scope unless a backend endpoint exists)
- Address block with map embed
- Phone numbers, email addresses, and department-specific contacts
- Office hours

## Content rules (non-negotiable)
- All contact details — phone numbers, emails, address, pin code — must match: https://vcet.edu.in
- If embedding a Google Map, use the same location as the reference site.
- Do not add contact addresses or numbers that are not on the official site.

## Technical rules
- Do not touch ``api/`` under any circumstances.
- Run ``npx tsc --noEmit`` before opening your PR.

## Branch
``feature/redesign-contact-page``

## Steps
1. ``git checkout develop && git pull origin develop``
2. ``git checkout -b feature/redesign-contact-page``
3. Open a PR into ``develop`` — not ``main``
"@ `
"redesign"

Write-Host "`nAll issues created successfully." -ForegroundColor Green
