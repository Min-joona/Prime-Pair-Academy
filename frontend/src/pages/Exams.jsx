import { useEffect, useState } from 'react';
import { Check, X, Clock, RotateCcw, FileCheck2, Eye } from 'lucide-react';
import api from '../api/client';
import { Spinner, PageHeader, Pills } from '../components/ui';
import Ghefi from '../components/mascots/Ghefi';

const streamColor = {
  Natural: 'bg-green-100 text-green-700',
  Social: 'bg-blue-100 text-blue-700',
  General: 'bg-purple-100 text-purple-700',
};

function ExamPlayer({ exam, onExit }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = exam.questions.reduce((a, q, i) => a + (answers[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round((score / exam.questions.length) * 100);

  return (
    <div className="mx-auto max-w-2xl">
      <button onClick={onExit} className="mb-4 text-sm font-bold text-ink/50 hover:text-ink">← All exams</button>
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold">{exam.title}</h2>
            <p className="text-sm text-ink/50">{exam.grade} · {exam.stream} stream · {exam.questions.length} questions</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-ink/50"><Clock size={15} /> {exam.durationMin}m</span>
        </div>

        <div className="mt-5 space-y-6">
          {exam.questions.map((q, i) => (
            <div key={i}>
              <p className="font-semibold">{i + 1}. {q.prompt}</p>
              <div className="mt-2 grid gap-2">
                {q.options.map((opt, oi) => {
                  const chosen = answers[i] === oi;
                  const showCorrect = submitted && oi === q.answer;
                  const showWrong = submitted && chosen && oi !== q.answer;
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers({ ...answers, [i]: oi })}
                      className={`flex items-center justify-between rounded-xl border-2 px-3 py-2 text-left text-sm ${
                        showCorrect ? 'border-green-500 bg-green-50' :
                        showWrong ? 'border-red-400 bg-red-50' :
                        chosen ? 'border-ghefi bg-ghefi/5' : 'border-ink/10'
                      }`}
                    >
                      {opt}
                      {showCorrect && <Check size={16} className="text-green-600" />}
                      {showWrong && <X size={16} className="text-red-500" />}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p className="mt-2 rounded-xl bg-ghefi/5 p-3 text-sm text-ink/70">
                  <strong>Answer:</strong> {q.options[q.answer]} — {q.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < exam.questions.length}
            className="btn-ghefi mt-6 w-full disabled:opacity-40"
          >
            <FileCheck2 size={18} /> Submit & see answers
          </button>
        ) : (
          <div className="mt-6 rounded-2xl bg-ghefi/10 p-5 text-center">
            <p className="font-display text-2xl font-extrabold text-ghefi">You scored {score}/{exam.questions.length} ({pct}%)</p>
            <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="btn-outline mt-3"><RotateCcw size={16} /> Retake</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [subjects, setSubjects] = useState(['All']);
  const [subject, setSubject] = useState('All');
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    api.get('/api/content/exams').then(({ data }) => {
      setExams(data);
      setSubjects(['All', ...new Set(data.map((e) => e.subject))]);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (active) return <div><PageHeader emoji="📝" title="Matric Exam" /><ExamPlayer exam={active} onExit={() => setActive(null)} /></div>;

  const shown = subject === 'All' ? exams : exams.filter((e) => e.subject === subject);

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Ghefi size={72} float />
        <PageHeader emoji="📝" title="Matric Exams" subtitle="Grade 9–12 practice exams — with full answers and explanations." />
      </div>
      <Pills items={subjects} value={subject} onChange={setSubject} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((e) => (
          <div key={e._id} className="card flex flex-col">
            <div className="flex items-center justify-between">
              <span className="pill bg-ghefi/10 text-ghefi">{e.subject}</span>
              <span className={`pill ${streamColor[e.stream] || 'bg-ink/5 text-ink/50'}`}>{e.stream}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-extrabold">{e.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{e.grade} · {e.questions.length} questions · {e.durationMin} min</p>
            <button onClick={() => setActive(e)} className="btn-ghefi mt-4"><Eye size={16} /> Take exam</button>
          </div>
        ))}
      </div>
    </div>
  );
}
