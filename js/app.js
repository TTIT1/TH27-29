import questionsData from './questions.js'; // Đổi tên import để tránh trùng tên biến
import { trackUserSession, trackQuizCompletion, trackQuestionInteraction } from './firebase-config.js';
import { shuffleArray, shuffleOptions } from './utils.js'; // Import từ utils.js

// ===================================
// GLOBAL VARIABLES (Khai báo biến toàn cục)
// ===================================
let questions = []; // Mảng câu hỏi hiện tại (có thể đã đảo)
let originalQuestions = [...questionsData]; // Luôn lưu trữ câu hỏi gốc không đảo

// Các biến trạng thái của Quiz
let currentQuestion = 0;
let userAnswers = []; // Sẽ khởi tạo lại kích thước khi questions được tải
let correctAnswersCount = 0;
let incorrectQuestions = [];
let timerInterval;
let startTime = new Date();

// Khai báo các biến DOM (sẽ được gán giá trị trong DOMContentLoaded)
let totalQuestionsSpan;
let currentQuestionSpan;
let timeElement;
let resultDiv;
let prevButton;
let nextButton;
let questionContainer;
let questionGrid;
let submitButton;

// ===================================
// FUNCTIONS (Định nghĩa tất cả các hàm trước)
// ===================================

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    if (questions.length === 0) {
        progressBar.style.width = '0%';
        currentQuestionSpan.textContent = '0';
        totalQuestionsSpan.textContent = '0';
        return;
    }
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestion + 1;
    totalQuestionsSpan.textContent = questions.length;
}

function generateQuestionGrid() {
    questionGrid.innerHTML = '';
    questions.forEach((_, index) => {
        const questionNumberDiv = document.createElement('div');
        questionNumberDiv.classList.add('question-number');
        if (index === currentQuestion) {
            questionNumberDiv.classList.add('active');
        } else if (userAnswers[index] !== null) {
            questionNumberDiv.classList.add('answered');
        }
        questionNumberDiv.textContent = index + 1;
        questionNumberDiv.addEventListener('click', () => {
            jumpToQuestion(index);
        });
        questionGrid.appendChild(questionNumberDiv);
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    displayQuestion();
    generateQuestionGrid();
}

function updateTimer() {
    const now = new Date();
    const diff = (now - startTime) / 1000;
    timeElement.textContent = formatTime(diff);
    updateProgress();
    updateNavigationButtons();
    generateQuestionGrid();
}

function displayQuestion(feedback = false) {
    const question = questions[currentQuestion];

    if (!question || typeof question.question !== 'string' || !Array.isArray(question.options) || question.options.length === 0) {
        console.error("Lỗi: Đối tượng câu hỏi không hợp lệ hoặc thiếu thuộc tính cần thiết.", question);
        questionContainer.innerHTML = "<p>Đã xảy ra lỗi khi tải câu hỏi. Vui lòng kiểm tra console để biết thêm chi tiết.</p>";
        return;
    }
    console.log("Đang hiển thị câu hỏi:", currentQuestion + 1, question);
    
    let html = `
        <div class="question">
            <h2 class="question-text">Câu ${currentQuestion + 1}: ${question.question}</h2>
            <ul class="options">
    `;
    
    question.options.forEach((option, index) => {
        const optionId = `q${currentQuestion}-option${index}`;
        let liClasses = ['option'];
        let checked = '';
        let isDisabled = feedback ? 'disabled' : '';

        if (feedback) {
            if (index === question.correctAnswer) {
                liClasses.push('correct');
            } else if (userAnswers[currentQuestion] === index) {
                liClasses.push('incorrect');
            }
        } else {
            if (userAnswers[currentQuestion] === index) {
                checked = 'checked';
            }
        }

        html += `
            <li class="${liClasses.join(' ')}">
                <input type="radio" id="${optionId}" name="question${currentQuestion}" value="${index}" ${checked} ${isDisabled}>
                <label for="${optionId}">${option}</label>
            </li>
        `;
    });
    
    html += `
            </ul>
        </div>
    `;
    
    questionContainer.innerHTML = html;
    updateProgress();
    updateNavigationButtons();
    generateQuestionGrid();

    if (!feedback) {
        const radios = questionContainer.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.onchange = () => selectAnswer(parseInt(radio.value));
        });
    }

    if (feedback) {
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }
    trackQuestionInteraction(currentQuestion + 1, 'question_viewed');
}

