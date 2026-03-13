# Multi-Page E-Learning Platform

A premium, responsive web-based learning management system designed for excellence. This platform provides a seamless learning journey with intuitive navigation, real-time progress tracking, and interactive assessments.

## 🚀 Key Features

- **Dynamic Dashboard**: Personalized welcome experience with real-time statistics (Courses in progress, Quizzes completed, Average score).
- **Adaptive Course Catalog**: Filterable courses across multiple categories (Programming, Design, Backend, Frameworks).
- **Interactive Quizzes**: Knowledge checks with immediate feedback, scoring, and pass/fail determination.
- **Progress Tracking**: Automatic lesson completion tracking and progress calculation saved locally.
- **Ultra-Premium UI**: Modern glassmorphism design, smooth micro-animations, and a responsive layout.

## 🛠️ Technology Stack

- **Frontend**: 
  - Semantic **HTML5** for structure.
  - **Vanilla CSS3** for styling, featuring custom variables, glassmorphism, and keyframe animations.
  - **Vanilla JavaScript (ES6+)** for application logic and dynamic DOM manipulation.
- **State Management**: Browser **LocalStorage** API for persistent user data across sessions.
- **Testing**: **Jest** for unit testing core business logic.
- **Development**: Node.js & NPM for dependency management and testing tools.

## 🔄 Control Flow & Architecture

The application follows a modular architecture to separate data, logic, and presentation:

1.  **Data Layer (`js/data.js`)**: Contains the static course catalog and quiz question bank.
2.  **Core Logic (`js/logic.js`)**: 
    - **Persistence**: `loadState()` and `saveState()` manage the application state in LocalStorage.
    - **Calculations**: Modular functions for score calculation, percentage determination, and performance feedback.
    - **State Updates**: `toggleLessonCompletion()` handles user progress updates and triggers re-calculations.
3.  **UI Interaction**: Each page (`Dashboard.html`, `Courses.html`, etc.) uses script blocks to bridge the core logic with the DOM, ensuring a reactive user experience.

## 📂 Folder Structure

```text
Multi-Page E-Learning Platform/
├── css/
│   └── style.css          # Global styles and design system
├── js/
│   ├── data.js            # Course and Quiz data
│   └── logic.js           # Core business and storage logic
├── tests/
│   └── logic.test.js      # Jest unit tests for logic.js
├── Courses.html           # Course catalog and lesson view
├── Dashboard.html         # User overview and stats
├── Profile.html           # User profile and settings
├── Quiz.html              # Assessment interface
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🏁 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- (Optional) [Node.js](https://nodejs.org/) if you wish to run automated tests.

### Running the Application

1.  Clone the repository or download the project files.
2.  Navigate to the project root.
3.  Open `Dashboard.html` in your favorite web browser.

### Running Tests

To verify the core logic:

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the test suite:
    ```bash
    npm test
    ```

---
Designed for Excellence. &copy; 2026 LearnerPro.
