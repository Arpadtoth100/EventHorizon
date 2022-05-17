import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut';

function UserNavigationMenu() {
  return (
    <>
      <ul className='userNavmenu'>
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
          <NavLink to="/joined_events">Joined Events</NavLink>
        </li>
        <li>
          <NavLink to="/search">Browse Events</NavLink>
        </li>
        <li>
          <NavLink to="/preferences">Preferences</NavLink>
        </li>
        <li>
          <SignOut />
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
