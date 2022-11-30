import { useState, useEffect } from "react";
import Question from "./Question";
import Review from "./Review";

const Quizzlet = () => {
  const [quizData, setQuizData] = useState();
  const [quizResults, setQuizResults] = useState();
  const quizForm = document.querySelector("form");

  const submitForm = (e) => {
    e.preventDefault();

    const correctCount = Array.from(quizForm.children).filter(
      (el) => el.checked && el.value === "true"
    );

    setQuizResults(correctCount.length / quizData.questions.length);
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
      {quizData && isNaN(quizResults) && (
        <form>
          {quizData.questions.map((question) => (
            <Question key={question.prompt} question={question} />
          ))}

          <button onClick={submitForm}>Submit!</button>
        </form>
      )}

      {!isNaN(quizResults) && <h2>You got {quizResults * 100}%!</h2>}
      {quizData && (
          <Review quizId={quizData._id} />
      )}
    </>
  );
};

export default Quizzlet;
