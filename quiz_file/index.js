
// =========================================
// QUIZ QUESTIONS
// =========================================

const questions = [

    {
        question:
            "Which language is used to structure a webpage?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        answer: "HTML"
    },


    {
        question:
            "Which language is used to style a webpage?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        answer: "CSS"
    },


    {
        question:
            "Which language is used to add interactivity to a webpage?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        answer: "JavaScript"
    },


    {
        question:
            "Which HTML tag is used to create a hyperlink?",

        options: [
            "<a>",
            "<p>",
            "<h1>",
            "<img>"
        ],

        answer: "<a>"
    },


    {
        question:
            "Which CSS property is used to change text color?",

        options: [
            "background",
            "color",
            "font",
            "text"
        ],

        answer: "color"
    },


    {
        question:
            "Which keyword is used to declare a variable in JavaScript?",

        options: [
            "var",
            "int",
            "string",
            "define"
        ],

        answer: "var"
    },


    {
        question:
            "Which tag is used to display an image in HTML?",

        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],

        answer: "<img>"
    },


    {
        question:
            "Which method is used to print output in the browser console?",

        options: [
            "print()",
            "console.log()",
            "display()",
            "write()"
        ],

        answer: "console.log()"
    },


    {
        question:
            "Which CSS property is used to change the background color?",

        options: [
            "color",
            "background-color",
            "bgcolor",
            "background-style"
        ],

        answer: "background-color"
    },


    {
        question:
            "Which technology is used to create the structure of a webpage?",

        options: [
            "CSS",
            "JavaScript",
            "HTML",
            "Python"
        ],

        answer: "HTML"
    }

];


// =========================================
// QUIZ VARIABLES
// =========================================

// Current question index
let currentQuestion = 0;


// User score
let score = 0;


// Timer
let timeLeft = 10;


// Timer interval
let timer;


// =========================================
// GET HTML ELEMENTS
// =========================================

const questionNumber =
    document.getElementById("questionNumber");


const question =
    document.getElementById("question");


const options =
    document.getElementById("options");


const time =
    document.getElementById("time");


const nextButton =
    document.getElementById("nextButton");


const quiz =
    document.getElementById("quiz");


const result =
    document.getElementById("result");


// =========================================
// LOAD FIRST QUESTION
// =========================================

loadQuestion();


// =========================================
// LOAD QUESTION FUNCTION
// =========================================

function loadQuestion() {

    // Stop previous timer
    clearInterval(timer);


    // Reset timer
    timeLeft = 10;


    // Display 10 seconds
    time.textContent = timeLeft;


    // Get current question
    const current =
        questions[currentQuestion];


    // Display question number
    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    // Display question
    question.textContent =
        current.question;


    // Clear previous options
    options.innerHTML = "";


    // Create options
    current.options.forEach(function (option) {

        // Create label
        const label =
            document.createElement("label");


        // Add CSS class
        label.classList.add("option");


        // Add radio button
        label.innerHTML = `

            <input
                type="radio"
                name="answer"
                value="${option}"
            >

            ${option}

        `;


        // Add option to HTML
        options.appendChild(label);

    });


    // Change button text
    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Submit Quiz";

    } else {

        nextButton.textContent =
            "Next Question";

    }


    // Start timer
    startTimer();

}


// =========================================
// START TIMER
// =========================================

function startTimer() {

    timer = setInterval(function () {

        // Decrease time
        timeLeft--;


        // Display time
        time.textContent =
            timeLeft;


        // Check if time is over
        if (timeLeft <= 0) {

            // Stop timer
            clearInterval(timer);


            // Move to next question
            nextQuestion();

        }

    }, 1000);

}


// =========================================
// NEXT QUESTION
// =========================================

function nextQuestion() {

    // Stop timer
    clearInterval(timer);


    // Get selected answer
    const selectedAnswer =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    // Check if user selected an answer
    if (selectedAnswer) {

        // Check answer
        if (
            selectedAnswer.value ===
            questions[currentQuestion].answer
        ) {

            // Increase score
            score++;

        }

    }


    // Check if this is last question
    if (
        currentQuestion ===
        questions.length - 1
    ) {

        // Show final result
        showResult();

    } else {

        // Move to next question
        currentQuestion++;


        // Load next question
        loadQuestion();

    }

}


// =========================================
// SHOW RESULT
// =========================================

function showResult() {

    // Stop timer
    clearInterval(timer);


    // Hide quiz
    quiz.style.display = "none";


    // Show result
    result.style.display = "block";


    // Feedback variables
    let feedback;

    let message;


    // =====================================
    // SCORE 8 TO 10
    // =====================================

    if (score >= 8) {

        feedback =
            "Excellent! 🎉";


        message =
            "Amazing work! You have a strong understanding of Full Stack Development.";

    }


    // =====================================
    // SCORE 5 TO 7
    // =====================================

    else if (score >= 5) {

        feedback =
            "Good Job! 👍";


        message =
            "Good effort! You have a decent understanding, but keep practicing to improve your skills.";

    }


    // =====================================
    // SCORE 0 TO 4
    // =====================================

    else {

        feedback =
            "Keep Practicing! 💪";


        message =
            "Don't worry! Review the basics and practice more. You will improve with time.";

    }


    // =====================================
    // DISPLAY RESULT
    // =====================================

    result.innerHTML = `

        <h2>
            Quiz Completed 🎉
        </h2>


        <h3>
            Your Score: ${score} / 10
        </h3>


        <h3>
            ${feedback}
        </h3>


        <p>
            ${message}
        </p>


        <button
            class="restart-button"
            onclick="restartQuiz()"
        >
            Restart Quiz
        </button>

    `;

}


// =========================================
// RESTART QUIZ
// =========================================

function restartQuiz() {

    // Reset question
    currentQuestion = 0;


    // Reset score
    score = 0;


    // Reset timer
    timeLeft = 10;


    // Hide result
    result.style.display = "none";


    // Show quiz
    quiz.style.display = "block";


    // Load first question
    loadQuestion();

}

