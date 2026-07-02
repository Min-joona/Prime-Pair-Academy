import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Layers, Video, Users, Trophy, GraduationCap, Compass, ArrowRight } from 'lucide-react';
import Ghefi from '../components/mascots/Ghefi';
import Lethe from '../components/mascots/Lethe';

const Callout = ({ children, className }) => (
  <div className={`absolute hidden rounded-xl border-2 border-ink/10 bg-white px-3 py-1.5 text-xs font-bold shadow-soft md:block ${className}`}>
    {children}
  </div>
);

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <span className="flex items-center gap-2 font-display text-2xl font-extrabold">
          <img src="/favicon.png" alt="" className="h-10 w-10 rounded-xl" />
          Prime Pair <span className="text-ghefi">Academy</span>
        </span>
        <div className="flex items-center gap-3">
          <Link to="/login" className="font-display font-bold text-ink/70 hover:text-ink">Log in</Link>
          <Link to="/register" className="btn-ghefi">Get started</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="pill bg-ghefi/10 text-ghefi">Empowering Ethiopian high-school students</span>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Learn it. <span className="text-ghefi">Master it.</span><br />
            Then <span className="text-lethe">launch.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Bite-sized notes, playful quizzes, and flashcards to build real mastery —
            plus scholarships and opportunities to take you further. Guided by two friends.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/register" className="btn-ghefi">Start learning free <ArrowRight size={18} /></Link>
            <Link to="/login" className="btn-outline">I have an account</Link>
          </div>
          <div className="mt-8 flex gap-8">
            {[['100+', 'Lessons'], ['500+', 'Quiz questions'], ['50+', 'Scholarships']].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-extrabold">{n}</p>
                <p className="text-sm text-ink/50">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative flex justify-center gap-2">
          <Ghefi size={230} float />
          <Lethe size={230} float className="mt-10" />
        </motion.div>
      </section>

      {/* Meet the Prime Pair — full branding spread */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <span className="pill bg-lethe/10 text-lethe">The Prime Pair</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Meet the Prime Pair</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink/60">
            Two friendly mascots, two learning styles. Ghefi is the patient foundation.
            Lethe is the strategic speed. Together they cover how you learn <em>and</em> where you're going.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* GHEFI card with annotation callouts */}
          <div className="card relative overflow-visible border-ghefi/20 bg-gradient-to-b from-ghefi/5 to-white">
            <div className="relative flex justify-center py-6">
              <Ghefi size={260} />
              <Callout className="left-0 top-4 text-ghefi">↘ Helmet-like shell</Callout>
              <Callout className="right-0 top-16 text-[#5b3a1a]">Oversized brown eyes ↙</Callout>
              <Callout className="bottom-10 left-2 text-yellow-600">Glowing yellow plastron ↗</Callout>
            </div>
            <h3 className="font-display text-3xl font-extrabold text-ghefi">GHEFI</h3>
            <p className="text-sm font-bold text-ink/50">Your patient study buddy 🐢</p>
            <p className="mt-2 text-ink/70">Patient, steady, and cheeky — Ghefi builds visible mastery one small step at a time, so nothing feels overwhelming.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[[BookOpen, 'Short Notes'], [Brain, 'Quizzes'], [Layers, 'Flashcards'], [Video, 'Explain Videos'], [Users, 'Community'], [Trophy, 'Leaderboard']].map(([Icon, l]) => (
                <span key={l} className="pill flex items-center gap-1 bg-ghefi/10 text-ghefi"><Icon size={13} /> {l}</span>
              ))}
            </div>
          </div>

          {/* LETHE card with annotation callouts */}
          <div className="card relative overflow-visible border-lethe/20 bg-gradient-to-b from-lethe/5 to-white">
            <div className="relative flex justify-center py-6">
              <Lethe size={260} />
              <Callout className="right-2 top-6 text-lethe">Forked tongue tastes the air ↙</Callout>
              <Callout className="left-0 top-24 text-[#2b3a24]">↘ Subtle eye spots</Callout>
              <Callout className="bottom-8 left-0 text-[#1fae5c]">Neon tail = friendly stylus ↗</Callout>
            </div>
            <h3 className="font-display text-3xl font-extrabold text-lethe">LETHE</h3>
            <p className="text-sm font-bold text-ink/50">Your speedy opportunity scout 🐍</p>
            <p className="mt-2 text-ink/70">Gentle, quick, and always sniffing ahead — Lethe uncovers hidden opportunities and clears your path forward.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[[GraduationCap, 'Scholarships'], [Compass, 'Opportunities'], [Brain, 'Exam Prep'], [Users, 'Club Discovery'], [Compass, 'Internships'], [GraduationCap, 'Auto-Apply']].map(([Icon, l], i) => (
                <span key={i} className="pill flex items-center gap-1 bg-lethe/10 text-lethe"><Icon size={13} /> {l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/register" className="btn-ghefi mx-auto">Join the Prime Pair <ArrowRight size={18} /></Link>
        </div>
      </section>

      <footer className="border-t-2 border-ink/5 py-8 text-center text-sm text-ink/40">
        © {new Date().getFullYear()} Prime Pair Academy — built by Amar Hassen Mohammednur.
      </footer>
    </div>
  );
}
