import LAWS from './laws';
import QUIZZES from './quizzes';
import NURSING_TOPICS from './nursing';
import NURSING_QUIZZES from './nursingQuizzes';
import ENGINEERING_TOPICS from './engineering';
import ENGINEERING_QUIZZES from './engineeringQuizzes';
import SOCIAL_WORK_TOPICS from './socialWork';
import SOCIAL_WORK_QUIZZES from './socialWorkQuizzes';

export function getTopicsForCourse(course) {
  switch ((course || '').toLowerCase().trim()) {
    case 'nursing': return NURSING_TOPICS;
    case 'engineering': return ENGINEERING_TOPICS;
    case 'social-work': return SOCIAL_WORK_TOPICS;
    default: return LAWS;
  }
}

export function getQuizzesForCourse(course) {
  switch ((course || '').toLowerCase().trim()) {
    case 'nursing': return NURSING_QUIZZES;
    case 'engineering': return ENGINEERING_QUIZZES;
    case 'social-work': return SOCIAL_WORK_QUIZZES;
    default: return QUIZZES;
  }
}
