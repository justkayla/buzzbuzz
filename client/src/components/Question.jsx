const Question = ({ question, i }) => {
  return (
    <>
      <p>{question.prompt}?</p>
      {question.options.map((opt, j) => {
        const id = `q${i}o${j}`;
        return (
          <>
            <input type="radio" id={id} name={`q${i}`} value={opt.correct} />
            <label htmlFor={id}>{opt.text}</label>
            <br />
          </>
        );
      })}
      <br />
    </>
  );
};

export default Question;