function selectAnswer(index) {
    if (userAnswers[currentQuestion] !== null) return;

    userAnswers[currentQuestion] = index;
    const question = questions[currentQuestion];

    if (index === question.correctAnswer) {
        correctAnswersCount++;
    } else {
        incorrectQuestions.push(currentQuestion);
    }
    
    displayQuestion(true);
    trackQuestionInteraction(currentQuestion + 1, 'answer_selected');
}

function updateNavigationButtons() {
    prevButton.disabled = currentQuestion === 0;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Hoàn thành';
        nextButton.onclick = submitQuiz;
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.textContent = 'Câu tiếp →';
        nextButton.onclick = () => nextQuestion();
        submitButton.style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000;
    
    correctAnswersCount = 0;
    incorrectQuestions = [];
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswersCount++;
        } else {
            incorrectQuestions.push(index + 1);
        }
    });
    
    const score = (correctAnswersCount / questions.length) * 100;
    
    trackQuizCompletion(score, questions.length, timeSpent);
    
    resultDiv.innerHTML = `
        <h2>Kết quả</h2>
        <p>Điểm số: ${score.toFixed(2)}%</p>
        <p>Số câu đúng: ${correctAnswersCount}/${questions.length}</p>
        <p>Thời gian làm bài: ${formatTime(timeSpent)}</p>
        ${incorrectQuestions.length > 0 ? `<p>Các câu sai: ${incorrectQuestions.join(', ')}</p>` : ''}
        <button id="restartQuizBtn">Làm lại toàn bộ</button>
        <button id="retakeWrongBtn">Làm lại câu sai</button>
    `;
    
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';

    document.getElementById('retakeWrongBtn').addEventListener('click', retakeWrongQuestions);
    document.getElementById('restartQuizBtn').addEventListener('click', restartQuiz);
}

function retakeWrongQuestions() {
    if (incorrectQuestions.length === 0) {
        alert('Bạn đã trả lời đúng tất cả các câu hỏi!');
        return;
    }
    const wrongQuestionsData = incorrectQuestions.map(index => originalQuestions[index - 1]);
    questions.splice(0, questions.length, ...wrongQuestionsData);
    resetQuiz();
}

function restartQuiz() {
    questions = [...originalQuestions];
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    correctAnswersCount = 0;
    incorrectQuestions = [];
    startTime = new Date();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'inline-block'; 
    questions = [...originalQuestions];
    generateQuestionGrid();
    displayQuestion();
}

// ===================================
// INITIALIZATION AND EVENT LISTENERS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra đăng nhập (đặt ở đây để đảm bảo DOM sẵn sàng trước khi chuyển hướng)
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return; // Dừng thực thi nếu chưa đăng nhập
    }

    // Gán các biến DOM sau khi tài liệu đã được tải
    totalQuestionsSpan = document.getElementById('totalQuestions');
    currentQuestionSpan = document.getElementById('currentQuestion');
    timeElement = document.getElementById('time');
    resultDiv = document.getElementById('result');
    prevButton = document.getElementById('prev-btn');
    nextButton = document.getElementById('next-btn');
    questionContainer = document.getElementById('question-container');
    questionGrid = document.getElementById('question-grid');
    submitButton = document.getElementById('submit-btn');

    // Bắt đầu theo dõi phiên người dùng (đặt ở đây để đảm bảo DOM sẵn sàng)
    trackUserSession();

    // Tải câu hỏi từ localStorage hoặc sử dụng mặc định ban đầu
    const storedQuestions = localStorage.getItem('shuffledQuestions');
    if (storedQuestions) {
        try {
            questions = JSON.parse(storedQuestions);
        } catch (e) {
            console.error("Error parsing shuffled questions from localStorage:", e);
            questions = [...originalQuestions]; // Fallback to original if parsing fails
        }
    } else {
        questions = [...originalQuestions]; // Sử dụng câu hỏi mặc định nếu không có trong localStorage
    }

    // Khởi tạo userAnswers sau khi biết questions.length cuối cùng
    userAnswers = new Array(questions.length).fill(null);

    // Cập nhật tổng số câu hỏi
    totalQuestionsSpan.textContent = questions.length;

    // Khởi tạo hiển thị quiz
    generateQuestionGrid();
    displayQuestion();

    // Bắt đầu hẹn giờ
    timerInterval = setInterval(updateTimer, 1000);

    // Event listeners cho các nút điều hướng chính
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
}); 