import { Container, Nav, Navbar } from "react-bootstrap";

// logout function is in AppContext, import AppContext to access

/**
 * If user is logged in
 * Display Home, Quizzes, Profile, and Logout tabs
 * If user is not logged in
 * Display only Login tab
*/

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">My Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/quizzes">Quizzes</Nav.Link>

            <Nav.Link href="/user/:id">Profile</Nav.Link>

            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
