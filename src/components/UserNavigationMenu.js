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
          <NavLink to="/my_events">My Events</NavLink>
        </li>
        <li>
          <NavLink to="/search">Look Through Events</NavLink>
        </li>
        <li>
          <NavLink to="/preferences">Preferences</NavLink>
        </li>
        <li>
          <NavLink to="/log_out">Log Out</NavLink>
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
