import { NavLink } from 'react-router-dom';

function UserNavigationMenu() {
  return (
    <>
      <ul className="userNavmenu">
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="/create_event">Create Event</NavLink>
        </li>
        <li>
          <NavLink to="/update_user">Update My Profile</NavLink>
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
