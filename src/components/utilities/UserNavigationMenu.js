import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut';

function UserNavigationMenu() {
  return (
    <>
      <ul className='userNavmenu'>
        {/* <li>
          <NavLink to="/events">Events</NavLink>
        </li>  Emese: szerintem ez ugyanaz, mint a search, szóval nem kell*/}
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
          <NavLink to="/search">Browse Events</NavLink>
        </li>
        <li>
          <NavLink to="/updateuser">Update My Profile</NavLink>
        </li>
        <li>
          <SignOut />
        </li>
      </ul>
    </>
  );
}

export default UserNavigationMenu;
