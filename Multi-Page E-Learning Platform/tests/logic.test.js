const { 
    calculateScore, 
    calculatePercentage, 
    determinePassFail,
    toggleLessonCompletion
} = require('../js/logic');

// Mock LocalStorage
const localStorageMock = (function() {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => { store[key] = value.toString(); },
        clear: () => { store = {}; }
    };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('E-Learning Platform Logic Enhancement Tests', () => {
    
    beforeEach(() => {
        localStorage.clear();
    });

    test('calculatePercentage should handle zero total', () => {
        expect(calculatePercentage(5, 0)).toBe(0);
    });

    test('toggleLessonCompletion should correctly add and calculate progress', () => {
        // Mock 4 lessons total
        const { progress } = toggleLessonCompletion('test-course', 0, 4);
        expect(progress).toBe(25);
        
        const { progress: nextProgress } = toggleLessonCompletion('test-course', 1, 4);
        expect(nextProgress).toBe(50);
    });

    test('toggleLessonCompletion should handle untoggling', () => {
        toggleLessonCompletion('test-course', 0, 4); // +25
        toggleLessonCompletion('test-course', 1, 4); // +25 = 50
        const { progress } = toggleLessonCompletion('test-course', 0, 4); // -25 = 25
        expect(progress).toBe(25);
    });

    test('toggleLessonCompletion should hit 100% when all lessons are done', () => {
        toggleLessonCompletion('test-course', 0, 2);
        const { progress } = toggleLessonCompletion('test-course', 1, 2);
        expect(progress).toBe(100);
    });
});
