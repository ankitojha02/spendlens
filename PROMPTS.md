# PROMPTS.md

# SpendLens AI Prompt Design

SpendLens uses Gemini API to generate personalized AI spend optimization summaries after the audit engine completes deterministic savings calculations.

The AI is intentionally limited to summarization only.

Financial calculations, recommendations, and optimization logic are rule-based to ensure recommendations remain explainable and financially defensible.

---

# Primary Prompt

```txt
You are an AI infrastructure cost optimization consultant.

Generate a concise 80-120 word audit summary.

Audit Data:
- Current Monthly Cost: $${currentCost}
- Potential Monthly Savings: $${savings}
- Annual Waste: $${annualWaste}
- Efficiency Score: ${efficiencyScore}

Rules:
- Be practical and finance-oriented.
- Mention optimization opportunities.
- Mention if stack is already efficient.
- Sound like a SaaS cost consultant.
- No bullet points.
```

---

# Why I Designed The Prompt This Way

The goal was to make the generated summaries sound:
- financially practical
- founder-friendly
- concise
- trustworthy
- operational rather than overly “AI-generated”

I intentionally avoided:
- hype language
- excessive technical jargon
- aggressive optimization claims
- hallucinated recommendations

The summary should feel like feedback from a SaaS procurement consultant rather than a chatbot.

---

# Why AI Is Only Used For Summaries

The assignment specifically emphasized that audit calculations should NOT rely on AI reasoning.

Because of that:
- all savings calculations are deterministic
- all pricing logic is hardcoded
- all downgrade recommendations are rule-based

AI is only responsible for:
- summarizing results
- explaining optimization opportunities
- improving readability

This keeps the financial logic explainable and auditable.

---

# Model Used

```txt
gemini-2.5-flash
```

Reasoning:
- fast response times
- affordable/free-tier friendly
- lightweight integration
- sufficient quality for short summaries

---

# Failure Handling Strategy

AI failures should never break audit generation.

If Gemini API fails:
- the application logs the error
- a fallback summary is returned
- the user still receives a complete audit

Fallback summary:

```txt
Your current AI tooling setup appears relatively cost efficient for your current team size and workflow patterns. While no major overspending risks were detected, continuing to monitor usage and vendor pricing changes may unlock future optimization opportunities.
```

This ensures:
- graceful degradation
- reliable UX
- zero audit blocking due to AI outages

---

# What I Tried That Did Not Work

## 1. Longer Prompts

I initially experimented with:
- multi-paragraph prompts
- detailed optimization explanations
- tool-by-tool reasoning

Problems:
- summaries became too verbose
- responses sounded robotic
- outputs exceeded desired UI length

---

## 2. Aggressive Cost-Saving Tone

I tested prompts encouraging:
- “maximize savings”
- “identify waste aggressively”

Problems:
- recommendations became exaggerated
- AI occasionally overstated inefficiency
- summaries felt less trustworthy

This conflicted with the assignment requirement that the audit logic remain financially defensible.

---

## 3. Allowing AI To Generate Recommendations

I briefly experimented with letting Gemini suggest:
- plan downgrades
- tool replacements
- optimization percentages

Problems:
- inconsistent outputs
- hallucinated pricing
- recommendations without financial reasoning

I removed this approach completely and moved all calculations into deterministic backend rules.

---

# Final AI Philosophy

The final architecture intentionally separates:

## Rule-Based Logic
Responsible for:
- pricing
- savings calculations
- audit recommendations
- efficiency grading

## AI Layer
Responsible for:
- personalization
- readability
- concise strategic explanation

This separation improved:
- reliability
- explainability
- consistency
- financial trustworthiness

---

# Future Improvements

If SpendLens evolved beyond MVP stage, I would improve the AI layer by adding:

- benchmark-aware summaries
- team-size-specific optimization advice
- startup-stage personalization
- token usage trend analysis
- vendor lock-in risk analysis
- retrieval-augmented pricing context

I would still keep financial calculations deterministic rather than AI-generated.

---