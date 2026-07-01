// Rich seed content for Prime Pair Academy.
// Ghefi's domain: notes, quizzes, flashcards, videos, community, leaderboard.
// Lethe's domain: scholarships, opportunities, exam prep.

const notes = [
  {
    title: 'Linear Equations in One Variable',
    subject: 'Math', level: 'Beginner', readMinutes: 4,
    summary: 'Solve ax + b = c step by step and check your answer.',
    body: `A linear equation has the form **ax + b = c**, where the variable appears only to the first power.

**Steps to solve:**
1. Move constants to one side (subtract b from both sides).
2. Isolate x (divide both sides by a).
3. Check by substituting back.

**Example:** 3x + 5 = 20 → 3x = 15 → x = 5. Check: 3(5)+5 = 20 ✓`,
    tags: ['algebra', 'equations'],
  },
  {
    title: 'Quadratic Formula & the Discriminant',
    subject: 'Math', level: 'Intermediate', readMinutes: 6,
    summary: 'Use x = (-b ± √(b²-4ac)) / 2a and read the discriminant.',
    body: `For **ax² + bx + c = 0**, the solutions are:

**x = ( -b ± √(b² − 4ac) ) / 2a**

The **discriminant** D = b² − 4ac tells you how many real roots exist:
- D > 0 → two distinct real roots
- D = 0 → one repeated real root
- D < 0 → no real roots (two complex roots)`,
    tags: ['algebra', 'quadratics'],
  },
  {
    title: "Newton's Three Laws of Motion",
    subject: 'Physics', level: 'Beginner', readMinutes: 5,
    summary: 'Inertia, F = ma, and action–reaction in plain language.',
    body: `**1st law (Inertia):** an object stays at rest or in uniform motion unless a net force acts on it.

**2nd law:** **F = ma** — force equals mass times acceleration.

**3rd law:** for every action there is an equal and opposite reaction.`,
    tags: ['mechanics', 'forces'],
  },
  {
    title: 'The Cell: Structure & Function',
    subject: 'Biology', level: 'Beginner', readMinutes: 6,
    summary: 'Organelles and what each one does.',
    body: `The **cell** is the basic unit of life.

- **Nucleus** — stores DNA, controls activities
- **Mitochondria** — the powerhouse; makes ATP
- **Ribosomes** — build proteins
- **Cell membrane** — controls what enters/leaves

Plant cells add a **cell wall** and **chloroplasts** for photosynthesis.`,
    tags: ['cells', 'organelles'],
  },
  {
    title: 'The Periodic Table Basics',
    subject: 'Chemistry', level: 'Beginner', readMinutes: 5,
    summary: 'Groups, periods, and reading an element box.',
    body: `Elements are arranged by **atomic number** (number of protons).

- **Periods** = horizontal rows
- **Groups** = vertical columns (similar properties)
- Group 1: alkali metals · Group 17: halogens · Group 18: noble gases

An element box shows the symbol, atomic number, and atomic mass.`,
    tags: ['elements', 'atoms'],
  },
  {
    title: 'Reading Comprehension Strategies',
    subject: 'English', level: 'Intermediate', readMinutes: 5,
    summary: 'Skim, scan, and find the main idea fast.',
    body: `**Skim** first for the gist, then **scan** for specific details.

To find the **main idea**, ask: what is the author mostly saying? The topic sentence is often the first or last sentence of a paragraph.

For SAT/IELTS reading: read the questions before re-reading the passage, and eliminate wrong choices.`,
    tags: ['reading', 'exam'],
  },
  {
    title: 'Supply & Demand',
    subject: 'Economics', level: 'Beginner', readMinutes: 5,
    summary: 'Why prices move where the curves cross.',
    body: `**Demand** falls as price rises; **supply** rises as price rises.

The **equilibrium price** is where the two curves intersect — quantity supplied equals quantity demanded.

A shift in either curve (income, tastes, costs, technology) moves the equilibrium.`,
    tags: ['micro', 'markets'],
  },
  {
    title: 'SAT Math: Plugging In Answers',
    subject: 'SAT', level: 'Intermediate', readMinutes: 4,
    summary: 'A time-saving trick for multiple-choice algebra.',
    body: `When a question asks "what is x?", you can **test the answer choices** instead of solving.

Start with choice **C** (the middle value) — if it's too big or small, you know which direction to move. This often beats algebra under time pressure.`,
    tags: ['sat', 'strategy'],
  },
];

