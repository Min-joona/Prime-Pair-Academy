import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Home, BookOpen, Brain, Layers, Video, Users, Trophy,
  GraduationCap, Compass, Menu, X, Flame, Star, LogOut, FileText,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ghefiLinks = [
  { to: '/notes', label: 'Short Notes', icon: BookOpen },
  { to: '/quizzes', label: 'Quizzes', icon: Brain },
  { to: '/flashcards', label: 'Flashcards', icon: Layers },
  { to: '/videos', label: 'Explain Videos', icon: Video },
  { to: '/exams', label: 'Matric Exams', icon: FileText },
  { to: '/community', label: 'Community', icon: Users },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
];
const letheLinks = [
  { to: '/scholarships', label: 'Scholarships', icon: GraduationCap },
  { to: '/opportunities', label: 'Opportunities', icon: Compass },
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, label, icon: Icon, accent }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
          isActive ? `${accent} text-white` : 'text-ink/70 hover:bg-ink/5'
        }`
      }
    >
      <Icon size={18} /> {label}
    </NavLink>
  );

  const Sidebar = () => (
    <nav className="flex h-full flex-col gap-1 p-4">
      <NavItem to="/dashboard" label="Home Base" icon={Home} accent="bg-ink" />
      <p className="mt-4 px-4 text-[11px] font-extrabold uppercase tracking-wider text-ghefi">🐢 Ghefi · Learn</p>
      {ghefiLinks.map((l) => <NavItem key={l.to} {...l} accent="bg-ghefi" />)}
      <p className="mt-4 px-4 text-[11px] font-extrabold uppercase tracking-wider text-lethe">🐍 Lethe · Launch</p>
      {letheLinks.map((l) => <NavItem key={l.to} {...l} accent="bg-lethe" />)}
    </nav>
  );

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b-2 border-ink/5 bg-paper/90 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
            <Link to="/dashboard" className="flex items-center gap-2 font-display text-xl font-extrabold">
              <img src="/favicon.png" alt="" className="h-9 w-9 rounded-xl" />
              Prime Pair <span className="text-ghefi">Academy</span>
            </Link>
          </div>
          {user && (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-extrabold text-orange-600">
                <Flame size={15} /> {user.streak}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-extrabold text-yellow-700">
                <Star size={15} /> {user.xp} XP
              </span>
              <span className="hidden text-2xl sm:inline">{user.avatar}</span>
              <button onClick={() => { logout(); navigate('/'); }} className="text-ink/50 hover:text-ink" aria-label="Log out">
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-64 shrink-0 overflow-y-auto border-r-2 border-ink/5 lg:block">
          <Sidebar />
        </aside>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 top-[57px] z-30 bg-black/20 lg:hidden" onClick={() => setOpen(false)}>
            <aside className="h-full w-72 overflow-y-auto bg-paper" onClick={(e) => e.stopPropagation()}>
              <Sidebar />
            </aside>
          </div>
        )}

        <main className="min-w-0 flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
