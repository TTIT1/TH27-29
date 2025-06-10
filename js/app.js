// Kiểm tra đăng nhập
if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let correctAnswersCount = 0;
let incorrectQuestions = [];
let timerInterval;
let startTime = new Date();

const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentQuestionSpan = document.getElementById('currentQuestion');
const timeElement = document.getElementById('time');
const resultDiv = document.getElementById('result');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionGrid = document.getElementById('question-grid');

totalQuestionsSpan.textContent = questions.length;

// Function to generate question grid
function generateQuestionGrid() {
    questionGrid.innerHTML = ''; // Clear existing grid
    questions.forEach((_, index) => {
        const questionNumberDiv = document.createElement('div');
        questionNumberDiv.classList.add('question-number');
        if (index === currentQuestion) {
            questionNumberDiv.classList.add('active');
        }
        questionNumberDiv.textContent = index + 1;
        questionNumberDiv.addEventListener('click', () => {
            jumpToQuestion(index);
        });
        questionGrid.appendChild(questionNumberDiv);
    });
}

// Function to jump to a specific question
function jumpToQuestion(index) {
    currentQuestion = index;
    displayQuestion();
    generateQuestionGrid(); // Update grid to highlight current question
}

function updateTimer() {
    const now = new Date();
    const diff = now - startTime;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    updateProgress();
    updateNavigationButtons();
    generateQuestionGrid(); // Update grid on question display
}

// Start timer on quiz load
timerInterval = setInterval(updateTimer, 1000);

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestion + 1;
}

function displayQuestion(feedback = false) {
    const question = questions[currentQuestion];
    
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
            }
            if (userAnswers[currentQuestion] === index && index !== question.correctAnswer) {
                liClasses.push('incorrect');
            }
        } else { // Initial display or navigation (before answer is selected)
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
    generateQuestionGrid(); // Re-generate grid on question display

    // Attach event listener for radio button change if not in feedback mode
    if (!feedback) {
        const radios = questionContainer.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.onchange = () => selectAnswer(parseInt(radio.value));
        });
    }

    // Automatically advance to next question after 2 seconds if feedback is shown
    if (feedback) {
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }
}

function selectAnswer(index) {
    if (userAnswers[currentQuestion] !== null) return; // Prevent multiple selections

    userAnswers[currentQuestion] = index;
    const question = questions[currentQuestion];

    if (index === question.correctAnswer) {
        correctAnswersCount++;
    } else {
        incorrectQuestions.push(currentQuestion);
    }
    
    displayQuestion(true); // Show feedback
}

function updateNavigationButtons() {
    prevButton.disabled = currentQuestion === 0;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Hoàn thành';
        nextButton.onclick = showFinalResult;
    } else {
        nextButton.textContent = 'Câu tiếp →';
        nextButton.onclick = () => nextQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showFinalResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function showFinalResult() {
    clearInterval(timerInterval);
    questionContainer.innerHTML = `
        <div class="final-result-container" style="text-align: center; padding: 20px;">
            <h2>Kết quả của bạn</h2>
            <p style="font-size: 1.2em;">Bạn đã trả lời đúng <span style="color: green; font-weight: bold;">${correctAnswersCount}</span> trên tổng số <span style="font-weight: bold;">${questions.length}</span> câu hỏi.</p>
            <p style="font-size: 1.2em;">Tỷ lệ đúng: <span style="color: ${((correctAnswersCount / questions.length) * 100) >= 50 ? 'green' : 'red'}; font-weight: bold;">${((correctAnswersCount / questions.length) * 100).toFixed(2)}%</span></p>
            <button id="retakeWrongBtn" style="margin-top: 20px; padding: 10px 20px; background-color: #f0ad4e; color: white; border: none; border-radius: 5px; cursor: pointer;">Làm lại câu sai</button>
            <button id="restartQuizBtn" style="margin-left: 10px; margin-top: 20px; padding: 10px 20px; background-color: #5cb85c; color: white; border: none; border-radius: 5px; cursor: pointer;">Làm lại toàn bộ</button>
        </div>
    `;
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    document.getElementById('retakeWrongBtn').addEventListener('click', retakeWrongQuestions);
    document.getElementById('restartQuizBtn').addEventListener('click', restartQuiz);
}

function retakeWrongQuestions() {
    if (incorrectQuestions.length === 0) {
        alert('Bạn đã trả lời đúng tất cả các câu hỏi!');
        return;
    }
    const wrongQuestionsData = incorrectQuestions.map(index => questions[index]);
    questions.splice(0, questions.length, ...wrongQuestionsData); // Replace questions array with wrong ones
    resetQuiz();
}

function restartQuiz() {
    // Reload the page to reset everything if initial questions are loaded dynamically or fetch again
    window.location.reload(); 
    // If questions are static, can just reset using the original questions array:
    // resetQuiz();
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
    generateQuestionGrid(); // Re-generate grid on quiz reset
    displayQuestion();
}

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);

// Initialize the quiz
generateQuestionGrid(); // Initial generation of the question grid
displayQuestion(); 