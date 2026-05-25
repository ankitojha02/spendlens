# METRICS.md

# SpendLens Metrics Strategy

# North Star Metric

## Qualified Audit Completions

Definition:

```txt
Number of completed audits that generate meaningful savings opportunities and capture a valid lead.
```

This is the most important metric because SpendLens is fundamentally a lead-generation engine, not a traditional SaaS product.

Pageviews or signups alone do not matter if users:
- do not complete audits
- do not trust recommendations
- do not convert into potential Credex customers

A completed audit indicates:
- the user understood the value proposition
- the audit experience was frictionless
- the recommendations felt credible enough to continue

This metric best represents actual business value creation.

---

# Input Metrics That Drive The North Star

## 1. Audit Completion Rate

Definition:

```txt
Completed audits ÷ Landing page visitors
```

Why it matters:
- measures landing page clarity
- measures onboarding friction
- shows whether users trust the tool enough to input financial data

A low completion rate would suggest:
- poor messaging
- confusing UI
- lack of trust

---

## 2. Lead Capture Rate

Definition:

```txt
Email captures ÷ Completed audits
```

Why it matters:
- measures perceived value of the audit
- indicates recommendation trustworthiness
- directly impacts downstream revenue potential

If users receive value but refuse to save reports, the product likely lacks credibility or urgency.

---

## 3. High-Savings Audit Percentage

Definition:

```txt
Audits with >$500/month savings ÷ Total audits
```

Why it matters:
- high-savings users are the best Credex sales opportunities
- measures targeting quality
- impacts consultation conversion potential

If this percentage is too low, traffic quality may be poor or audit logic may be too conservative.

---

# What I Would Instrument First

## 1. Funnel Tracking

Track:
- landing page visits
- audit started
- audit completed
- lead saved
- consultation CTA clicked

This would identify where users drop off.

---

## 2. Recommendation Interaction Tracking

Track:
- which recommendations users expand
- which tools appear most frequently
- most common optimization paths

This helps improve audit quality over time.

---

## 3. Share Tracking

Track:
- copied public audit links
- social shares
- referral traffic from shared reports

Because virality is important for growth.

---

# Pivot Trigger

The number that would trigger a serious product rethink:

```txt
<10% audit completion rate after 1,000+ visitors
```

Why:
- it likely means users do not trust the concept
- onboarding friction is too high
- value proposition is weak
- recommendations may not feel believable

A second major warning sign:

```txt
<15% lead capture rate from completed audits
```

That would suggest users are curious enough to try the tool, but not impressed enough to continue engagement.

---

# Final Thoughts

The most important thing for SpendLens is not raw traffic.

The product succeeds only if users:
- trust the financial recommendations
- feel immediate value
- believe the savings are realistic
- voluntarily share their audit results

Because of that, the metrics strategy prioritizes:
- trust
- completion
- recommendation quality
- lead intent

over vanity metrics like pageviews or DAU.

---