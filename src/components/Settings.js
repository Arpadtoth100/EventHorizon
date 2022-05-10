import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons'


function SettingsScreen() {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    location: '',
    organization: 'false'
  });

  const navTo = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navTo('/profileupdated');
  };

  const collectSignUpData = (event) => {
    if (event.target.name === 'username') {
      setSignUpData((prev) => ({ ...prev, username: event.target.value }));
    } else if (event.target.name === 'email') {
      setSignUpData((prev) => ({ ...prev, email: event.target.value }));
    } else if (event.target.name === 'location') {
      setSignUpData((prev) => ({ ...prev, location: event.target.value }));
    } else if (event.target.name === 'organization') {
      setSignUpData((prev) => ({ ...prev, organization: event.target.checked }));
    }
  };

  return (
    <div className="outlet_main">
      <form className="settingsform" onSubmit={submitHandler}>
        <h3>Update Your Profile</h3>
        <br></br>
        <span>Upload profile picture </span><span><FontAwesomeIcon icon={faFileArrowUp} /></span>
        
        <label htmlFor="su_username" className='textlabel'>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="su_username"
          className="textinput"
          onChange={collectSignUpData}
        />

        <label htmlFor="su_email" className='textlabel'>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="su_email"
          className="textinput"
          onChange={collectSignUpData}
        />

        <label htmlFor="su_location" className='textlabel'>Location</label>
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
        <label htmlFor="su_organization" id="cehckbox_label">Organization</label>

        <button>Update</button>
      </form>
    </div>
  );

}
export default SettingsScreen;