# DEVLOG.md

## Day 1 — 2026-05-20

**Hours worked:** 3

**What I did:**  
Started project setup for SpendLens using Next.js frontend and Express backend. Designed the initial UI direction and created the first version of the audit form. Researched pricing structures for ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot. Planned overall application architecture and database schema.

**What I learned:**  
I learned how fragmented AI pricing models are across vendors. Enterprise pricing is often intentionally vague, which makes financial comparison tools harder to build accurately.

**Blockers / what I'm stuck on:**  
Determining how aggressive the audit recommendations should be without sounding unrealistic or misleading.

**Plan for tomorrow:**  
Build the backend audit engine and integrate pricing logic.

---

## Day 2 — 2026-05-21

**Hours worked:** 5

**What I did:**  
Built the Express backend audit API and implemented deterministic recommendation rules. Added calculations for:
- small-team downgrades
- enterprise overspending
- API optimization
- coding workflow optimization

Integrated Supabase and created audit + leads tables.

**What I learned:**  
Financial recommendation systems require much stricter logic than normal SaaS dashboards because incorrect calculations instantly destroy trust.

**Blockers / what I'm stuck on:**  
Handling multiple overlapping optimization scenarios without conflicting recommendations.

**Plan for tomorrow:**  
Improve frontend UI and connect frontend to backend APIs.

---

## Day 3 — 2026-05-22

**Hours worked:** 4

**What I did:**  
Connected frontend audit form to backend API. Built results page with:
- savings metrics
- annual waste
- AI summary section
- recommendation cards

Added localStorage persistence so audit state survives page refreshes.

**What I learned:**  
Good UI hierarchy matters a lot for financial tools. The “savings” number needs to feel immediately visible and trustworthy.

**Blockers / what I'm stuck on:**  
Needed to refine the recommendation wording so it sounded more like a consultant and less like automated SaaS copy.

**Plan for tomorrow:**  
Integrate Gemini AI summaries and transactional email flow.

---

## Day 4 — 2026-05-23

**Hours worked:** 5

**What I did:**  
Integrated Gemini API for AI-generated summaries. Added fallback handling for API failures. Built lead capture system using Supabase and implemented transactional confirmation emails using Resend.

Added public audit URLs and shareable report pages.

**What I learned:**  
AI should not be trusted for financial calculations. Rule-based systems produce much more consistent and explainable recommendations.

**Blockers / what I'm stuck on:**  
Gemini API integration initially failed because of incorrect SDK usage and environment configuration issues.

**Plan for tomorrow:**  
Improve audit engine quality and add testing infrastructure.

---

## Day 5 — 2026-05-24

**Hours worked:** 5

**What I did:**  
Refactored audit engine logic and improved recommendation accuracy. Added retail pricing comparisons and realistic savings constraints to avoid exaggerated outputs.

Implemented:
- Jest testing
- 5 audit engine tests
- GitHub Actions CI workflow

Added honeypot abuse protection for lead forms.

**What I learned:**  
Small pricing mistakes cascade into unrealistic audit results quickly. Even simple SaaS pricing logic needs careful validation.

**Blockers / what I'm stuck on:**  
Balancing “helpful optimization” versus “fake savings inflation” was harder than expected.

**Plan for tomorrow:**  
Complete documentation and deployment polish.

---

## Day 6 — 2026-05-25

**Hours worked:** 6

**What I did:**  
Completed:
- README
- ARCHITECTURE.md
- PRICING_DATA.md
- PROMPTS.md
- TESTS.md

Improved public audit page design and recommendation formatting. Verified environment variables and deployment stability.

**What I learned:**  
Writing technical documentation forces clearer architectural thinking. Some backend decisions only became obvious once documented.

**Blockers / what I'm stuck on:**  
Open Graph preview generation was inconsistent across platforms during testing.

**Plan for tomorrow:**  
Finish remaining entrepreneurial documents and final cleanup before submission.

---

## Day 6 — 2026-05-25 - continue



**What I did:**  
Performed final QA testing across audit scenarios and verified deployment behavior. Cleaned repository structure, reviewed commit history, and finalized submission documentation.

Reviewed:
- audit logic consistency
- test execution
- email flow
- public audit URLs
- pricing references

**What I learned:**  
Building a “simple” SaaS auditing product requires balancing engineering, product thinking, finance logic, UX, and growth strategy simultaneously.

**Blockers / what I'm stuck on:**  
Time constraints limited deeper benchmark and analytics features.

**Plan for tomorrow:**  
Submit project and prepare for potential Round 2 improvements.

---
