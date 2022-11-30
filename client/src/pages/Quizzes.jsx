import { useState } from "react";
import { useAppContext } from "../utils/AppContext";
import { Container } from "react-bootstrap";
import Quizzlet from "../components/Quizzlet";
import Warning from "../components/Alert";

/**
 * If not logged in, redirect to login page
 */

const Quiz = () => {
  const { appState, setAppState } = useAppContext();

  if (!appState.user) {
    // alert? you need to be logged in?
    return <Warning />;
  } else {
    return (
      <Container style={{ paddingTop: "1em" }}>
        <h1>Welcome to the Quizzes page</h1>
        <Quizzlet />
      </Container>
    );
  }
};

export default Quiz;
