import { Container, Nav, Navbar } from "react-bootstrap";

// useState hook to update buttons to reflect logged in user?

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
