import { useEffect, useState } from 'react';
import { Calendar, ExternalLink, Award } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';
import Lethe from '../components/mascots/Lethe';

export default function Scholarships() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { api.get('/api/content/scholarships').then(({ data }) => setItems(data)).finally(() => setLoading(false)); }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Lethe size={80} float />
        <PageHeader emoji="🎓" title="Scholarships" subtitle="Lethe sniffs out funding you can actually get." accent="text-lethe" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((s) => (
          <div key={s._id} className="card border-lethe/20">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-extrabold">{s.title}</h3>
                <p className="text-sm text-ink/50">{s.provider} · {s.country}</p>
              </div>
              <span className="pill flex shrink-0 items-center gap-1 bg-lethe/10 text-lethe"><Award size={13} /> {s.amount}</span>
            </div>
            <p className="mt-2 text-sm text-ink/70">{s.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="pill bg-ink/5 text-ink/60">{s.level}</span>
              {s.exam && s.exam !== 'None' && <span className="pill bg-ink/5 text-ink/60">Needs {s.exam}</span>}
              {(s.tags || []).map((t) => <span key={t} className="pill bg-lethe/10 text-lethe">{t}</span>)}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-bold text-ink/50">
                <Calendar size={13} /> {s.deadline ? new Date(s.deadline).toLocaleDateString() : 'Rolling'}
              </span>
              <a href={s.link} target="_blank" rel="noreferrer" className="btn-lethe py-2">Apply <ExternalLink size={14} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
