# REFLECTION.md

## 1. The hardest bug I hit this week, and how I debugged it

The hardest issue I faced was incorrect audit calculations producing unrealistic savings recommendations. Early in development, the audit engine occasionally recommended downgrades that actually increased costs or produced negative savings values. For example, some users on lower-tier plans were incorrectly shown as “overspending,” and the efficiency scoring logic was inconsistent across different spend ranges.

My first hypothesis was that the pricing dataset itself contained incorrect values. I reviewed every pricing entry manually against official vendor pricing pages and updated several mismatched plan names and pricing structures. After that, I realized the real issue was in the recommendation logic flow. Some conditions were executing in the wrong order, causing overlapping rules to override one another.

To debug the issue, I logged each calculation step and manually tested different scenarios such as small teams on enterprise plans, API-heavy workloads, and coding-focused use cases. I also introduced retail cost validation so recommendations only trigger when the optimized cost is genuinely lower than the reported spend.

The final fix involved restructuring the conditional logic, preventing duplicate rule execution, and capping savings values to avoid impossible outputs. I also added Jest tests covering the most important audit scenarios. That process significantly improved the reliability and realism of the audit engine.

---

## 2. A decision I reversed mid-week, and what made me reverse it

One important decision I reversed was trying to make the audit engine heavily AI-driven. Initially, I planned to use Gemini AI for both recommendation generation and cost optimization decisions because it sounded more advanced and “AI-native.”

After experimenting with this approach, I realized the recommendations became inconsistent and difficult to justify financially. The model sometimes produced vague optimization advice that sounded convincing but lacked concrete numerical reasoning. Since the assignment explicitly emphasized finance-defensible recommendations, I decided that using AI for core calculations would actually weaken the product.

I reversed the decision and moved all pricing logic into deterministic rule-based calculations using structured pricing data. AI is now used only for generating the personalized audit summary paragraph, while the optimization engine itself uses explicit business rules and pricing comparisons.

This ended up being a much stronger product decision. The recommendations became transparent, testable, and easier to validate. It also improved performance and reduced unnecessary API dependency. The experience reinforced an important product lesson: not every problem benefits from AI, especially when consistency and financial correctness matter more than creativity.

---

## 3. What I would build in week 2 if I had it

If I had another week to continue building SpendLens, I would focus primarily on benchmarking, collaboration, and analytics features.

The first feature I would add is benchmark mode. Users would see how their AI spend compares against companies of similar size and use case. For example, an engineering team could compare “AI spend per developer” against other startups with similar team structures. This would make the audits feel more actionable and data-driven.

The second feature would be a PDF export system for audit reports. Many founders and engineering managers need to share budget reports internally with finance or leadership teams. A polished downloadable report would improve product usability and increase sharing potential.

I would also improve the viral loop by generating dynamic Open Graph images for every audit report. Right now, links are shareable, but custom visuals showing estimated savings would dramatically improve social sharing performance on X and LinkedIn.

On the backend side, I would implement analytics tracking for funnel performance, such as audit completion rate, lead conversion rate, and consultation booking rate. This would help validate whether the product is functioning effectively as a lead-generation tool for Credex.

Finally, I would improve the UI polish and mobile responsiveness further to make the experience feel closer to a production SaaS product.

---

## 4. How I used AI tools during development

I used multiple AI tools throughout the project, mainly ChatGPT and Gemini. I used ChatGPT primarily for debugging support, architectural brainstorming, improving UI copy, and reviewing edge cases in the audit engine logic. Gemini was integrated directly into the application to generate personalized audit summaries for users.

I intentionally avoided relying on AI for the actual pricing calculations or recommendation engine because I did not trust LLMs to consistently produce financially accurate outputs. Instead, I implemented deterministic rule-based calculations using verified pricing data from official vendor pricing pages.

One example where AI was incorrect occurred during the audit scoring system implementation. An AI-generated suggestion recommended calculating efficiency scores purely from raw savings totals, which produced unrealistic grades for small companies with low spending. For example, saving $150 on a $200 monthly spend was treated similarly to saving $150 on a $5000 spend. I recognized that the scoring needed to be percentage-based rather than absolute-value based.

I corrected the logic by calculating savings as a percentage of total spend before assigning efficiency grades. That produced much more realistic scoring behavior and aligned better with how finance teams evaluate cost efficiency.

This experience reinforced that AI works best as a development assistant, not as an unquestioned source of business logic.

---

## 5. Self-rating

### Discipline — 8/10
I maintained steady development progress across multiple days, documented decisions carefully, and completed all core MVP features under a tight timeline.

### Code Quality — 7/10
The codebase is modular, readable, and functional, though there are still opportunities to improve abstraction and reduce some duplicated logic in the audit engine.

### Design Sense — 8/10
I focused heavily on visual polish and creating a landing page experience that feels modern, premium, and shareable rather than looking like a typical engineering assignment.

### Problem Solving — 8/10
I handled multiple backend integration issues, pricing edge cases, and recommendation logic bugs by testing hypotheses systematically and validating results carefully.

### Entrepreneurial Thinking — 7/10
I treated the project as a real lead-generation SaaS product instead of just a coding exercise, especially when designing the audit flow, sharing mechanism, and lead capture experience.