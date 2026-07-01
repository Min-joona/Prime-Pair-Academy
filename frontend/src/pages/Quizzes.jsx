import { useEffect, useState } from 'react';
import { Check, X, Star, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api/client';
import { Spinner, PageHeader } from '../components/ui';
import { useAuth } from '../context/AuthContext';
import Ghefi from '../components/mascots/Ghefi';

function Player({ quiz, onExit }) {
  const { addXp } = useAuth();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz.questions[i];
  const correct = picked !== null && picked === q.answer;

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 < quiz.questions.length) { setI(i + 1); setPicked(null); }
    else {
      setDone(true);
      const earned = Math.round((score + (correct ? 0 : 0)) / quiz.questions.length * quiz.xpReward);
      addXp(quiz.xpReward);
      toast.success(`+${quiz.xpReward} XP! 🎉`);
    }
  };

  if (done) {
    const pct = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="card mx-auto max-w-lg text-center">
        <Ghefi size={140} className="mx-auto" float />
        <h2 className="mt-2 font-display text-3xl font-extrabold">
          {pct >= 70 ? 'Great job! 🎉' : 'Keep practicing! 💪'}
        </h2>
        <p className="mt-2 text-ink/60">You scored {score}/{quiz.questions.length} ({pct}%)</p>
        <p className="mt-1 flex items-center justify-center gap-1 font-extrabold text-yellow-700"><Star size={18} /> +{quiz.xpReward} XP earned</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={onExit} className="btn-outline">Back to quizzes</button>
          <button onClick={() => { setI(0); setPicked(null); setScore(0); setDone(false); }} className="btn-ghefi"><RotateCcw size={16} /> Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 h-3 overflow-hidden rounded-full bg-ink/10">
        <div className="h-full rounded-full bg-ghefi transition-all" style={{ width: `${(i / quiz.questions.length) * 100}%` }} />
      </div>
      <div className="card">
        <p className="text-sm font-bold text-ink/40">Question {i + 1} of {quiz.questions.length}</p>
        <h2 className="mt-2 font-display text-2xl font-extrabold">{q.prompt}</h2>
        <div className="mt-5 space-y-3">
          {q.options.map((opt, idx) => {
            const isPicked = picked === idx;
            const showCorrect = picked !== null && idx === q.answer;
            const showWrong = isPicked && idx !== q.answer;
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                className={`flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3 text-left font-bold transition ${
                  showCorrect ? 'border-green-500 bg-green-50' :
                  showWrong ? 'border-red-400 bg-red-50' :
                  'border-ink/10 hover:border-ghefi'
                }`}
              >
                {opt}
                {showCorrect && <Check className="text-green-600" size={18} />}
                {showWrong && <X className="text-red-500" size={18} />}
              </button>
            );
          })}
        </div>
        {picked !== null && (
          <div className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {correct ? 'Correct! ' : 'Not quite. '}{q.explanation}
          </div>
        )}
        <div className="mt-5 flex justify-end">
          <button onClick={next} disabled={picked === null} className="btn-ghefi disabled:opacity-40">
            {i + 1 < quiz.questions.length ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => { api.get('/api/content/quizzes').then(({ data }) => setQuizzes(data)).finally(() => setLoading(false)); }, []);

  if (loading) return <Spinner />;
  if (active) return <div><PageHeader emoji="🧠" title={active.title} /><Player quiz={active} onExit={() => setActive(null)} /></div>;

  return (
    <div>
      <PageHeader emoji="🧠" title="Quizzes" subtitle="Test yourself, earn XP, keep the streak." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((q) => (
          <div key={q._id} className="card">
            <span className="pill bg-ghefi/10 text-ghefi">{q.subject}</span>
            <h3 className="mt-3 font-display text-lg font-extrabold">{q.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{q.questions.length} questions · {q.level}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 font-extrabold text-yellow-700"><Star size={16} /> +{q.xpReward} XP</span>
              <button onClick={() => setActive(q)} className="btn-ghefi py-2">Start</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
