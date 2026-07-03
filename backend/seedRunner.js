/** Core seed logic, reused by the CLI (seed.js) and the guarded /api/seed route. */
const connectDB = require('./config/db');
const User = require('./models/User');
const { Note, Quiz, FlashcardDeck, Video, Scholarship, Opportunity, Post, Exam } = require('./models/Content');
const data = require('./data/content');

async function runSeed() {
  await connectDB();
  await Promise.all([
    User.deleteMany(), Note.deleteMany(), Quiz.deleteMany(), FlashcardDeck.deleteMany(),
    Video.deleteMany(), Scholarship.deleteMany(), Opportunity.deleteMany(), Post.deleteMany(),
    Exam.deleteMany(),
  ]);

  for (const u of data.users) await User.create(u);
  await Note.insertMany(data.notes);
  await Quiz.insertMany(data.quizzes);
  await FlashcardDeck.insertMany(data.flashcards);
  await Video.insertMany(data.videos);
  await Scholarship.insertMany(data.scholarships);
  await Opportunity.insertMany(data.opportunities);
  await Post.insertMany(data.posts);
  await Exam.insertMany(data.exams);

  return {
    users: data.users.length, notes: data.notes.length, quizzes: data.quizzes.length,
    flashcards: data.flashcards.length, videos: data.videos.length, scholarships: data.scholarships.length,
    opportunities: data.opportunities.length, posts: data.posts.length, exams: data.exams.length,
  };
}

module.exports = runSeed;
