import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Trophy, BookOpen, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getAllBestScores, getQuizResults } from '../utils/storage';
import { getTopicsForCourse, getQuizzesForCourse } from '../data/courseData';
import TopicIcon from '../components/TopicIcon';

export default function Quiz() {
  const { user } = useAuth();
  const { theme } = useTheme();

  const topics = useMemo(() => getTopicsForCourse(user?.course), [user?.course]);
  const quizzes = useMemo(() => getQuizzesForCourse(user?.course), [user?.course]);
  const [allResults, setAllResults] = useState([]);
  const [bestScores, setBestScores] = useState({});

  useEffect(() => {
    if (!user?.id) return;
    Promise.all([getQuizResults(user.id), getAllBestScores(user.id)]).then(([results, scores]) => {
      setAllResults(results);
      setBestScores(scores);
    });
  }, [user]);

  return (
    <div className="p-5 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-black" style={{ color: theme.text }}>Practice Quiz</h2>
        <p className="text-sm mt-1" style={{ color: theme.textMuted }}>Test your knowledge with multiple-choice questions</p>
      </div>

      <div
        className="rounded-2xl p-5 mb-6 flex items-center gap-5 flex-wrap"
        style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
      >
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme.primary + '15' }}>
          <Brain size={24} style={{ color: theme.primary }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm" style={{ color: theme.text }}>Quiz Statistics</p>
          <p className="text-xs" style={{ color: theme.textMuted }}>
            {allResults.length} quiz{allResults.length !== 1 ? 'zes' : ''} completed · {topics.length} topics available
          </p>
        </div>
        {allResults.length > 0 && (
          <div className="flex items-center gap-1">
            <Trophy size={16} style={{ color: '#f59e0b' }} />
            <span className="text-sm font-bold" style={{ color: theme.text }}>
              Best: {Math.max(...allResults.map((r) => Math.round((r.score / r.total) * 100)))}%
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {topics.map((topic, i) => {
          const questions = quizzes[topic.id] || [];
          const best = bestScores[topic.id] ?? null;
          const attempts = allResults.filter((r) => r.lawId === topic.id).length;
          const bestPct = best !== null ? Math.round((best / questions.length) * 100) : null;

          return (
            <div
              key={topic.id}
              className="rounded-2xl p-5 animate-fade-in"
              style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}`, animationDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: topic.color.light, border: `1px solid ${topic.color.badge}33` }}>
                  <TopicIcon name={topic.icon} size={22} color={topic.color.dark} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm" style={{ color: theme.text }}>{topic.title}</h3>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-xs" style={{ color: theme.textMuted }}>{questions.length} questions</span>
                    {attempts > 0 && (
                      <span className="text-xs" style={{ color: theme.textMuted }}>{attempts} attempt{attempts !== 1 ? 's' : ''}</span>
                    )}
                    {bestPct !== null && (
                      <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: bestPct >= 75 ? '#16a34a' : bestPct >= 50 ? '#ca8a04' : '#dc2626' }}>
                        <Star size={11} />
                        Best: {bestPct}%
                      </span>
                    )}
                  </div>

                  {bestPct !== null && (
                    <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
                      <div
                        className="h-full rounded-full animate-progress"
                        style={{ width: `${bestPct}%`, backgroundColor: bestPct >= 75 ? '#22c55e' : bestPct >= 50 ? '#eab308' : '#ef4444' }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <Link
                    to={`/quiz/${topic.id}`}
                    className="btn-press flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold"
                    style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
                  >
                    <Brain size={13} />
                    {attempts > 0 ? 'Retry' : 'Start'}
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    to={`/study/${topic.id}`}
                    className="btn-press flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold"
                    style={{ backgroundColor: theme.surfaceAlt, color: theme.textMuted, border: `1px solid ${theme.border}`, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
                  >
                    <BookOpen size={13} />
                    Study
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
