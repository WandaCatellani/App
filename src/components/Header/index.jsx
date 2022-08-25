import './style.css';

import { Nav, Navbar } from 'react-bootstrap/';

import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className='nav' bg='light' expand='lg'>
      <Container>
        <NavLink to='/' className='navLogo'>
          {' '}
          APP{' '}
        </NavLink>
        {/* <Navbar.Brand href=''>APP</Navbar.Brand> */}

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <NavLink className='navLink' to='/'>
              Home
            </NavLink>

            <NavLink className='navLink' to='/game'>
              Game
            </NavLink>

            <NavLink className='navLink' to='/contact'>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
