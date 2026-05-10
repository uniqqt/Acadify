import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AppLayout from './components/Layout/AppLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Study from './pages/Study';
import StudyDetail from './pages/StudyDetail';
import Quiz from './pages/Quiz';
import QuizSession from './pages/QuizSession';
import Notes from './pages/Notes';

// ── Protected layout (requires login) ────────────────────────────────────────
function ProtectedLayout() {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;
  return <AppLayout />;
}

// ── Public-only routes (redirect to dashboard if logged in) ──────────────────
function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
}

function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--color-gradient)', backgroundAttachment: 'fixed' }}
    >
      <div className="text-center">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ backgroundColor: 'var(--color-primary)' }}>
            <GraduationCap size={24} color="white" />
          </div>
        <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
          Loading Acadify…
        </p>
      </div>
    </div>
  );
}

// ── Route tree ────────────────────────────────────────────────────────────────
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/:lawId" element={<StudyDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:lawId" element={<QuizSession />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
