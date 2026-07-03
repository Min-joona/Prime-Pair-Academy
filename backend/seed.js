/** Seed Prime Pair Academy. Usage: npm run seed */
require('dotenv').config();
const mongoose = require('mongoose');
const runSeed = require('./seedRunner');

runSeed()
  .then((r) => {
    console.log('✓ Prime Pair Academy seeded:');
    console.log(`  ${r.users} users · ${r.notes} notes · ${r.quizzes} quizzes`);
    console.log(`  ${r.flashcards} decks · ${r.videos} videos · ${r.scholarships} scholarships`);
    console.log(`  ${r.opportunities} opportunities · ${r.posts} posts · ${r.exams} exams`);
    console.log('  Login: amar@primepair.io / demo123');
    return mongoose.connection.close();
  })
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seed failed:', err.message);
    process.exit(1);
  });
