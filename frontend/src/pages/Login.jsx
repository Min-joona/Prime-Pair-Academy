import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Ghefi from '../components/mascots/Ghefi';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'amar@primepair.io', password: 'demo123' });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(form.email, form.password);
      toast.success('Welcome back! 🎉');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="w-full max-w-sm text-center">
        <Link to="/"><Ghefi size={120} className="mx-auto" float /></Link>
        <h1 className="mt-4 font-display text-3xl font-extrabold">Welcome back!</h1>
        <p className="text-ink/60">Ghefi missed you.</p>
        <form onSubmit={submit} className="mt-6 space-y-4 text-left">
          <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <button disabled={busy} className="btn-ghefi w-full">{busy ? 'Logging in…' : 'Log in'}</button>
        </form>
        <p className="mt-4 text-xs text-ink/50">Demo: amar@primepair.io / demo123 (prefilled)</p>
        <p className="mt-4 text-sm">New here? <Link to="/register" className="font-bold text-ghefi">Create an account</Link></p>
      </div>
    </div>
  );
}
