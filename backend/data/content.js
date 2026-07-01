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
  {
    title: 'Trigonometric Ratios',
    subject: 'Math', level: 'Intermediate', readMinutes: 5,
    summary: 'SOH-CAH-TOA and the special angles you must memorise.',
    body: `For a right triangle: **sin = Opposite/Hypotenuse**, **cos = Adjacent/Hypotenuse**, **tan = Opposite/Adjacent** (remember **SOH-CAH-TOA**).

Special values to know by heart:
- sin 30° = 1/2, cos 30° = √3/2
- sin 45° = cos 45° = √2/2
- sin 60° = √3/2, cos 60° = 1/2

Identity: **sin²θ + cos²θ = 1**.`,
    tags: ['trigonometry', 'grade-11'],
  },
  {
    title: 'Ohm’s Law & Electric Circuits',
    subject: 'Physics', level: 'Intermediate', readMinutes: 4,
    summary: 'V = IR and how resistors combine.',
    body: `**Ohm's law: V = I × R** — voltage equals current times resistance.

- **Series** resistors add: R = R₁ + R₂ + …
- **Parallel** resistors: 1/R = 1/R₁ + 1/R₂ + …

Power dissipated: **P = VI = I²R**.`,
    tags: ['electricity', 'grade-10'],
  },
  {
    title: 'The Mole Concept',
    subject: 'Chemistry', level: 'Intermediate', readMinutes: 5,
    summary: 'Avogadro’s number and converting grams ↔ moles.',
    body: `One **mole** = **6.022 × 10²³** particles (Avogadro's number).

- moles = mass ÷ molar mass
- mass = moles × molar mass

Example: 36 g of water (molar mass 18 g/mol) = 36/18 = **2 moles**.`,
    tags: ['stoichiometry', 'grade-11'],
  },
  {
    title: 'Photosynthesis',
    subject: 'Biology', level: 'Beginner', readMinutes: 4,
    summary: 'How plants turn light into food.',
    body: `Plants make glucose from carbon dioxide and water using light energy in the chloroplasts:

**6CO₂ + 6H₂O → (light) → C₆H₁₂O₆ + 6O₂**

- Happens in two stages: light reactions (in the thylakoid) and the Calvin cycle (in the stroma).
- Chlorophyll captures the light energy.`,
    tags: ['plants', 'grade-9'],
  },
  {
    title: 'Demand, Supply & Elasticity',
    subject: 'Economics', level: 'Intermediate', readMinutes: 5,
    summary: 'Why equilibrium moves and what elasticity measures.',
    body: `Price settles where **demand meets supply** (equilibrium).

**Price elasticity of demand** = %ΔQuantity ÷ %ΔPrice.
- Elastic (>1): quantity reacts a lot to price (luxuries).
- Inelastic (<1): quantity barely changes (necessities).`,
    tags: ['microeconomics', 'grade-11'],
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

// Original matric-style practice exams (Ethiopian Grade 9–12) with answers + explanations.
const exams = [
  {
    title: 'Mathematics — Matric Practice (Set A)', subject: 'Math', grade: 'Grade 12', stream: 'Natural', durationMin: 40,
    questions: [
      { prompt: 'If f(x) = 2x² − 3x + 1, what is f(2)?', options: ['1', '3', '5', '7'], answer: 1, explanation: '2(4) − 3(2) + 1 = 8 − 6 + 1 = 3.' },
      { prompt: 'The roots of x² − 5x + 6 = 0 are:', options: ['2 and 3', '−2 and −3', '1 and 6', '−1 and −6'], answer: 0, explanation: '(x−2)(x−3)=0 → x = 2 or 3.' },
      { prompt: 'What is log₁₀ 1000?', options: ['2', '3', '10', '100'], answer: 1, explanation: '10³ = 1000, so log = 3.' },
      { prompt: 'The value of sin 30° + cos 60° is:', options: ['0', '1/2', '1', '√3'], answer: 2, explanation: '1/2 + 1/2 = 1.' },
      { prompt: 'The derivative of x³ is:', options: ['x²', '3x²', '3x', 'x⁴/4'], answer: 1, explanation: 'd/dx xⁿ = n·xⁿ⁻¹ → 3x².' },
    ],
  },
  {
    title: 'Physics — Matric Practice (Set A)', subject: 'Physics', grade: 'Grade 12', stream: 'Natural', durationMin: 40,
    questions: [
      { prompt: 'The SI unit of force is the:', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2, explanation: 'Force is measured in newtons (N).' },
      { prompt: 'A car travels 100 m in 5 s. Its average speed is:', options: ['20 m/s', '25 m/s', '500 m/s', '95 m/s'], answer: 0, explanation: 'speed = distance/time = 100/5 = 20 m/s.' },
      { prompt: 'Using V = IR, if V = 12 V and R = 4 Ω, then I =', options: ['3 A', '48 A', '8 A', '16 A'], answer: 0, explanation: 'I = V/R = 12/4 = 3 A.' },
      { prompt: 'Which quantity is a vector?', options: ['Mass', 'Speed', 'Velocity', 'Temperature'], answer: 2, explanation: 'Velocity has magnitude and direction.' },
      { prompt: 'The acceleration due to gravity on Earth is about:', options: ['1.8 m/s²', '9.8 m/s²', '98 m/s²', '3 × 10⁸ m/s²'], answer: 1, explanation: 'g ≈ 9.8 m/s².' },
    ],
  },
  {
    title: 'Chemistry — Matric Practice (Set A)', subject: 'Chemistry', grade: 'Grade 12', stream: 'Natural', durationMin: 40,
    questions: [
      { prompt: 'The atomic number of an element equals its number of:', options: ['Neutrons', 'Protons', 'Electrons + neutrons', 'Isotopes'], answer: 1, explanation: 'Atomic number = number of protons.' },
      { prompt: 'One mole of any substance contains how many particles?', options: ['6.022 × 10²³', '3.0 × 10⁸', '1.6 × 10⁻¹⁹', '9.8'], answer: 0, explanation: "Avogadro's number is 6.022 × 10²³." },
      { prompt: 'The pH of a neutral solution at 25°C is:', options: ['0', '7', '14', '1'], answer: 1, explanation: 'Neutral pH = 7.' },
      { prompt: 'Which is a noble gas?', options: ['Oxygen', 'Chlorine', 'Argon', 'Sodium'], answer: 2, explanation: 'Argon is in Group 18 (noble gases).' },
      { prompt: 'The molar mass of water (H₂O) is about:', options: ['10 g/mol', '18 g/mol', '32 g/mol', '44 g/mol'], answer: 1, explanation: '2(1) + 16 = 18 g/mol.' },
    ],
  },
  {
    title: 'Biology — Matric Practice (Set A)', subject: 'Biology', grade: 'Grade 12', stream: 'Natural', durationMin: 40,
    questions: [
      { prompt: 'The basic unit of life is the:', options: ['Atom', 'Cell', 'Tissue', 'Organ'], answer: 1, explanation: 'The cell is the basic unit of life.' },
      { prompt: 'Photosynthesis mainly takes place in the:', options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'], answer: 2, explanation: 'Chloroplasts carry out photosynthesis.' },
      { prompt: 'DNA is made of units called:', options: ['Amino acids', 'Nucleotides', 'Fatty acids', 'Monosaccharides'], answer: 1, explanation: 'Nucleotides are the building blocks of DNA.' },
      { prompt: 'Which blood cells fight infection?', options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], answer: 1, explanation: 'White blood cells defend against pathogens.' },
      { prompt: 'The process by which cells divide for growth is:', options: ['Meiosis', 'Mitosis', 'Fertilisation', 'Digestion'], answer: 1, explanation: 'Mitosis produces identical cells for growth.' },
    ],
  },
  {
    title: 'English — Matric Practice (Set A)', subject: 'English', grade: 'Grade 12', stream: 'General', durationMin: 40,
    questions: [
      { prompt: 'Choose the correct sentence:', options: ['He don’t like tea.', "He doesn't likes tea.", "He doesn't like tea.", 'He not like tea.'], answer: 2, explanation: "Third person: doesn't + base verb." },
      { prompt: 'The synonym of “rapid” is:', options: ['Slow', 'Quick', 'Heavy', 'Late'], answer: 1, explanation: 'Rapid means quick/fast.' },
      { prompt: 'Choose the correct passive form of “She wrote a letter.”', options: ['A letter is written by her.', 'A letter was written by her.', 'A letter has wrote by her.', 'A letter writes by her.'], answer: 1, explanation: 'Past simple passive: was + past participle.' },
      { prompt: 'Which word is an adverb?', options: ['Happy', 'Happily', 'Happiness', 'Happier'], answer: 1, explanation: 'Adverbs often end in -ly.' },
      { prompt: 'Identify the correctly punctuated sentence:', options: ['Its raining outside.', 'It’s raining outside.', 'Its’ raining outside.', 'It raining outside.'], answer: 1, explanation: "It's = it is." },
    ],
  },
  {
    title: 'Economics — Matric Practice (Set A)', subject: 'Economics', grade: 'Grade 12', stream: 'Social', durationMin: 40,
    questions: [
      { prompt: 'The study of individual markets and firms is called:', options: ['Macroeconomics', 'Microeconomics', 'Econometrics', 'Statistics'], answer: 1, explanation: 'Microeconomics studies individual units.' },
      { prompt: 'When demand rises and supply stays fixed, price usually:', options: ['Falls', 'Rises', 'Stays the same', 'Becomes zero'], answer: 1, explanation: 'Higher demand with fixed supply pushes price up.' },
      { prompt: 'GDP stands for:', options: ['Gross Domestic Product', 'General Demand Price', 'Government Debt Plan', 'Global Development Program'], answer: 0, explanation: 'GDP = Gross Domestic Product.' },
      { prompt: 'Money that is widely accepted for goods and services is a:', options: ['Barter', 'Medium of exchange', 'Subsidy', 'Tariff'], answer: 1, explanation: 'A key function of money is as a medium of exchange.' },
      { prompt: 'A tax placed on imported goods is a:', options: ['Subsidy', 'Tariff', 'Quota', 'Rebate'], answer: 1, explanation: 'A tariff is a tax on imports.' },
    ],
  },
];

module.exports = { notes, quizzes, flashcards, videos, scholarships, opportunities, posts, exams, users };
