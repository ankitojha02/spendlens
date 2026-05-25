# TESTS.md

# SpendLens Test Coverage

SpendLens includes automated tests focused on validating the audit engine logic and savings calculation behavior.

The tests ensure that core recommendation rules remain predictable, explainable, and financially defensible.

---

# Test Runner

Tests are executed using:

```bash
npm test
```

Inside backend directory:

```bash
cd backend
npm test
```

---

# Test File

```txt
backend/tests/auditEngine.test.js
```

---

# Test Coverage

## 1. ChatGPT Team Plan Downgrade

### Filename
```txt
backend/tests/auditEngine.test.js
```

### What it covers
Validates that small teams using ChatGPT Team plans are recommended to downgrade to ChatGPT Plus when appropriate.

### Expected behavior
- Team of 2 users
- Spend = $120/month
- Recommended cost = $40/month
- Savings = $80/month

---

## 2. Cursor Team → Cursor Pro Recommendation

### Filename
```txt
backend/tests/auditEngine.test.js
```

### What it covers
Ensures that small engineering teams using Cursor Team are recommended to use Cursor Pro instead.

### Expected behavior
- Team of 2 users
- Spend = $80/month
- Optimized cost = $40/month
- Savings = $40/month

---

## 3. Enterprise Plan Overspend Detection

### Filename
```txt
backend/tests/auditEngine.test.js
```

### What it covers
Checks whether enterprise plans for small teams are downgraded to more suitable plans.

### Expected behavior
- 5 seats on ChatGPT Enterprise
- Spend = $300/month
- Recommended Team plan cost = $150/month
- Savings = $150/month

---

## 4. API Usage Optimization

### Filename
```txt
backend/tests/auditEngine.test.js
```

### What it covers
Validates API spend reduction logic for expensive direct API usage.

### Expected behavior
- API spend = $1000/month
- Optimized spend after caching/limits = $700/month
- Savings = 30%

---

## 5. Efficiency Score Calculation

### Filename
```txt
backend/tests/auditEngine.test.js
```

### What it covers
Ensures that high overspending audits receive lower efficiency grades.

### Expected behavior
- Current cost = $400
- Savings = $300
- Savings percentage = 75%
- Efficiency score = D

---

# Why These Tests Matter

The audit engine is the core business logic of SpendLens.

Incorrect savings calculations would:
- reduce trust
- generate misleading recommendations
- create inaccurate financial insights

These tests ensure that recommendation logic remains:
- deterministic
- explainable
- financially reasonable
- stable during future changes

---

# CI Integration

GitHub Actions automatically runs all tests on every push to the `main` branch.

Workflow file:

```txt
.github/workflows/ci.yml
```

This prevents broken audit logic from being merged into production.

---

# Future Testing Improvements

If development continued beyond the MVP phase, I would add:

- API integration tests
- Frontend component tests
- End-to-end Playwright tests
- Database validation tests
- Load testing for audit generation
- AI summary fallback testing
- Abuse protection testing

---