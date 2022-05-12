import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

function SignOut() {
  return (
    <NavLink
      to="/main"
      onClick={() => {
        signOut(auth);
      }}
    >
      Sign Out
    </NavLink>
  );
}

export default SignOut;
