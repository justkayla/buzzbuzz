
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useAppContext } from "../utils/AppContext";
import Quizzlet from "../components/Quizzlet";

/**
 * If not logged in, redirect to login page
 */

const Quiz = () => {
  const { appState, setAppState } = useAppContext();
  
  if (!appState.user) {
    // alert? you need to be logged in?
    window.location.href = "/";
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

