import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../config/firebase';
import { updateEmail, updatePassword } from 'firebase/auth';
import { updateUser } from '../services/crud';

function UpdateUser() {
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
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmpassword) {
      return setError("Passwords do not match")
    }

    updateEmail(auth.currentUser, signUpData.email)
      .then(() => {

        updatePassword(auth.currentUser, signUpData.confirmpassword)
        updateUser(auth.currentUser.uid, {
          username: signUpData.username,
          location: signUpData.location,
          organization: signUpData.organization
        })
      })
      .then(() => {
        navTo('/profile');
      })
      .catch((e) => {
        console.log('error', e);
        setError(e?.message)
      })



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
    <div className="outlet_main">
      <form className="settingsform" onSubmit={submitHandler}>

        <h3>Update Your Profile</h3>
        <br></br>
        <span>Upload profile picture </span>
        <span>
          <FontAwesomeIcon icon={faFileArrowUp} />
        </span>

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
          type="text"
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
          placeholder="Your location"
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

        {error && (
          <div>
            <p>Updating profile failed due to the following: </p>
            {error}
            <p> Please try again</p>
          </div>
        )}

        <button className='btn'>Update</button>
      </form>
    </div>
  );
}
export default UpdateUser;
