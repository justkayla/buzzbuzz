import Container from "react-bootstrap/Container";
import Quizzlet from "../components/Quizzlet";

const Quiz = () => {
  return (
    <Container style={{ paddingTop: "1em" }}>
      <h1>Welcome to the Friends Quiz</h1>
      <Quizzlet />
    </Container>
  );
};

export default Quiz;
