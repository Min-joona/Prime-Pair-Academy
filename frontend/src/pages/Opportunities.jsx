import { useEffect, useState } from 'react';
import { Calendar, ExternalLink, MapPin, Globe } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';
import Lethe from '../components/mascots/Lethe';

const typeColor = {
  Internship: 'bg-blue-100 text-blue-700',
  Club: 'bg-purple-100 text-purple-700',
  Program: 'bg-green-100 text-green-700',
  Competition: 'bg-orange-100 text-orange-700',
  'Exam Prep': 'bg-pink-100 text-pink-700',
};

export default function Opportunities() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => { api.get('/api/content/opportunities').then(({ data }) => setItems(data)).finally(() => setLoading(false)); }, []);

  const types = ['All', ...new Set(items.map((i) => i.type))];
  const shown = filter === 'All' ? items : items.filter((i) => i.type === filter);

  if (loading) return <Spinner />;

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Lethe size={80} float />
        <PageHeader emoji="🧭" title="Opportunities" subtitle="Internships, clubs, programs & exam prep — before the deadline sneaks up." accent="text-lethe" />
      </div>

      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto">
        {types.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`pill whitespace-nowrap border-2 px-4 py-2 ${filter === t ? 'border-lethe bg-lethe text-white' : 'border-ink/10 text-ink/60'}`}>{t}</button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((o) => (
          <div key={o._id} className="card flex flex-col border-lethe/20">
            <div className="flex items-center justify-between">
              <span className={`pill ${typeColor[o.type] || 'bg-ink/5 text-ink/60'}`}>{o.type}</span>
              {o.remote && <span className="pill flex items-center gap-1 bg-lethe/10 text-lethe"><Globe size={12} /> Remote</span>}
            </div>
            <h3 className="mt-3 font-display text-lg font-extrabold">{o.title}</h3>
            <p className="text-sm text-ink/50">{o.org}</p>
            <p className="mt-2 flex-1 text-sm text-ink/70">{o.description}</p>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold text-ink/50"><MapPin size={13} /> {o.location}</div>
            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-bold text-ink/50">
                <Calendar size={13} /> {o.deadline ? new Date(o.deadline).toLocaleDateString() : 'Open'}
              </span>
              <a href={o.link} target="_blank" rel="noreferrer" className="btn-lethe py-2">View <ExternalLink size={14} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
