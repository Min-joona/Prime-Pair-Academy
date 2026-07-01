import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Quizzes from './pages/Quizzes';
import Flashcards from './pages/Flashcards';
import Videos from './pages/Videos';
import Exams from './pages/Exams';
import Community from './pages/Community';
import Leaderboard from './pages/Leaderboard';
import Scholarships from './pages/Scholarships';
import Opportunities from './pages/Opportunities';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();
  const guard = (el) => (user ? <Layout>{el}</Layout> : <Navigate to="/login" replace />);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
      <Route path="/dashboard" element={guard(<Dashboard />)} />
      <Route path="/notes" element={guard(<Notes />)} />
      <Route path="/quizzes" element={guard(<Quizzes />)} />
      <Route path="/flashcards" element={guard(<Flashcards />)} />
      <Route path="/videos" element={guard(<Videos />)} />
      <Route path="/exams" element={guard(<Exams />)} />
      <Route path="/community" element={guard(<Community />)} />
      <Route path="/leaderboard" element={guard(<Leaderboard />)} />
      <Route path="/scholarships" element={guard(<Scholarships />)} />
      <Route path="/opportunities" element={guard(<Opportunities />)} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
