import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUser } from '../services/crud';

function SignUp() {
  const defValue = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    organization: 'false',
    location: '',
  };

  const [signUpData, setSignUpData] = useState(defValue);

  const navTo = useNavigate();
  const [signUpError, setSignUpError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((authCredential) => {
        console.log('userID', authCredential.user.uid);
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
        setSignUpError(e?.message);
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
        {signUpError && (
          <div>
            <p>Registration failed due to the following: </p>
            {signUpError}
            <p> Please try again</p>
          </div>
        )}
        <h3>Sign Up Here</h3>

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
        />

        <input
          type="checkbox"
          name="organization"
          id="su_organization"
          onChange={collectSignUpData}
        />
        <label htmlFor="su_organization" id="cehckbox_label">
          Organization
        </label>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
