import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, GraduationCap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { COURSES } from '../constants';

export default function Signup() {
  const { signup, authError, setAuthError } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', course: 'law', customCourse: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (f) => (e) => { setForm((p) => ({ ...p, [f]: e.target.value })); setErrors({}); setAuthError(''); };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Full name is required (at least 2 characters).';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters.';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match.';
    if (form.course === 'custom' && !form.customCourse.trim()) e.customCourse = 'Please specify your course.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    const ok = await signup(form);
    setLoading(false);
    if (ok) navigate('/dashboard');
  };

  const inputCls = "w-full rounded-xl px-3 py-2.5 text-sm transition-colors";
  const inputBase = { backgroundColor: 'white', color: '#1f2937', outline: 'none' };
  const getInputStyle = (field) => ({
    ...inputBase,
    border: `1.5px solid ${errors[field] ? '#dc2626' : '#e5e7eb'}`,
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8" style={{ background: 'var(--color-gradient)', backgroundAttachment: 'fixed' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="Acadify"
            className="mx-auto mb-1"
            style={{ width: 140, height: 'auto', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.16))' }}
          />
          <h1 className="text-xl font-black" style={{ color: theme.text }}>Create Account</h1>
          <p className="text-sm mt-0.5" style={{ color: theme.textMuted }}>Join Acadify</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {authError && (
            <div className="mb-4 px-3 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Juan dela Cruz"
                value={form.name}
                onChange={set('name')}
                className={inputCls}
                style={getInputStyle('name')}
                onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                onBlur={(e) => (e.target.style.borderColor = errors.name ? '#dc2626' : '#e5e7eb')}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="juan@example.com"
                value={form.email}
                onChange={set('email')}
                className={inputCls}
                style={getInputStyle('email')}
                onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                onBlur={(e) => (e.target.style.borderColor = errors.email ? '#dc2626' : '#e5e7eb')}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Course */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                <GraduationCap size={12} /> Course / Program
              </label>
              <select
                value={form.course}
                onChange={set('course')}
                className={inputCls}
                style={{ ...inputBase, border: '1.5px solid #e5e7eb' }}
              >
                {COURSES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            {/* Custom course */}
            {form.course === 'custom' && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Specify your course
                </label>
                <input
                  type="text"
                  placeholder="e.g., Architecture, Accountancy"
                  value={form.customCourse}
                  onChange={set('customCourse')}
                  className={inputCls}
                  style={getInputStyle('customCourse')}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) => (e.target.style.borderColor = errors.customCourse ? '#dc2626' : '#e5e7eb')}
                />
                {errors.customCourse && <p className="text-xs text-red-500 mt-1">{errors.customCourse}</p>}
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={set('password')}
                  className={`${inputCls} pr-10`}
                  style={getInputStyle('password')}
                  onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                  onBlur={(e) => (e.target.style.borderColor = errors.password ? '#dc2626' : '#e5e7eb')}
                />
                <button type="button" onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* Confirm */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat password"
                value={form.confirm}
                onChange={set('confirm')}
                className={inputCls}
                style={getInputStyle('confirm')}
                onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                onBlur={(e) => (e.target.style.borderColor = errors.confirm ? '#dc2626' : '#e5e7eb')}
              />
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 mt-2"
              style={{ backgroundColor: theme.primary, color: theme.primaryText }}
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              ) : (
                <>
                  <UserPlus size={16} />
                  Create Account
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold" style={{ color: theme.primary }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
