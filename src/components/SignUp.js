import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUser } from '../services/crud';
import { AuthContext } from './Context/AuthContext';

function SignUp() {
  const defValue = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    organization: false,
    location: '',
    profile_url: '',
  };

  const [signUpData, setSignUpData] = useState(defValue);

  const navTo = useNavigate();
  const [signUpError, setSignUpError] = useState('');
  const authContext = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmpassword) {
      return setSignUpError('Sign Up failed: passwords do not match!');
    }

    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((authCredential) => {
        authContext.setLoggedUserID(authCredential.user.uid);
        const { username, organization, location } = signUpData;
        const uid = authCredential.user.uid;

        createUser(uid, username, organization, location);
      })
      .then(() => {
        setSignUpData(defValue);
        navTo('/thankyou');
      })
      .catch((e) => {
        console.log('error', e);
        setSignUpError("Sign Up failed: username or email address is already in use!");
      });
  };

  const collectSignUpData = (event) => {
    if (event.target.name === 'username') {
      setSignUpData((prev) => ({ ...prev, username: event.target.value }));
    } else if (event.target.name === 'email') {
      setSignUpData((prev) => ({ ...prev, email: event.target.value }));
    } else if (event.target.name === 'location') {
      setSignUpData((prev) => ({ ...prev, location: event.target.value }));
    } else if (event.target.name === 'password') {
      setSignUpData((prev) => ({ ...prev, password: event.target.value }));
    } else if (event.target.name === 'confirmpassword') {
      setSignUpData((prev) => ({
        ...prev,
        confirmpassword: event.target.value,
      }));
    } else if (event.target.name === 'organization') {
      setSignUpData((prev) => ({
        ...prev,
        organization: event.target.checked,
      }));
    }
  };

  return (
    <div className="signup_main">
      <form className="signupform" onSubmit={submitHandler}>
        <h4 className='formh4'>New to Event Horizon?</h4>
        <div className="signError">
          { signUpError && <p>{signUpError}</p>}
        </div>
        <h3 className='signupsign'>Sign Up Here</h3>
        <label htmlFor="su_username" className="textlabel">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="su_username"
          className="textinput"
          onChange={collectSignUpData}
          required
        />
        <label htmlFor="su_email" className="textlabel">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="su_email"
          className="textinput"
          onChange={collectSignUpData}
          required
        />
        <label htmlFor="su_password" className="textlabel">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="su_password"
          className="textinput"
          onChange={collectSignUpData}
          required
        />
        <label htmlFor="su_confirmpassword" className="textlabel">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          id="su_confirmpassword"
          className="textinput"
          onChange={collectSignUpData}
          required
        />
        <label htmlFor="su_location" className="textlabel">
          Location
        </label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          id="su_location"
          className="textinput"
          onChange={collectSignUpData}
          required
        />
        <input
          type="checkbox"
          name="organization"
          id="su_organization"
          onChange={collectSignUpData}
        />
        <label htmlFor="su_organization" id="checkbox_label">
          Organization
        </label>
        <button className="signup_btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
