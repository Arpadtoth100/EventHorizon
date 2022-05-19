import { NavLink } from 'react-router-dom';

function UserNavigationMenu() {
  return (
    <>
      <ul className="userNavmenu">
        <li>
          <NavLink to="/search">Browse Events</NavLink>
        </li>
        <li>
          <NavLink to="/create_event">Create Event</NavLink>
        </li>
        <li>
          <NavLink to="/my_events">Events I created</NavLink>
        </li>
        <li>
          <NavLink to="/joined_events">Events I Joined</NavLink>
        </li>
        <li>
          <NavLink to="/update_user">Update My Profile</NavLink>
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
