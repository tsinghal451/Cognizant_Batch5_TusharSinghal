const courseData = [
  {
    id: "js-basic",
    title: "JavaScript Basics",
    description: "Master the fundamentals of JavaScript programming.",
    lessons: [
      "Introduction to variables",
      "Data types and Operators",
      "Control Flow (if-else, switch)",
      "Functions and Scope",
    ],
    progress: 0,
    category: "Programming",
  },
  {
    id: "web-design",
    title: "Modern Web Design",
    description: "Learn CSS Grid, Flexbox, and UI/UX principles.",
    lessons: [
      "Introduction to HTML5",
      "CSS Selectors and Specificity",
      "CSS Flexbox Layout",
      "CSS Grid Layout",
    ],
    progress: 0,
    category: "Design",
  },
  {
    id: "node-intro",
    title: "Node.js for Beginners",
    description: "Build backend services using JavaScript.",
    lessons: [
      "Environment Setup",
      "Modules and NPM",
      "Asynchronous Programming",
      "Building a Simple Server",
    ],
    progress: 0,
    category: "Backend",
  },
  {
    id: "react-master",
    title: "React Masterclass",
    description: "Build dynamic and scalable UI components with React.",
    lessons: [
      "JSX and Rendering",
      "Props and State Management",
      "Lifecycle Methods & Hooks",
      "React Router & Navigation",
    ],
    progress: 0,
    category: "Frameworks",
  },
  {
    id: "js-adv",
    title: "Advanced JS Concepts",
    description: "Deep dive into Closures, Prototypes, and Async patterns.",
    lessons: [
      "Closures and Scope Chain",
      "Prototypal Inheritance",
      "The Event Loop & Microtasks",
      "Memory Management",
    ],
    progress: 0,
    category: "Programming",
  },
];

const quizQuestions = [
  {
    question:
      "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "const", "Both let and const"],
    correctAnswer: "Both let and const",
  },
  {
    question: "How do you define a grid container in CSS?",
    options: [
      "display: flex;",
      "display: grid;",
      "grid-template: show;",
      "layout: grid;",
    ],
    correctAnswer: "display: grid;",
  },
  {
    question:
      "Which keyword is used to handle multiple conditions in a concise way?",
    options: ["if-else", "switch", "while", "for"],
    correctAnswer: "switch",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Object Module",
      "Desktop Object Management",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which method is used to store data in LocalStorage?",
    options: [
      "localStorage.save()",
      "localStorage.put()",
      "localStorage.setItem()",
      "localStorage.store()",
    ],
    correctAnswer: "localStorage.setItem()",
  },
  {
    question: "What is the virtualization of the DOM commonly referred to as in React?",
    options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Light DOM"],
    correctAnswer: "Virtual DOM",
  },
  {
    question: "Which HTTP method is typically used to update an existing resource completely?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    question: "What is the primary purpose of the Promise.all() method?",
    options: [
      "To run Promises sequentially",
      "To run multiple Promises in parallel and wait for all to resolve",
      "To reject all Promises if one fails",
      "To resolve only the fastest Promise"
    ],
    correctAnswer: "To run multiple Promises in parallel and wait for all to resolve",
  },
  {
    question: "Which CSS property controls the stack order of overlapping elements?",
    options: ["position", "float", "z-index", "stack-order"],
    correctAnswer: "z-index",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { courseData, quizQuestions };
}
