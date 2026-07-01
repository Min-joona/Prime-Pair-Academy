import { useEffect, useState } from 'react';
import { Clock, X } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader, Pills } from '../components/ui';

const levelColor = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [subjects, setSubjects] = useState(['All']);
  const [subject, setSubject] = useState('All');
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(null);

  useEffect(() => { api.get('/api/content/subjects').then(({ data }) => setSubjects(data)); }, []);
  useEffect(() => {
    setLoading(true);
    api.get(`/api/content/notes?subject=${subject}`).then(({ data }) => setNotes(data)).finally(() => setLoading(false));
  }, [subject]);

  return (
    <div>
      <PageHeader emoji="📖" title="Short Notes" subtitle="Ghefi's bite-sized lessons — read one in a few minutes." />
      <Pills items={subjects} value={subject} onChange={setSubject} />

      {loading ? <Spinner /> : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => (
            <button key={n._id} onClick={() => setOpen(n)} className="card text-left transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="pill bg-ghefi/10 text-ghefi">{n.subject}</span>
                <span className={`pill ${levelColor[n.level]}`}>{n.level}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-extrabold">{n.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{n.summary}</p>
              <p className="mt-3 flex items-center gap-1 text-xs font-bold text-ink/40"><Clock size={13} /> {n.readMinutes} min read</p>
            </button>
          ))}
        </div>
      )}

      {/* Reader modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(null)}>
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <span className="pill bg-ghefi/10 text-ghefi">{open.subject}</span>
                <h2 className="mt-2 font-display text-2xl font-extrabold">{open.title}</h2>
              </div>
              <button onClick={() => setOpen(null)} className="text-ink/40 hover:text-ink"><X /></button>
            </div>
            <div className="mt-4 space-y-3 whitespace-pre-line leading-relaxed text-ink/80">
              {open.body.split('\n').map((line, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
