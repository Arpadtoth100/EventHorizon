import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import SignOut from '../SignOut';
import SunRiseIcon from './SunRiseIcon';


function Navbar(props) {
  const [menuActive, setMenuActive] = useState('');
  const [mobileMenuActive, setMobileMenuActive] = useState('');

  const hamburgerHandler = () => {
    setMenuActive((prev) => (prev ? undefined : 'active'));
    setMobileMenuActive((prev) => (prev ? undefined : 'act'));
  };

  const authContext = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header_main">
        <div>
          <i style={{ color: '#9ceaef', marginRight: '0.5rem' }}>
            <SunRiseIcon width="36px" height="24px" />
          </i>
        </div>
        <div>
          <p className="logotext">Event Horizon</p>
        </div>

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
          {authContext.loggedUserID ? (
            <li className="item">
              <NavLink to="/profile" id="nav-profile" className="link">
                PROFILE
              </NavLink>
            </li>
          ) : (
            <>
            </>
          )}
          {authContext.loggedUserID ? (
            <li className="item">
              <SignOut />
            </li>
          ) : (
            <li className="item">
              <NavLink to="/signin" id="nav-login" className="link">
                SIGN IN
              </NavLink>
            </li>
          )}
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
