import { useCallback, useEffect, useState } from "react";
import questions from "../data/questions";

export default function Trivia({
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
        callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question || "Yükleniyor..."}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
