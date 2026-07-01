import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';

function Deck({ deck, onExit }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = deck.cards[i];

  const go = (d) => { setFlipped(false); setI((p) => (p + d + deck.cards.length) % deck.cards.length); };

  return (
    <div className="mx-auto max-w-xl">
      <button onClick={onExit} className="mb-4 text-sm font-bold text-ink/50 hover:text-ink">← All decks</button>
      <p className="mb-2 text-center text-sm font-bold text-ink/50">Card {i + 1} / {deck.cards.length}</p>

      <div className="[perspective:1200px]">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
        >
          <div className="absolute inset-0 grid place-items-center rounded-3xl border-2 border-ghefi/20 bg-white p-6 text-center [backface-visibility:hidden]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ink/40">Front · tap to flip</p>
              <p className="mt-3 font-display text-2xl font-extrabold">{card.front}</p>
            </div>
          </div>
          <div className="absolute inset-0 grid place-items-center rounded-3xl border-2 border-ghefi bg-ghefi/5 p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ghefi">Answer</p>
              <p className="mt-3 font-display text-2xl font-extrabold text-ghefi-dark">{card.back}</p>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} className="btn-outline"><ChevronLeft size={18} /></button>
        <button onClick={() => setFlipped((f) => !f)} className="btn-ghefi"><RotateCw size={16} /> Flip</button>
        <button onClick={() => go(1)} className="btn-outline"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}

export default function Flashcards() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => { api.get('/api/content/flashcards').then(({ data }) => setDecks(data)).finally(() => setLoading(false)); }, []);

  if (loading) return <Spinner />;
  if (active) return <div><PageHeader emoji="🃏" title={active.title} /><Deck deck={active} onExit={() => setActive(null)} /></div>;

  return (
    <div>
      <PageHeader emoji="🃏" title="Flashcards" subtitle="Flip to remember — spaced practice that sticks." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decks.map((d) => (
          <button key={d._id} onClick={() => setActive(d)} className="card text-left transition hover:-translate-y-1">
            <span className="pill bg-ghefi/10 text-ghefi">{d.subject}</span>
            <h3 className="mt-3 font-display text-lg font-extrabold">{d.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{d.cards.length} cards</p>
          </button>
        ))}
      </div>
    </div>
  );
}
