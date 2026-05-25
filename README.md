# SpendLens — AI Spend Audit Platform

SpendLens is a free AI spend auditing platform built for startup founders and engineering teams to analyze AI tooling costs, identify overspending, and uncover optimization opportunities across tools like ChatGPT, Claude, Cursor, Gemini, GitHub Copilot, and more.

The platform generates instant AI spend reports, surfaces actionable savings recommendations, provides AI-generated strategic summaries, and creates shareable public audit reports designed for viral distribution and lead generation.

---

# Live Demo

Frontend:
https://spendlens-delta.vercel.app

Backend API:
https://spendlens-frdn.onrender.com




# Features

## AI Spend Audit Engine
- Multi-tool AI subscription analysis
- Team-size aware recommendations
- Enterprise overpayment detection
- API usage optimization suggestions
- Coding workflow optimization recommendations
- Savings calculations with annual projections

## Supported Tools
- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini
- Anthropic API
- OpenAI API
- v0

## AI Generated Strategic Summary
- Personalized audit insights
- Generated using Gemini API
- Graceful fallback handling during API failures

## Shareable Public Audit Reports
- Unique public audit URLs
- Anonymous public sharing
- Designed for social sharing and screenshots

## Lead Capture System
- Email capture after value delivery
- Supabase storage
- Transactional email confirmation
- Honeypot-based abuse protection

## Engineering
- Next.js App Router
- TypeScript frontend
- Node.js + Express backend
- Supabase database
- CI workflow using GitHub Actions
- Automated audit engine tests

---

# Tech Stack

## Frontend
- Next.js 15
- React
- TailwindCSS
- TypeScript

## Backend
- Node.js
- Express.js

## Database
- Supabase

## AI
- Gemini API

## Deployment
- Vercel (Frontend)
- Render (Backend)

## CI/CD
- GitHub Actions

---
# Quick Start

## Clone Repository

```bash
git clone https://github.com/ankitojha02/spendlens.git
cd spendlens
```

---

# Frontend Setup

Install frontend dependencies:

```bash
npm install
```

Run frontend development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# Backend Setup

Move into backend folder:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Environment Variables

## Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=your_backend_url
```

---

## Backend `.env`

```env
GEMINI_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
RESEND_API_KEY=your_key
```

---

# Running Tests

Inside backend folder:

```bash
npm test
```

---

# CI Workflow

GitHub Actions automatically runs:
- Audit engine tests
- CI validation

Workflow file:

```txt
.github/workflows/ci.yml
```

---

# Project Structure

```txt
spendlens/
│
├── app/
├── backend/
├── components/
├── public/
├── .github/workflows/
│
├── README.md
├── ARCHITECTURE.md
├── DEVLOG.md
├── REFLECTION.md
├── TESTS.md
├── PRICING_DATA.md
├── PROMPTS.md
├── GTM.md
├── ECONOMICS.md
├── USER_INTERVIEWS.md
├── LANDING_COPY.md
└── METRICS.md
```

---

# Decisions & Trade-offs

## 1. Hardcoded audit logic instead of AI-generated calculations

The audit engine uses deterministic financial rules instead of LLM-generated reasoning to ensure recommendations remain explainable, predictable, and finance-defensible.

---

## 2. Next.js App Router over standard React SPA

Next.js simplified routing, deployment, metadata handling, and public audit pages while improving SEO and overall performance.

---

## 3. Gemini API instead of Anthropic

Gemini was selected because of faster setup, easier free-tier access, and strong response quality during rapid MVP development.

---

## 4. Supabase instead of self-hosted PostgreSQL

Supabase reduced backend complexity and accelerated development by handling storage and database operations with minimal infrastructure overhead.

---

## 5. Honeypot protection instead of CAPTCHA

A honeypot-based abuse protection system reduced user friction while still blocking most automated spam submissions during the MVP phase.

---

# Future Improvements

- Dynamic Open Graph image generation
- PDF report export
- Benchmark analytics
- Referral system
- Spend tracking over time
- Team benchmarking
- Admin analytics dashboard

---

# Author

Ankit Kumar Ojha

GitHub:
https://github.com/ankitojha02

LinkedIn:
https://www.linkedin.com/in/ankit-ojha-763387360/

---
