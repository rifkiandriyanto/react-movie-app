import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface HandleSearchProps {
  handleSearch: (query: string) => void;
}

const NavBar = ({ handleSearch }: HandleSearchProps) => {
  const [querySearch, setQuerySearch] = useState('');

  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Nav className='me-auto w-100'>
            <Container
              style={{
                flexDirection: 'row',
                display: 'flex',
              }}
            >
              <Nav.Link href='/movies-popular'>Popular Movie</Nav.Link>
              <Nav.Link href='/movies-tranding'>Tranding Movie</Nav.Link>
            </Container>

            <Container
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Form.Control
                type='search'
                id='search'
                aria-describedby='search'
                placeholder='Search'
                onChange={(event) => setQuerySearch(event.target.value)}
                value={querySearch}
              />
              <Button
                variant='primary'
                style={{
                  marginLeft: '1rem',
                }}
                onClick={() => handleSearch(querySearch)}
              >
                Search
              </Button>
            </Container>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