const quizzes = [
  {
    title: 'Algebra Warm-up', subject: 'Math', level: 'Beginner', xpReward: 20,
    questions: [
      { prompt: 'Solve: 2x + 6 = 14', options: ['x = 2', 'x = 4', 'x = 6', 'x = 10'], answer: 1, explanation: '2x = 8, so x = 4.' },
      { prompt: 'What is the discriminant of x² + 2x + 1?', options: ['0', '1', '2', '4'], answer: 0, explanation: 'b²−4ac = 4−4 = 0 → one repeated root.' },
      { prompt: 'Simplify: 3(x + 2) − 2x', options: ['x + 6', 'x + 2', '5x + 6', 'x − 6'], answer: 0, explanation: '3x + 6 − 2x = x + 6.' },
    ],
  },
  {
    title: 'Forces & Motion', subject: 'Physics', level: 'Beginner', xpReward: 20,
    questions: [
      { prompt: "Newton's 2nd law is:", options: ['F = mv', 'F = ma', 'E = mc²', 'p = mv'], answer: 1, explanation: 'Force = mass × acceleration.' },
      { prompt: 'A 2 kg object accelerates at 3 m/s². Net force?', options: ['1.5 N', '5 N', '6 N', '9 N'], answer: 2, explanation: 'F = ma = 2 × 3 = 6 N.' },
      { prompt: 'Which law explains recoil of a gun?', options: ['1st', '2nd', '3rd', 'None'], answer: 2, explanation: 'Action–reaction: the 3rd law.' },
    ],
  },
  {
    title: 'Cell Biology Basics', subject: 'Biology', level: 'Beginner', xpReward: 20,
    questions: [
      { prompt: 'Which organelle makes ATP?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell wall'], answer: 2, explanation: 'Mitochondria are the powerhouse of the cell.' },
      { prompt: 'Where is DNA mostly stored?', options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Vacuole'], answer: 1, explanation: 'The nucleus stores genetic material.' },
      { prompt: 'Chloroplasts are found in:', options: ['Animal cells', 'Plant cells', 'Both', 'Neither'], answer: 1, explanation: 'Only plant (and some protist) cells have chloroplasts.' },
    ],
  },
  {
    title: 'SAT Reading Sprint', subject: 'SAT', level: 'Intermediate', xpReward: 25,
    questions: [
      { prompt: 'The main idea of a paragraph is usually in the…', options: ['Footnote', 'Topic sentence', 'Last word', 'Title only'], answer: 1, explanation: 'The topic sentence carries the main idea.' },
      { prompt: 'Best first step on a timed reading section?', options: ['Read every line twice', 'Skim for the gist', 'Answer randomly', 'Skip the passage'], answer: 1, explanation: 'Skim first, then scan for details.' },
    ],
  },
];

const flashcards = [
  {
    title: 'Essential Math Formulas', subject: 'Math',
    cards: [
      { front: 'Area of a circle', back: 'πr²' },
      { front: 'Pythagorean theorem', back: 'a² + b² = c²' },
      { front: 'Slope of a line', back: '(y₂ − y₁) / (x₂ − x₁)' },
      { front: 'Quadratic formula', back: 'x = (−b ± √(b²−4ac)) / 2a' },
    ],
  },
  {
    title: 'Physics Constants & Units', subject: 'Physics',
    cards: [
      { front: 'Acceleration due to gravity (g)', back: '≈ 9.8 m/s²' },
      { front: 'Speed of light (c)', back: '≈ 3 × 10⁸ m/s' },
      { front: 'Unit of force', back: 'Newton (N) = kg·m/s²' },
      { front: 'Unit of energy', back: 'Joule (J) = N·m' },
    ],
  },
  {
    title: 'SAT Vocabulary Set 1', subject: 'English',
    cards: [
      { front: 'Ubiquitous', back: 'Present everywhere' },
      { front: 'Ephemeral', back: 'Lasting a very short time' },
      { front: 'Pragmatic', back: 'Practical, results-focused' },
      { front: 'Ambivalent', back: 'Having mixed feelings' },
      { front: 'Meticulous', back: 'Very careful and precise' },
    ],
  },
];

const videos = [
  { title: 'Algebra Basics: What Is Algebra?', subject: 'Math', youtubeId: 'NybHckSEQBI', duration: '9:21', description: 'A gentle intro to variables and expressions.' },
  { title: "Newton's Laws of Motion", subject: 'Physics', youtubeId: 'kKKM8Y-u7ds', duration: '6:11', description: 'The three laws explained with examples.' },
  { title: 'Introduction to Cells', subject: 'Biology', youtubeId: 'URUJD5NEXC8', duration: '8:44', description: 'Cell structure and organelles.' },
  { title: 'The Periodic Table Explained', subject: 'Chemistry', youtubeId: '0RRVV4Diomg', duration: '7:52', description: 'How the periodic table is organized.' },
  { title: 'SAT Reading Tips', subject: 'SAT', youtubeId: 'QGiMz7C5s5c', duration: '11:03', description: 'Strategies to raise your reading score.' },
];

