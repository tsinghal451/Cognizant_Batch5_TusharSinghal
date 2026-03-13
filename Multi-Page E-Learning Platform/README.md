# Multi-Page E-Learning Platform

A premium, responsive web-based learning management system designed for excellence. This platform provides a seamless learning journey with intuitive navigation, real-time progress tracking, and interactive assessments—all built with a focus on clean code and robust architecture.

## 🚀 Key Features

- **Dynamic Dashboard**: A central hub featuring a personalized welcome experience and real-time statistics (Courses in progress, Quizzes completed, Average score), reflecting the user's current state.
- **Adaptive Course Catalog**: A filterable catalog leveraging dynamic rendering to display courses across categories like Programming, Design, and Backend.
- **Interactive Quiz System**: An asynchronous-feeling assessment engine that loads questions dynamically, handles user selections with real-time feedback, and implements rigorous pass/fail logic.
- **Persistent Progress tracking**: Integrated **Web Storage (LocalStorage)** usage to ensure that lesson completions and quiz results persist securely across browser sessions.
- **Breadcrumb Navigation**: Intuitive hierarchical linking and breadcrumbs across all pages to provide clear user orientation and smooth multi-page navigation.

## 🛠️ Technology Stack & Design

- **Frontend Architecture**: 
  - **Semantic HTML5**: Focused on accessibility (ARIA labels, alt text) and proper heading hierarchy.
  - **Vanilla CSS3**: Utilizes a sophisticated design system with **CSS Grid** and **Flexbox** to ensure full mobile responsiveness and visual consistency.
  - **Glassmorphism UI**: High-end aesthetics featuring blurred surfaces, vibrant gradients, and smooth keyframe micro-animations for an elite user experience.
- **State Management**: Robust implementation of browser **LocalStorage** to manage application state client-side without a backend.
- **Automated Testing**: Integrated **Jest** test suite to validate core business logic, including grade calculation and progress state transitions.

## 🔄 Technical Architecture

The application follows a modular "Separation of Concerns" pattern:

1.  **Data Layer (`js/data.js`)**: A structured repository for course content and assessment question banks.
2.  **Logic Layer (`js/logic.js`)**: 
    - **Persistence Engine**: Centralized `loadState()` and `saveState()` functions with data migration support.
    - **Business Rules**: Reusable, pure functions for score calculation, percentage determination, and automated performance feedback.
    - **Error Handling**: Graceful handling of edge cases, such as missing user selections or zero-score scenarios.
3.  **Presentation Layer**: Page-specific scripts that bridge the logic layer with the DOM, ensuring a reactive and intuitive workflow for the user.

## 📂 Project Structure

```text
Multi-Page E-Learning Platform/
├── css/
│   └── style.css          # Design system & responsive layouts
├── js/
│   ├── data.js            # Content & Question repository
│   └── logic.js           # Core state & business logic
├── tests/
│   └── logic.test.js      # Jest unit tests (Logic validation)
├── Courses.html           # Dynamic catalog & curriculum
├── index.html             # User analytics & stats
├── Profile.html           # User record & achievements
├── Quiz.html              # Dynamic assessment engine
├── package.json           # Environment & test configuration
└── README.md              # Documentation
```

## 🏁 Development & Testing

### Prerequisites

- Modern Web Browser (Chrome, Firefox, Edge)
- [Node.js](https://nodejs.org/) (for running tests)

### Setup & Execution

1.  Clone the repository and open `index.html` to start the learning journey.
2.  The system runs entirely **client-side**, requiring no server setup for immediate evaluation.

### Logic Validation (Tests)

To verify the pass/fail and progress logic via Jest:

1.  Install developer tools: `npm install`
2.  Execute test suit: `npm test` (includes 3+ essential logic verification cases).

---
Designed for Excellence. &copy; 2026 LearnerPro.
