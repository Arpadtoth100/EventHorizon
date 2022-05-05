import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { active, setActive } = useState('');

  const hamburgerHandler = () => {
    setActive((prev) => {
      return prev ? 'active' : '';
    });
  };

  return (
    <header className="header">
      <div className="header_main">
        <img src="../images/pngwing.com.png" alt="#" />
        <ul className="menu">
          <li className="item">
            <NavLink to="main" id="nav-mainpage" className={`link, ${active}`}>
              MAIN PAGE
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="aboutus"
              id="nav-aboutus"
              className={`link, ${active}`}
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="events" id="nav-events" className={`link, ${active}`}>
              EVENTS
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="signin" id="nav-login" className={`link, ${active}`}>
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
