import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Ghefi from '../components/mascots/Ghefi';
import Lethe from '../components/mascots/Lethe';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', avatar: '🐢' });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await register(form);
      toast.success('Account created! +10 XP 🎉');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center px-6 py-10">
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center gap-2">
          <Ghefi size={90} float />
          <Lethe size={90} float className="mt-4" />
        </div>
        <h1 className="mt-4 font-display text-3xl font-extrabold">Join the Prime Pair</h1>
        <p className="text-ink/60">Pick a buddy and start your streak.</p>
        <form onSubmit={submit} className="mt-6 space-y-4 text-left">
          <input className="input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="input" type="password" placeholder="Password (min 6)" minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <div className="flex gap-3">
            {[['🐢', 'Team Ghefi'], ['🐍', 'Team Lethe']].map(([emoji, label]) => (
              <button
                type="button"
                key={emoji}
                onClick={() => setForm({ ...form, avatar: emoji })}
                className={`flex-1 rounded-2xl border-2 py-3 text-center font-bold transition ${form.avatar === emoji ? 'border-ghefi bg-ghefi/10' : 'border-ink/10'}`}
              >
                <span className="text-2xl">{emoji}</span>
                <p className="text-xs">{label}</p>
              </button>
            ))}
          </div>
          <button disabled={busy} className="btn-ghefi w-full">{busy ? 'Creating…' : 'Create account'}</button>
        </form>
        <p className="mt-4 text-sm">Already a member? <Link to="/login" className="font-bold text-ghefi">Log in</Link></p>
      </div>
    </div>
  );
}
