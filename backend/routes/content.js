const express = require('express');
const { Note, Quiz, FlashcardDeck, Video, Scholarship, Opportunity, Post, Exam } = require('../models/Content');
const User = require('../models/User');

const router = express.Router();

// Generic list helper with optional subject filter.
const list = (Model) => async (req, res) => {
  const filter = {};
  if (req.query.subject && req.query.subject !== 'All') filter.subject = req.query.subject;
  const docs = await Model.find(filter).sort({ createdAt: -1 });
  res.json(docs);
};

router.get('/notes', list(Note));
router.get('/notes/:id', async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ message: 'Not found' });
  res.json(note);
});

router.get('/quizzes', list(Quiz));
router.get('/quizzes/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) return res.status(404).json({ message: 'Not found' });
  res.json(quiz);
});

router.get('/flashcards', list(FlashcardDeck));
router.get('/videos', list(Video));
router.get('/exams', list(Exam));
router.get('/exams/:id', async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (!exam) return res.status(404).json({ message: 'Not found' });
  res.json(exam);
});
router.get('/scholarships', async (_req, res) => res.json(await Scholarship.find().sort({ deadline: 1 })));
router.get('/opportunities', async (_req, res) => res.json(await Opportunity.find().sort({ createdAt: -1 })));

router.get('/community', async (_req, res) => res.json(await Post.find().sort({ createdAt: -1 })));
router.post('/community/:id/like', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
  res.json(post);
});

// Subjects across notes/quizzes for filter pills.
router.get('/subjects', async (_req, res) => {
  const subjects = await Note.distinct('subject');
  res.json(['All', ...subjects]);
});

// Leaderboard — top users by XP.
router.get('/leaderboard', async (_req, res) => {
  const users = await User.find().sort({ xp: -1 }).limit(20).select('name xp streak avatar badges');
  res.json(users.map((u) => u.toJSON()));
});

module.exports = router;
