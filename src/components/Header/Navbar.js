import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  const { linkActive, setLinkActive } = useState('');

  const hamburgerHandler = () => {
    setLinkActive('active');

  };

  return (
    <header className="header">
      <div className="header_main">
        <img src="../images/pngwing.com.png" alt="#" />
        <ul className="menu">
          <li className="item">

            <NavLink
              to="main"
              id="nav-mainpage"
              className={`link ${linkActive}`}>
              Random
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="aboutus"
              id="nav-aboutus"
              className={`link ${linkActive}`}>   
              ABOUT US
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="events"
              id="nav-events"
              className={`link ${linkActive}`}>
              EVENTS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="signin"
              id="nav-login"
              className={`link ${linkActive}`}>
              LOG IN
            </NavLink>
          </li>
        </ul>
        <div
          className="header_toggle"
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
