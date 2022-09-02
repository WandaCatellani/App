import './style.css';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/heart.png';

function NavBar() {
  return (
    <>
      <nav
        className='navbar is-fixed-top is-info'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/'>
            <img src={logo} alt='logo' />
          </NavLink>

          <NavLink
            to='/'
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </NavLink>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <NavLink to='/' className='navbar-item'>
              Home
            </NavLink>

            <NavLink to='/' className='navbar-item'>
              Documentation
            </NavLink>

            <div className='navbar-item has-dropdown is-hoverable'>
              <NavLink to='/' className='navbar-link'>
                More
              </NavLink>

              <div className='navbar-dropdown'>
                <NavLink to='/' className='navbar-item'>
                  About
                </NavLink>

                <NavLink to='/' className='navbar-item'>
                  Jobs
                </NavLink>

                <NavLink to='/' className='navbar-item'>
                  Contact
                </NavLink>

                <hr className='navbar-divider' />

                <NavLink to='/' className='navbar-item'>
                  Report an issue
                </NavLink>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <NavLink to='/' className='button is-primary'>
                  <strong>Sign up</strong>
                </NavLink>

                <NavLink to='/' className='button is-light'>
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
