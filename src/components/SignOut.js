import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';

function SignOut() {
  const authContext = useContext(AuthContext);

  const signOutHandler = () => {
    signOut(auth);
    authContext.setLoggedUserID(null);
  };

  return (
    <NavLink to="/" onClick={signOutHandler} className="link">
      SIGN OUT
    </NavLink>
  );
}

export default SignOut;
