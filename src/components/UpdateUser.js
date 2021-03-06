import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { updateEmail, updatePassword } from 'firebase/auth';
import { updateUser, readUser } from '../services/crud';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

function UpdateUser() {
  const defValue = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    organization: false,
    location: '',
  };

  const [imageToUpload, setImageToUpload] = useState(null);
  const [userData, setUserData] = useState(defValue);
  const [success, setSucces] = useState(false);
  const user = auth.currentUser;

  const [error, setError] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      readUser(auth.currentUser.uid).then((snapshot) =>
        setUserData(snapshot.val())
      );
    }
  }, []);

  function getEmailAuth() {
    if (user != null) {
      const email = user.email;
      return email;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmpassword) {
      return setError('Passwords do not match');
    }
    uploadImage(imageToUpload);
    updateEmail(auth.currentUser, userData.email)
      .then(() => {
        updatePassword(auth.currentUser, userData.confirmpassword);
        updateUser(auth.currentUser.uid, {
          username: userData.username,
          location: userData.location,
          organization: userData.organization,
        });
        console.log('userdata1', userData);
      })
      .then(() => {
        setSucces(true);
        console.log('userdata2', userData);
      })
      .catch((e) => {
        console.log('error', e);
        setError(e?.message);
      });
  };

  const collectUserData = (event) => {
    if (event.target.name === 'username') {
      setUserData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    } else if (event.target.name === 'email') {
      setUserData((prev) => ({ ...prev, email: event.target.value }));
    } else if (event.target.name === 'location') {
      setUserData((prev) => ({ ...prev, location: event.target.value }));
    } else if (event.target.name === 'password') {
      setUserData((prev) => ({ ...prev, password: event.target.value }));
    } else if (event.target.name === 'confirmpassword') {
      setUserData((prev) => ({
        ...prev,
        confirmpassword: event.target.value,
      }));
    } else if (event.target.name === 'organization') {
      setUserData((prev) => ({
        ...prev,
        organization: event.target.checked,
      }));
    }
  };

  const imageHandler = (event) => {
    setImageToUpload(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const uploadImage = async (image) => {
    if (!image) return;
    const storageRef = ref(storage, `/profilepics/${image.name}`);
    uploadBytes(storageRef, image)
      .then((uploadResult) => {
        console.log(uploadResult);
        getDownloadURL(uploadResult.ref).then((url) => {
          updateUser(auth.currentUser.uid, {
            ...userData,
            profile_url: url,
          });
        });
      })
      .catch((e) => console.log(e));
  };


  return (
    <div className="updateuser_main">
      <form className="updateuserform" onSubmit={submitHandler}>
        <div className='signError'>
        {(success && <h4 className='warning'>Your information has been updated!</h4>) ||
          (error && (
            <p className="updateform_p">
              Invalid email and/or passwords do not match, please try again!
            </p>
          ))}
        </div>
      
        <div className="formRow">
          <div className="inline-block right-margin">
            <label htmlFor="su_username" className="textlabel">
              Username
            </label>
            <input
              type="text"
              defaultValue={userData.username}
              placeholder="Username"
              name="username"
              id="su_username"
              className="textinput"
              onChange={collectUserData}
            />
            
          </div>
          <div className="inline-block responsive right-margin">
              <label htmlFor="su_email" className="textlabel">
                Email
              </label>
              <input
                type="text"
                defaultValue={getEmailAuth()}
                placeholder="Email"
                name="email"
                id="su_email"
                className="textinput"
                onChange={collectUserData}
              />
            </div>
        </div>

        <div className="formRow">
        <div className="inline-block right-margin">
        <label htmlFor="su_password" className="textlabel">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="su_password"
          className="textinput"
          onChange={collectUserData}
        />
        </div>
        <div className="inline-block responsive right-margin">
        <label htmlFor="su_confirmpassword" className="textlabel">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          id="su_confirmpassword"
          className="textinput"
          onChange={collectUserData}
        />
        </div>
        </div>
        <div className="formRow">
        <div className="inline-block right-margin">
        <label htmlFor="uu_upload" className="textlabel">
          Profile Picture
        </label>
        
        <input
          type="file"
          placeholder="Upload Image"
          name="upload"
          id="uu_upload"
          accept="image/*"
          className="textinput"
          onChange={imageHandler}
        />
       
        </div>
        <div className="inline-block responsive right-margin">
        <label htmlFor="su_location" className="textlabel">
          Location
        </label>
        <input
          type="text"
          defaultValue={userData.location}
          placeholder="Your location"
          name="location"
          id="su_location"
          className="textinput"
          onChange={collectUserData}
        />
       
        </div>
        </div>
        <div className="formRow">
        <div className="inline-block right-margin">
        {imageToUpload && (
          <div className="imagepreview_container">
            <img
              className="imagepreview"
              src={URL.createObjectURL(imageToUpload)}
              alt="newuseravatar"
            />
          </div>
        )}
        <input
          type="checkbox"
          name="organization"
          id="su_organization"
          onChange={collectUserData}
          checked={userData.organization}
        />
        
        <label htmlFor="su_organization" id="update_checkbox_label">
          Organization
        </label>
       
        </div>
        <div className="inline-block responsive right-margin">
        <button className="update_btn">Update</button>
        </div>
        </div>
        
        
      </form>
    </div>
  );
}
export default UpdateUser;
