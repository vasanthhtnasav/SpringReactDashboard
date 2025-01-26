import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Employee Management</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to="/">Employee</Nav.Link>
          <Nav.Link as={Link} to="/employee">POST Employee</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
