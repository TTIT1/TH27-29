// Firebase configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyBnPF0n_mUUzuW0-bzqye9QsZqBr6LrsJk",
        authDomain: "iotquizapp.firebaseapp.com",
        projectId: "iotquizapp",
        storageBucket: "iotquizapp.firebasestorage.app",
        messagingSenderId: "61640007520",
        appId: "1:61640007520:web:f587af34e9b61b96af8805",
        measurementId: "G-M2SL6VR5TN"
      
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// Track page views
analytics.logEvent('page_view');

// Track quiz events
export function trackQuizEvent(eventName, eventParams = {}) {
    analytics.logEvent(eventName, eventParams);
}

// Track user session
export function trackUserSession() {
    const sessionStartTime = new Date();
    
    // Track session start
    analytics.logEvent('session_start', {
        start_time: sessionStartTime.toISOString()
    });

    // Track session end when user leaves
    window.addEventListener('beforeunload', () => {
        const sessionEndTime = new Date();
        const sessionDuration = (sessionEndTime - sessionStartTime) / 1000; // in seconds
        
        analytics.logEvent('session_end', {
            duration: sessionDuration,
            end_time: sessionEndTime.toISOString()
        });
    });
}

// Track quiz completion
export function trackQuizCompletion(score, totalQuestions, timeSpent) {
    analytics.logEvent('quiz_completed', {
        score: score,
        total_questions: totalQuestions,
        time_spent: timeSpent,
        completion_date: new Date().toISOString()
    });
}

// Track question interactions
export function trackQuestionInteraction(questionNumber, action) {
    analytics.logEvent('question_interaction', {
        question_number: questionNumber,
        action: action,
        timestamp: new Date().toISOString()
    });
} 