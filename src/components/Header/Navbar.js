import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/white-flag-svgrepo-com.svg';

function Navbar() {
  const [menuActive, setMenuActive] = useState('');
  const [mobileMenuActive, setMobileMenuActive] = useState('');

  const hamburgerHandler = () => {
    setMenuActive((prev) => (prev ? undefined : 'active'));
    setMobileMenuActive((prev) => (prev ? undefined : 'act'));
  };

  console.log(menuActive);

  return (
    <header className="header">
      <div className="header_main">
        <img src={logo} alt="horizon" />
        <ul className={`menu ${menuActive}`}>
          <li className="item">
            <NavLink to="/main" id="nav-mainpage" className="link">
              MAIN PAGE
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/search" id="nav-events" className="link">
              EVENTS
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/about" id="nav-aboutus" className="link">
              ABOUT US
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/signin" id="nav-login" className="link">
              SIGN IN
            </NavLink>
          </li>
        </ul>
        <div
          className={`header_toggle ${mobileMenuActive}`}
          id="mobile-menu"
          onClick={hamburgerHandler}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
