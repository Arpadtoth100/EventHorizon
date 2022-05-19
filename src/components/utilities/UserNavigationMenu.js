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
          <NavLink to="/my_events">Events Created</NavLink>
        </li>
        <li>
          <NavLink to="/joined_events">Events Joined</NavLink>
        </li>
        <li>

          <NavLink to="/search">Browse Events</NavLink>
        </li>
        <li>
          <NavLink to="/updateuser">Update My Profile</NavLink>
        </li>
        {/* <li>
          <SignOut />
        </li>  Emese: szerintem ez nem kell mert úgyis fenn van a navbarban*/}
      </ul>
    </>
  );
}

export default UserNavigationMenu;
