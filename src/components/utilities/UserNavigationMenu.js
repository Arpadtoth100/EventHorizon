import { NavLink } from 'react-router-dom';

function UserNavigationMenu() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/create_event">Create Event</NavLink>
        </li>
        <li>
          <NavLink to="/myevents">My Events</NavLink>
        </li>
        <li>
          <NavLink to="/search">Browse Events</NavLink>
        </li>
        <li>
          <NavLink to="/preferences">Preferences</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign Out</NavLink>
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
