import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/movies-popular'>Popular Movie</Nav.Link>
            <Nav.Link href='/movies-tranding'>Tranding Movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
