import { useEffect, useState } from 'react';
import { Star, Flame } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';
import { useAuth } from '../context/AuthContext';

const medal = ['🥇', '🥈', '🥉'];

export default function Leaderboard() {
  const { user } = useAuth();
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { api.get('/api/content/leaderboard').then(({ data }) => setBoard(data)).finally(() => setLoading(false)); }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <PageHeader emoji="🏆" title="Leaderboard" subtitle="Climb the ranks — every quiz counts." accent="text-yellow-600" />
      <div className="mx-auto max-w-2xl space-y-2">
        {board.map((u, i) => {
          const isMe = user && u.name === user.name;
          return (
            <div key={u._id} className={`card flex items-center gap-4 py-4 ${isMe ? 'border-ghefi bg-ghefi/5' : ''} ${i < 3 ? 'shadow-pop' : ''}`}>
              <span className="w-8 text-center text-xl font-extrabold text-ink/40">{medal[i] || i + 1}</span>
              <span className="text-2xl">{u.avatar}</span>
              <div className="flex-1">
                <p className="font-display font-extrabold">{u.name} {isMe && <span className="pill bg-ghefi/10 text-ghefi">You</span>}</p>
                <div className="flex flex-wrap gap-1">
                  {(u.badges || []).slice(0, 2).map((b) => <span key={b} className="pill bg-ink/5 text-ink/50">{b}</span>)}
                </div>
              </div>
              <div className="text-right">
                <p className="flex items-center gap-1 font-extrabold text-yellow-700"><Star size={15} /> {u.xp}</p>
                <p className="flex items-center justify-end gap-1 text-xs font-bold text-orange-500"><Flame size={12} /> {u.streak}d</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
