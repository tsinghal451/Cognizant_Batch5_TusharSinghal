function calculateScore(userAnswers, quizQuestions) {
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === quizQuestions[index].correctAnswer) {
      score++;
    }
  });
  return score;
}

function calculatePercentage(score, total) {
  if (total === 0) return 0;
  return (score / total) * 100;
}

function determinePassFail(percentage) {
  const PASS_THRESHOLD = 60;
  if (percentage >= PASS_THRESHOLD) {
    return { passed: true, message: "Congratulations! You passed." };
  } else {
    return {
      passed: false,
      message: "Better luck next time. Try reviewing the lessons.",
    };
  }
}

function getPerformanceFeedback(percentage) {
  const category = Math.floor(percentage / 10);
  let message = "";

  switch (category) {
    case 10:
    case 9:
      message = "Outstanding achievement! You're a master.";
      break;
    case 8:
      message = "Great job! You have a strong grasp of the material.";
      break;
    case 7:
    case 6:
      message = "Good effort! You've passed, but there's room to grow.";
      break;
    default:
      message = "Don't give up! Keep practicing to improve your skills.";
      break;
  }
  return message;
}

const APP_STORAGE_KEY = "elearning_state";

function saveState(state) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const state = localStorage.getItem(APP_STORAGE_KEY);
  const defaultState = {
    user: { name: "Learner", email: "learner@example.com" },
    completedCourses: [], 
    quizResults: [],
  };

  if (!state) return defaultState;
  
  const parsed = JSON.parse(state);
 
  if (parsed.completedCourses) {
    parsed.completedCourses = parsed.completedCourses.map(course => {
    
      if (!course.completedLessons) {
        course.completedLessons = [];
      }
      if (course.progress === undefined) {
        course.progress = 0;
      }
      return course;
    });
  }
  return parsed;
}

function toggleLessonCompletion(courseId, lessonIndex, totalLessons) {
  const state = loadState();
  let courseRecord = state.completedCourses.find((c) => c.id === courseId);

  if (!courseRecord) {
    courseRecord = { id: courseId, completedLessons: [], progress: 0 };
    state.completedCourses.push(courseRecord);
  }

  const lessonPos = courseRecord.completedLessons.indexOf(lessonIndex);
  if (lessonPos > -1) {
    courseRecord.completedLessons.splice(lessonPos, 1); // Uncheck
  } else {
    courseRecord.completedLessons.push(lessonIndex); // Check
  }

  
  courseRecord.progress = Math.round((courseRecord.completedLessons.length / totalLessons) * 100);

  saveState(state);
  return { state, progress: courseRecord.progress };
}

function getCourseProgress(courseId) {
  const state = loadState();
  const courseRecord = state.completedCourses.find((c) => c.id === courseId);
  return (courseRecord && courseRecord.progress !== undefined) ? courseRecord.progress : 0;
}

function isLessonCompleted(courseId, lessonIndex) {
  const state = loadState();
  const courseRecord = state.completedCourses.find((c) => c.id === courseId);
  return courseRecord ? courseRecord.completedLessons.includes(lessonIndex) : false;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calculateScore,
    calculatePercentage,
    determinePassFail,
    getPerformanceFeedback,
    loadState,
    saveState,
    toggleLessonCompletion,
    getCourseProgress,
    isLessonCompleted,
  };
}
