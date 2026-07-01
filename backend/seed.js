/** Seed Prime Pair Academy. Usage: npm run seed */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const { Note, Quiz, FlashcardDeck, Video, Scholarship, Opportunity, Post, Exam } = require('./models/Content');
const data = require('./data/content');

const run = async () => {
  try {
    await connectDB();
    await Promise.all([
      User.deleteMany(), Note.deleteMany(), Quiz.deleteMany(), FlashcardDeck.deleteMany(),
      Video.deleteMany(), Scholarship.deleteMany(), Opportunity.deleteMany(), Post.deleteMany(),
      Exam.deleteMany(),
    ]);

    // Users are created one-by-one so password hashing runs.
    for (const u of data.users) await User.create(u);

    await Note.insertMany(data.notes);
    await Quiz.insertMany(data.quizzes);
    await FlashcardDeck.insertMany(data.flashcards);
    await Video.insertMany(data.videos);
    await Scholarship.insertMany(data.scholarships);
    await Opportunity.insertMany(data.opportunities);
    await Post.insertMany(data.posts);
    await Exam.insertMany(data.exams);

    console.log('✓ Prime Pair Academy seeded:');
    console.log(`  ${data.users.length} users · ${data.notes.length} notes · ${data.quizzes.length} quizzes`);
    console.log(`  ${data.flashcards.length} decks · ${data.videos.length} videos · ${data.scholarships.length} scholarships`);
    console.log(`  ${data.opportunities.length} opportunities · ${data.posts.length} posts · ${data.exams.length} exams`);
    console.log('  Login: amar@primepair.io / demo123');
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
};

run();
