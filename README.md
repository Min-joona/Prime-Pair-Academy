# Prime Pair Academy 🐢🐍

[![MERN](https://img.shields.io/badge/Stack-MERN-brightgreen)](#)
[![Playful](https://img.shields.io/badge/Vibe-Khan%20Academy%20×%20Duolingo-ffd54a)](#)

A gamified learning platform for Eritrean & Ethiopian students — Khan-Academy depth
with Duolingo playfulness. A full rebuild of *Learning-Launchpad* with brand-new UI/UX
and two original mascots.

> Built by **Amar Hassen Mohammednur**.

## 🐢🐍 Meet the Prime Pair

Two native Eritrean creatures, two learning styles — rendered as **hand-coded SVG mascots**:

- **GHEFI** — the *Eritrean Helmeted Turtle* (`Pelomedusa gehafie`). The patient foundation.
  Owns **Short Notes, Quizzes, Flashcards, Explain Videos, Community, Leaderboard**.
- **LETHE** — the *Eritrean Blind Snake* (`Letheobia erythraea`). The strategic speed.
  Owns **Scholarships, Opportunities, Internships, Club Discovery, Exam Prep** (SAT/DET/IELTS/TOEFL/CSC).

The landing page includes the **"Meet the Prime Pair"** branding spread with annotation
callouts pointing to each mascot's signature features.

## ✨ Features

- **Gamification** — XP, levels (100 XP each), streaks, badges, live leaderboard
- **Short Notes** — subject-filtered, in-app reader
- **Interactive Quizzes** — instant feedback, explanations, XP rewards
- **Flashcards** — 3D flip decks
- **Explain Videos** — YouTube embeds (swap in your own later)
- **Community** — posts with likes
- **Scholarships & Opportunities** — Lethe's real, curated listings with deadlines
- Fully **mobile-responsive**, playful Baloo/Nunito type system

## 🧱 Tech Stack

React 18 · Vite · Tailwind CSS · Framer Motion · Node.js · Express · Mongoose · MongoDB · JWT

## 🚀 Getting Started

### Backend
```bash
cd backend && npm install
cp .env.example .env      # set MONGODB_URI + JWT_SECRET
npm run seed              # loads notes, quizzes, decks, videos, scholarships, users…
npm run dev               # http://localhost:5002
```

### Frontend
```bash
cd frontend && npm install
npm run dev               # http://localhost:5173
```

**Login:** `amar@primepair.io` / `demo123`

## ☁️ Deployment
Two Vercel projects: `backend/` (env: `MONGODB_URI`, `JWT_SECRET`, `ALLOWED_ORIGINS`, `VERCEL=1`)
and `frontend/` (env: `VITE_API_URL`). Seed once against Atlas.

## 📄 License
MIT
