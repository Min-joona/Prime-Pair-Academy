import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Layers, Video, GraduationCap, Compass, Flame, Star, Trophy } from 'lucide-react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import Ghefi from '../components/mascots/Ghefi';
import Lethe from '../components/mascots/Lethe';

const quick = [
  { to: '/notes', label: 'Short Notes', icon: BookOpen, accent: 'bg-ghefi' },
  { to: '/quizzes', label: 'Take a Quiz', icon: Brain, accent: 'bg-ghefi' },
  { to: '/flashcards', label: 'Flashcards', icon: Layers, accent: 'bg-ghefi' },
  { to: '/videos', label: 'Watch & Learn', icon: Video, accent: 'bg-ghefi' },
  { to: '/scholarships', label: 'Scholarships', icon: GraduationCap, accent: 'bg-lethe' },
  { to: '/opportunities', label: 'Opportunities', icon: Compass, accent: 'bg-lethe' },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [board, setBoard] = useState([]);

  useEffect(() => { api.get('/api/content/leaderboard').then(({ data }) => setBoard(data.slice(0, 5))); }, []);

  const xpIntoLevel = user.xp % 100;

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div className="card flex flex-col items-center gap-6 bg-gradient-to-r from-ghefi/10 to-lethe/10 md:flex-row md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-extrabold">Welcome back, {user.name.split(' ')[0]}! 👋</h1>
          <p className="mt-1 text-ink/60">Level {user.level} · keep your {user.streak}-day streak alive.</p>
          <div className="mt-4 flex gap-3">
            <span className="flex items-center gap-1 rounded-full bg-orange-100 px-4 py-2 font-extrabold text-orange-600"><Flame size={18} /> {user.streak} days</span>
            <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-4 py-2 font-extrabold text-yellow-700"><Star size={18} /> {user.xp} XP</span>
          </div>
          {/* level progress */}
          <div className="mt-4 w-64 max-w-full">
            <div className="mb-1 flex justify-between text-xs font-bold text-ink/50">
              <span>Level {user.level}</span><span>{xpIntoLevel}/100 XP</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-ink/10">
              <div className="h-full rounded-full bg-ghefi transition-all" style={{ width: `${xpIntoLevel}%` }} />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Ghefi size={120} float />
          <Lethe size={120} float className="mt-6" />
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="mb-4 font-display text-xl font-extrabold">Jump back in</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {quick.map(({ to, label, icon: Icon, accent }) => (
            <Link key={to} to={to} className="card flex items-center gap-3 py-5 transition hover:-translate-y-1">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accent} text-white`}><Icon size={20} /></span>
              <span className="font-display font-bold">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mini leaderboard */}
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-xl font-extrabold"><Trophy className="text-yellow-500" /> Top learners</h2>
          <Link to="/leaderboard" className="text-sm font-bold text-ghefi">See all →</Link>
        </div>
        <ul className="space-y-2">
          {board.map((u, i) => (
            <li key={u._id} className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-ink/5">
              <span className="w-6 text-center font-extrabold text-ink/40">{i + 1}</span>
              <span className="text-xl">{u.avatar}</span>
              <span className="flex-1 font-bold">{u.name}</span>
              <span className="flex items-center gap-1 text-sm font-extrabold text-yellow-700"><Star size={14} /> {u.xp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
