import { useState, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, SkipForward, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { saveQuizResult } from '../utils/storage';
import { getTopicsForCourse, getQuizzesForCourse } from '../data/courseData';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import QuizResults from '../components/Quiz/QuizResults';
import TopicIcon from '../components/TopicIcon';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizSession() {
  const { lawId } = useParams();
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const topics = useMemo(() => getTopicsForCourse(user?.course), [user?.course]);
  const quizzes = useMemo(() => getQuizzesForCourse(user?.course), [user?.course]);

  const topic = topics.find((t) => t.id === lawId);
  const allQuestions = quizzes[lawId] || [];

  const [questions, setQuestions] = useState(() => shuffle(allQuestions));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => Array(allQuestions.length).fill({ selected: null, answered: false }));
  const [showAnswer, setShowAnswer] = useState(false);
  const [done, setDone] = useState(false);

  if (!topic || allQuestions.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="font-semibold" style={{ color: theme.text }}>No quiz available for this topic yet.</p>
        <Link to="/quiz" className="text-sm font-semibold mt-2 inline-block" style={{ color: theme.primary }}>
          Back to Quizzes
        </Link>
      </div>
    );
  }

  const currentQ = questions[current];
  const currentAnswer = answers[current];

  const handleSelect = useCallback((idx) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = { selected: idx, answered: false };
      return updated;
    });
  }, [current]);

  const handleConfirm = useCallback(() => {
    setShowAnswer(true);
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = { ...updated[current], answered: true };
      return updated;
    });
  }, [current]);

  const handleNext = useCallback(async () => {
    setShowAnswer(false);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      const score = answers.filter((a, i) => a.selected === questions[i].correct).length;
      const result = { lawId, score, total: questions.length, date: new Date().toISOString(), answers };
      await saveQuizResult(user.id, result);
      setDone(true);
    }
  }, [current, questions, answers, lawId, user]);

  const handleSkip = useCallback(async () => {
    setShowAnswer(false);
    setAnswers((prev) => {
      const updated = [...prev];
      if (!updated[current].answered) updated[current] = { selected: null, answered: false };
      return updated;
    });
    if (current < questions.length - 1) setCurrent((c) => c + 1);
    else {
      const score = answers.filter((a, i) => a.selected === questions[i].correct).length;
      const result = { lawId, score, total: questions.length, date: new Date().toISOString(), answers };
      await saveQuizResult(user.id, result);
      setDone(true);
    }
  }, [current, questions, answers, lawId, user]);

  const handleRetry = () => {
    setQuestions(shuffle(allQuestions));
    setAnswers(Array(allQuestions.length).fill({ selected: null, answered: false }));
    setCurrent(0);
    setShowAnswer(false);
    setDone(false);
  };

  const score = useMemo(
    () => answers.filter((a, i) => i < current || done ? a.selected === questions[i]?.correct : false).length,
    [answers, questions, current, done]
  );

  const finalScore = useMemo(
    () => answers.filter((a, i) => a.selected === questions[i]?.correct).length,
    [answers, questions]
  );

  if (done) {
    return (
      <div className="p-5 md:p-8 max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/quiz')}
          className="btn-press flex items-center gap-1.5 text-sm font-medium mb-6"
          style={{ color: theme.textMuted, transition: 'opacity 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
        >
          <ArrowLeft size={16} />
          Back to Quizzes
        </button>
        <QuizResults
          score={finalScore}
          total={questions.length}
          lawId={lawId}
          lawTitle={topic.title}
          answers={answers}
          questions={questions}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="p-5 md:p-8 max-w-2xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate('/quiz')}
        className="btn-press flex items-center gap-1.5 text-sm font-medium mb-5"
        style={{ color: theme.textMuted, transition: 'opacity 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
      >
        <ArrowLeft size={16} />
        Exit Quiz
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: topic.color.light }}
        >
          <TopicIcon name={topic.icon} size={20} color={topic.color.dark} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate" style={{ color: theme.text }}>{topic.shortTitle}</p>
          <p className="text-xs" style={{ color: theme.textMuted }}>
            Question {current + 1} of {questions.length}
          </p>
        </div>
        <div
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
        >
          {score}/{current + (showAnswer ? 1 : 0)}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full overflow-hidden mb-6" style={{ backgroundColor: theme.border }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, backgroundColor: theme.primary, transition: 'width 300ms cubic-bezier(0.23,1,0.32,1)' }}
        />
      </div>

      {/* Question dot nav */}
      <div className="flex gap-1.5 flex-wrap mb-6">
        {questions.map((_, i) => {
          const ans = answers[i];
          let bg = theme.border;
          if (i === current) bg = theme.primary;
          else if (ans.answered) bg = ans.selected === questions[i].correct ? '#22c55e' : '#ef4444';
          else if (ans.selected !== null) bg = theme.accent;
          return (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: bg,
                transition: 'background-color 200ms ease, transform 220ms var(--ease-out), box-shadow 220ms ease',
                transform: i === current ? 'scale(1.45)' : 'scale(1)',
                boxShadow: i === current ? `0 0 0 3px ${theme.primary}30` : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Question card — keyed so it fades in on every question change */}
      <div
        key={current}
        className="rounded-2xl p-5 md:p-6 mb-5 animate-fade-in"
        style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}` }}
      >
        <QuizQuestion
          question={currentQ}
          selected={currentAnswer.selected}
          onSelect={handleSelect}
          showAnswer={showAnswer}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {!showAnswer && (
          <button
            onClick={handleSkip}
            className="btn-press flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: theme.surfaceAlt, color: theme.textMuted, border: `1px solid ${theme.border}`, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            <SkipForward size={15} />
            Skip
          </button>
        )}

        {!showAnswer && currentAnswer.selected !== null && (
          <button
            onClick={handleConfirm}
            className="btn-press flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold"
            style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            <Send size={15} />
            Submit Answer
          </button>
        )}

        {!showAnswer && currentAnswer.selected === null && (
          <div
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: theme.surfaceAlt, color: theme.textMuted, border: `1px solid ${theme.border}` }}
          >
            Select an answer
          </div>
        )}

        {showAnswer && (
          <button
            onClick={handleNext}
            className="btn-press flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold"
            style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            {current < questions.length - 1 ? (
              <>Next Question <ArrowRight size={15} /></>
            ) : (
              <>See Results <ArrowRight size={15} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
