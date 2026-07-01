import { useEffect, useState } from 'react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    api.get('/api/content/videos').then(({ data }) => { setVideos(data); setActive(data[0]); }).finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <PageHeader emoji="🎬" title="Explain Videos" subtitle="Short explainers when you'd rather watch than read." />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {active && (
            <div className="card p-3">
              <div className="aspect-video overflow-hidden rounded-2xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${active.youtubeId}`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3">
                <span className="pill bg-ghefi/10 text-ghefi">{active.subject}</span>
                <h2 className="mt-2 font-display text-xl font-extrabold">{active.title}</h2>
                <p className="mt-1 text-sm text-ink/60">{active.description}</p>
                <p className="mt-1 text-xs font-bold text-ink/40">
                  Placeholder video — swap in your own recording later.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-3">
          {videos.map((v) => (
            <button key={v._id} onClick={() => setActive(v)} className={`flex w-full gap-3 rounded-2xl p-2 text-left transition ${active?._id === v._id ? 'bg-ghefi/10' : 'hover:bg-ink/5'}`}>
              <img src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`} alt="" className="h-16 w-28 shrink-0 rounded-xl object-cover" />
              <div>
                <p className="line-clamp-2 text-sm font-bold">{v.title}</p>
                <p className="text-xs text-ink/50">{v.subject} · {v.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
