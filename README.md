# Prime Pair Academy

A gamified learning platform for Ethiopian high-school students, combining structured academic depth with a playful, motivating experience. Guided by two original hand-drawn SVG mascots — **Ghefi** the turtle and **Lethe** the snake — students build mastery through notes, quizzes, and exams, then launch further with curated scholarships and opportunities.

**Live demo:** [prime-pair-academy.vercel.app](https://prime-pair-academy.vercel.app)

## Overview

**Learn (Ghefi's domain)**

- **Short notes** — curriculum-aligned lessons with an in-app reader
- **Interactive quizzes** — instant feedback, explanations, and XP rewards
- **Matric exams** — Grade 9–12 practice exams across six subjects, with answers and explanations revealed on submission
- **Flashcards** — 3D flip decks for memorization
- **Explain videos** — embedded video lessons
- **Community & leaderboard** — discussion posts and an XP ranking

**Launch (Lethe's domain)**

- **Scholarships** — curated international funding opportunities with deadlines
- **Opportunities** — internships, programs, clubs, and exam-prep tracks

**Gamification** — XP, levels, streaks, and badges persist across the platform.

## Architecture

```
prime-pair-academy/
├── backend/          Express REST API
│   ├── models/       User, Note, Quiz, Exam, FlashcardDeck, Video,
│   │                 Scholarship, Opportunity, Post
│   └── routes/       /api/content · /api/auth
└── frontend/         React app (Vite)
    └── src/
        ├── components/mascots/   Hand-coded SVG mascots
        └── pages/                Landing, Dashboard, Notes, Quizzes,
                                  Exams, Flashcards, Videos, Community…
```

## Tech Stack

| Layer      | Technology                                       |
| ---------- | ------------------------------------------------ |
| Frontend   | React 18, Vite, Tailwind CSS, Framer Motion      |
| Backend    | Node.js, Express, Mongoose                       |
| Database   | MongoDB Atlas                                    |
| Security   | Helmet, rate limiting, input sanitization, JWT   |

## Getting Started

**Prerequisites:** Node.js 18+ and a MongoDB connection string.

```bash
# API
cd backend
npm install
cp .env.example .env   # configure environment
npm run seed           # optional: load curriculum content
npm run dev

# App
cd frontend
npm install
npm run dev
```

Environment variables are documented in [`backend/.env.example`](backend/.env.example) and [`frontend/.env.example`](frontend/.env.example).

## Author

**Amar Hassen Mohammednur** — [github.com/Min-joona](https://github.com/Min-joona)

## License

MIT
