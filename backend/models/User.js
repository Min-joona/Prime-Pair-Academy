const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    xp: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    lastActive: { type: Date, default: Date.now },
    badges: [{ type: String }],
    avatar: { type: String, default: '🐢' }, // Ghefi or Lethe themed
    completedQuizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = function (entered) {
  return bcrypt.compare(entered, this.password);
};

// Level derived from XP: 100 XP per level.
userSchema.virtual('level').get(function () {
  return Math.floor(this.xp / 100) + 1;
});
userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
