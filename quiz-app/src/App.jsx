import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Porotta is made up of? ",
      answers: [{ text: "Atta" }, { text: "Maida", isCorrect: true  }, { text: "Aripodi"},{text:"Ragipodi"}],
    },
    {
      question: "Current Chief Minister of Kerala?",
      answers: [
        { text: "John Cena" },
        { text: "Pinarayi Vijayan", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Captain America" },
      ],
    },
    {
      question: "Where is Statue of Unity is located?",
      answers: [
        { text: "Kerala" },
        { text: "Delhi" },
        { text: "Madhya Pradesh" },
        { text: "Gujarat", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "Kochi" },
        { text: "London" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;