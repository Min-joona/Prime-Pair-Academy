import { useEffect, useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState({});

  useEffect(() => { api.get('/api/content/community').then(({ data }) => setPosts(data)).finally(() => setLoading(false)); }, []);

  const like = async (id) => {
    if (liked[id]) return;
    setLiked((l) => ({ ...l, [id]: true }));
    setPosts((p) => p.map((x) => (x._id === id ? { ...x, likes: x.likes + 1 } : x)));
    try { await api.post(`/api/content/community/${id}/like`); } catch { /* noop */ }
  };

  if (loading) return <Spinner />;

  return (
    <div>
      <PageHeader emoji="💬" title="Community" subtitle="Ask, share, and learn together." />
      <div className="mx-auto max-w-2xl space-y-4">
        {posts.map((p) => (
          <div key={p._id} className="card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ghefi/10 text-xl">{p.avatar}</span>
              <div>
                <p className="font-bold">{p.author}</p>
                <p className="text-xs text-ink/50">{p.subject} · {new Date(p.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <h3 className="mt-3 font-display text-lg font-extrabold">{p.title}</h3>
            <p className="mt-1 text-ink/70">{p.body}</p>
            <div className="mt-4 flex items-center gap-5 text-sm font-bold text-ink/50">
              <button onClick={() => like(p._id)} className={`flex items-center gap-1 transition ${liked[p._id] ? 'text-red-500' : 'hover:text-red-500'}`}>
                <Heart size={16} className={liked[p._id] ? 'fill-red-500' : ''} /> {p.likes}
              </button>
              <span className="flex items-center gap-1"><MessageCircle size={16} /> {p.replies}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
