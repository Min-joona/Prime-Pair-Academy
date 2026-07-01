const mongoose = require('mongoose');

// A few lightweight content models grouped in one file for clarity.

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    readMinutes: { type: Number, default: 4 },
    summary: String,
    body: String, // markdown-ish text
    tags: [String],
  },
  { timestamps: true }
);

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    level: { type: String, default: 'Beginner' },
    xpReward: { type: Number, default: 20 },
    questions: [
      {
        prompt: String,
        options: [String],
        answer: Number, // index of correct option
        explanation: String,
      },
    ],
  },
  { timestamps: true }
);

const flashcardDeckSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    cards: [{ front: String, back: String }],
  },
  { timestamps: true }
);

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    youtubeId: { type: String, required: true },
    duration: String,
    description: String,
  },
  { timestamps: true }
);

const scholarshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    provider: String,
    amount: String,
    level: String, // High School, Undergraduate, Graduate
    country: String,
    deadline: Date,
    exam: String, // SAT / IELTS / TOEFL / DET / none
    tags: [String],
    link: String,
    description: String,
  },
  { timestamps: true }
);

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    org: String,
    type: { type: String, enum: ['Internship', 'Club', 'Program', 'Competition', 'Exam Prep'] },
    location: String,
    remote: { type: Boolean, default: false },
    deadline: Date,
    description: String,
    link: String,
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    author: String,
    avatar: String,
    subject: String,
    title: { type: String, required: true },
    body: String,
    likes: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Matric-style practice exams (Ethiopian Grade 9–12), with answers + explanations.
const examSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true, index: true },
    grade: { type: String, default: 'Grade 12' }, // Grade 9/10/11/12
    stream: { type: String, default: 'General' }, // Natural / Social / General
    durationMin: { type: Number, default: 40 },
    questions: [
      {
        prompt: String,
        options: [String],
        answer: Number, // index of correct option
        explanation: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = {
  Exam: mongoose.models.PPExam || mongoose.model('PPExam', examSchema),
  Note: mongoose.models.Note || mongoose.model('Note', noteSchema),
  Quiz: mongoose.models.Quiz || mongoose.model('Quiz', quizSchema),
  FlashcardDeck: mongoose.models.FlashcardDeck || mongoose.model('FlashcardDeck', flashcardDeckSchema),
  Video: mongoose.models.Video || mongoose.model('Video', videoSchema),
  Scholarship: mongoose.models.Scholarship || mongoose.model('Scholarship', scholarshipSchema),
  Opportunity: mongoose.models.Opportunity || mongoose.model('Opportunity', opportunitySchema),
  Post: mongoose.models.Post || mongoose.model('Post', postSchema),
};