const scholarships = [
  { title: 'Mastercard Foundation Scholars Program', provider: 'Mastercard Foundation', amount: 'Full ride', level: 'Undergraduate', country: 'Multiple', deadline: new Date('2026-01-15'), exam: 'None', tags: ['Africa', 'leadership'], link: 'https://mastercardfdn.org/', description: 'Full scholarship for academically talented yet economically disadvantaged students from Africa.' },
  { title: 'MEXT Japanese Government Scholarship', provider: 'Government of Japan', amount: 'Full + stipend', level: 'Undergraduate', country: 'Japan', deadline: new Date('2026-05-30'), exam: 'None', tags: ['fully funded', 'STEM'], link: 'https://www.studyinjapan.go.jp/', description: 'Study in Japan with tuition, travel, and monthly allowance covered.' },
  { title: 'DAAD Scholarships', provider: 'DAAD (Germany)', amount: 'Monthly stipend', level: 'Graduate', country: 'Germany', deadline: new Date('2026-10-31'), exam: 'IELTS', tags: ['Europe', 'research'], link: 'https://www.daad.de/en/', description: 'Funding for international students and researchers in Germany.' },
  { title: 'Chevening Scholarships', provider: 'UK Government', amount: 'Full master’s', level: 'Graduate', country: 'United Kingdom', deadline: new Date('2026-11-05'), exam: 'IELTS', tags: ['leadership', 'fully funded'], link: 'https://www.chevening.org/', description: "The UK government's global scholarship programme for future leaders." },
  { title: 'Yale Young Global Scholars', provider: 'Yale University', amount: 'Need-based aid', level: 'High School', country: 'USA', deadline: new Date('2026-01-10'), exam: 'None', tags: ['summer', 'pre-college'], link: 'https://globalscholars.yale.edu/', description: 'A summer academic enrichment program for outstanding high schoolers.' },
];

const opportunities = [
  { title: 'Google Summer of Code', org: 'Google', type: 'Program', location: 'Remote', remote: true, deadline: new Date('2026-04-02'), description: 'Get paid to contribute to open-source projects with mentorship.', link: 'https://summerofcode.withgoogle.com/' },
  { title: 'Microsoft Learn Student Ambassadors', org: 'Microsoft', type: 'Club', location: 'Global', remote: true, deadline: null, description: 'Join a global community of students who lead and learn tech together.', link: 'https://mvp.microsoft.com/studentambassadors' },
  { title: 'ALX Software Engineering', org: 'ALX Africa', type: 'Program', location: 'Africa / Remote', remote: true, deadline: new Date('2026-03-15'), description: 'A rigorous 12-month software engineering program.', link: 'https://www.alxafrica.com/' },
  { title: 'IELTS Preparation Bootcamp', org: 'Prime Pair Academy', type: 'Exam Prep', location: 'Online', remote: true, deadline: null, description: 'Guided IELTS prep with mock tests and speaking practice.', link: '#' },
  { title: 'SAT Intensive (DET & TOEFL too)', org: 'Prime Pair Academy', type: 'Exam Prep', location: 'Online', remote: true, deadline: null, description: 'Structured prep for SAT, Duolingo English Test, TOEFL, and CSC exams.', link: '#' },
  { title: 'Robotics Club Challenge', org: 'Local STEM Network', type: 'Competition', location: 'Addis Ababa', remote: false, deadline: new Date('2026-06-20'), description: 'Build a robot with your team and compete regionally.', link: '#' },
];

const posts = [
  { author: 'Selam T.', avatar: '🐢', subject: 'Math', title: 'How I finally understood the quadratic formula', body: 'The discriminant note here made it click. Anyone else struggle with this at first?', likes: 42, replies: 8 },
  { author: 'Dawit M.', avatar: '🐍', subject: 'SAT', title: 'Scored 1380 — my study plan', body: 'Two months of daily quizzes + flashcards. Sharing my weekly schedule below.', likes: 71, replies: 15 },
  { author: 'Hanna G.', avatar: '🐢', subject: 'Biology', title: 'Mnemonic for cell organelles', body: '“My Nucleus Really Makes Cells” — Membrane, Nucleus, Ribosomes, Mitochondria, Chloroplast.', likes: 28, replies: 5 },
  { author: 'Yonas K.', avatar: '🐍', subject: 'Opportunities', title: 'Applied to GSoC through the Lethe alerts!', body: 'The opportunity alert saved me — deadline was closer than I thought. Fingers crossed.', likes: 55, replies: 11 },
];

// Leaderboard users (also used for auth demo).
const users = [
  { name: 'Amar Hassen', email: 'amar@primepair.io', password: 'demo123', xp: 640, streak: 21, avatar: '🐢', badges: ['Fast Learner', '7-Day Streak', 'Quiz Master'] },
  { name: 'Selam Tesfaye', email: 'selam@primepair.io', password: 'demo123', xp: 980, streak: 34, avatar: '🐢', badges: ['Scholar', '30-Day Streak'] },
  { name: 'Dawit Mekonnen', email: 'dawit@primepair.io', password: 'demo123', xp: 1240, streak: 45, avatar: '🐍', badges: ['SAT Slayer', 'Top 1%'] },
  { name: 'Hanna Girma', email: 'hanna@primepair.io', password: 'demo123', xp: 720, streak: 18, avatar: '🐢', badges: ['Bookworm'] },
  { name: 'Yonas Kebede', email: 'yonas@primepair.io', password: 'demo123', xp: 540, streak: 12, avatar: '🐍', badges: ['Opportunity Hunter'] },
  { name: 'Meron Alem', email: 'meron@primepair.io', password: 'demo123', xp: 410, streak: 9, avatar: '🐢', badges: ['Rising Star'] },
];

module.exports = { notes, quizzes, flashcards, videos, scholarships, opportunities, posts, users };
