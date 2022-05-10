import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [menuActive, setMenuActive] = useState('');
  const [mobileMenuActive, setMobileMenuActive] = useState('');

  const hamburgerHandler = () => {
    setMenuActive((prev) => (prev ? undefined : 'active'));
    setMobileMenuActive((prev) => (prev ? undefined : 'act'));
  };

  console.log(menuActive);

  return (
    <footer className="footer">
      <div className="footer_main">
        <ul className={`menu ${menuActive}`}>
          <li className="item">
            <NavLink to="/contact" id="nav-contact" className="link">
              Contact Us
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/faq" id="nav-faq" className="link">
              FAQ
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/privacy" id="nav-privacy" className="link">
              Data Privacy
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
    </footer>
  );
}

export default Footer;
