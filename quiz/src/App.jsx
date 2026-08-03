import { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    question: "Which language is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    question: "Which library is used to build user interfaces?",
    options: ["React", "Django", "MySQL", "Node.js"],
    answer: "React",
  },
  {
    question: "Which command creates a React app using Vite?",
    options: [
      "npm install react",
      "npm create vite@latest",
      "react create app",
      "npm start react",
    ],
    answer: "npm create vite@latest",
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    answer: "useState",
  },
  {
    question: "Which hook is commonly used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useEffect",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "JSON XML",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which command starts a Vite development server?",
    options: [
      "npm run dev",
      "npm start vite",
      "npm run start",
      "vite start",
    ],
    answer: "npm run dev",
  },
  {
    question: "Which method is used to render a list in React?",
    options: [".filter()", ".map()", ".reduce()", ".forEach()"],
    answer: ".map()",
  },
  {
    question: "Which file usually contains the main App component?",
    options: [
      "App.jsx",
      "package.json",
      "index.html",
      "vite.config.js",
    ],
    answer: "App.jsx",
  },
  {
    question: "Which React hook is used to perform side effects?",
    options: ["useState", "useEffect", "useCallback", "useReducer"],
    answer: "useEffect",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  // Timer
  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  // Select answer
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // Next question
  const nextQuestion = () => {
    // Check answer
    if (selectedAnswer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Last question
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer("");
      setTimeLeft(10);
    }
  };

  // Restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setTimeLeft(10);
    setShowResult(false);
  };

  // Feedback based on score
  const getFeedback = () => {
    if (score >= 8) {
      return {
        title: "Excellent! 🎉",
        message:
          "Great job! You have a strong understanding of React. Keep learning and building more projects!",
      };
    } else if (score >= 5) {
      return {
        title: "Good Job! 👍",
        message:
          "You have a good understanding of the basics. Review the topics you missed and keep practicing!",
      };
    } else {
      return {
        title: "Keep Practicing! 💪",
        message:
          "Don't worry! Keep learning React fundamentals and practice more quizzes. You will improve!",
      };
    }
  };

  const feedback = getFeedback();

  return (
    <div className="quiz-container">
      <div className="quiz-box">

        {showResult ? (
          <div className="result">

            <h1>Quiz Completed 🎉</h1>

            <h2>
              Your Score: {score} / {questions.length}
            </h2>

            <h3>{feedback.title}</h3>

            <p>{feedback.message}</p>

            <button onClick={restartQuiz}>
              Restart Quiz
            </button>

          </div>
        ) : (
          <>
            <h1>React Quiz</h1>

            <div className="quiz-info">
              <p>
                Question {currentQuestion + 1} of{" "}
                {questions.length}
              </p>

              <p className="timer">
                ⏱️ {timeLeft}s
              </p>
            </div>

            <h2>{question.question}</h2>

            <div className="options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={
                    selectedAnswer === option
                      ? "selected"
                      : ""
                  }
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default App;