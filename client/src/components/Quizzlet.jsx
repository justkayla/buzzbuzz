import { useState, useEffect } from "react";
import Question from "./Question";

const Quizzlet = () => {
  const [quizData, setQuizData] = useState();
  const [quizResults, setQuizResults] = useState();
  const quizForm = document.getElementById("quiz-form");

  const submitForm = (e) => {
    e.preventDefault();

    const correctAnswers = Array.from(quizForm.children).filter(
      (el) => el.checked && el.value === "true"
    );

    setQuizResults(correctAnswers.length / quizData.questions.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/quiz/");
      const data = (await res.json()).payload[0];

      setQuizData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {quizData && !quizResults && (
        <form id="quiz-form">
          {quizData.questions.map((question, i) => (
            <Question question={question} i={i} />
          ))}

          <button onClick={submitForm}>Submit!</button>
        </form>
      )}

      {quizResults && <h2>You got {quizResults * 100}%!</h2>}
    </>
  );
};

export default Quizzlet;
