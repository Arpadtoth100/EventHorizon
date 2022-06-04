import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthContext } from './Context/AuthContext';

function SignIn() {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [signInError, setSignInError] = useState('');

  const authContext = useContext(AuthContext);

  const navigateTo = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, signInData.email, signInData.password)
      .then((authCredential) => {
        authContext.setLoggedUserID(authCredential.user.uid);
        navigateTo('/profile');
      })
      .catch((e) => {
        setSignInError(e?.message);
        console.log('error', e);
      });
  };

  const collectSignInData = (event) => {
    if (event.target.name === 'email') {
      setSignInData((prev) => ({ ...prev, email: event.target.value }));
    } else if (event.target.name === 'password') {
      setSignInData((prev) => ({ ...prev, password: event.target.value }));
    }
  };

  return (
    <div className="signin_main">
      <form className="signinform" onSubmit={submitHandler}>
        <div className="signError">
          {signInError && <p>Incorrect E-mail or Password </p>}
        </div>
        
        <label htmlFor="si_email" className="textlabel" id="si_email_label">
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="si_email"
          className="si_textinput"
          onChange={collectSignInData}
        />

        <label htmlFor="si_password" className="textlabel" id="si_pw_label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="si_password"
          className="textinput"
          onChange={collectSignInData}
        />

        <button id="signinbtn" className="btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
