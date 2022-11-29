import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../utils/AppContext";

/**
 * If user is logged in
 * Display Home, Quizzes, Profile, and Logout tabs
 * else (if user is not logged in)
 * Display only Login tab
 */

const Navigation = () => {
  const { appState, setAppState, logout } = useAppContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">buzzbuzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/quizzes">Quizzes</Nav.Link>

            <Nav.Link href="/user/:id">Profile</Nav.Link>

            {(!appState || !appState.user) && (
              <Nav.Link href="/">Login</Nav.Link>
            )}

            {appState && appState.user && (
              <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
