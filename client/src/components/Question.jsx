const RadioButton = ({
  id,
  name,
  value,
  text,
  correctAnswers,
  setCorrectAnswers,
}) => {
  const updateAnswers = (e) => {
    console.log(e.target.value);
    if (e.target.value === "true") {
      setCorrectAnswers([e.target.id, ...correctAnswers]);
    } else {
      setCorrectAnswers(correctAnswers.filter((el) => el !== e.target.id));
    }
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={updateAnswers}
      />
      <label htmlFor={id}>{text}</label>
      <br />
    </>
  );
};

const Question = ({ question, correctAnswers, setCorrectAnswers }) => {
  return (
    <>
      <h4>{question.prompt}?</h4>

      {question.options.map((opt) => (
        <RadioButton
          key={opt.text}
          id={`${question.prompt}-${opt.text}`}
          name={question.prompt}
          value={opt.correct}
          text={opt.text}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
        />
      ))}
      <br />
    </>
  );
};

export default Question;
