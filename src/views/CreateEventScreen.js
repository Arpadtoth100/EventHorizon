import { useState, useCallback } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createEvent } from '../services/crud';
import { auth } from '../config/firebase';

import SelectDateFromTo from '../components/utilities/SelectDateFromTo';
import Map from '../components/GoogleMap/Map';

function CreateEventScreen() {
  const [progress, setProgress] = useState(0);
  const [imageToUpload, setImageToUpload] = useState(null);

  const defaultEventData = {
    uid: '',
    status: '',
    title: '',
    description: '',
    category_id: null,
    image_url: '',
    event_type: '',
    location: '',
    date_from: '',
    date_to: '',
    user_limit: null,
    free: true,
    price: null,
    currency: '',
  };
  const [eventData, setEventData] = useState(defaultEventData);

  const createChangeHandler = useCallback((e) => {
    setEventData((p) => ({ ...p, [e.target.name]: e.target.value }))
  }, []);

  const createEventHandler = async (e) => {
    e.preventDefault();
    await uploadImage(imageToUpload)
    console.log("second")
    eventData.uid = auth?.currentUser.uid;
    createEvent(eventData).then(() => {
      setEventData(defaultEventData);
    });
    console.log(eventData)
  };

  const imageHandler = (event) => {
    setImageToUpload(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  /* const uploadHandler = (event) => {
    event.preventDefault();
    uploadImage(imageToUpload)
    console.log(eventData)
  }; */

  const uploadImage = async (image) => {
    if (!image) return;
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed', ((snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog);
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setEventData((p) => ({ ...p, "image_url": url }))); console.log("zero");
      })
    );
    console.log("first")
  };

  return (
    <div className="outlet_main create_event_main">
      <form className="create_event_form" onSubmit={createEventHandler}>
        <label htmlFor="status" className="textlabel">
          Public or Draft
        </label>
        <select
          className="create_event_select"
          name="status"
          id="status"
          onChange={createChangeHandler}
        >
          <option value="">Please Select one</option>
          <option value="public">Public</option>
          <option value="draft">Draft</option>
        </select>

        <label htmlFor="title" className="textlabel">
          Event Title
        </label>
        <input
          type="text"
          placeholder="Event title"
          name="title"
          id="title"
          className="textinput"
          onChange={createChangeHandler}
        />

        <label htmlFor="category_id" className="textlabel">
          Category
        </label>
        <select
          className="create_event_select"
          name="category_id"
          id="category_id"
          onChange={createChangeHandler}
        >
          <option value="">Please Select one</option>
          <option value="1">Music</option>
          <option value="2">Flash Mob</option>
          <option value="3">Theatre</option>
          <option value="4">E-Sports</option>
          <option value="5">Sports</option>
        </select>

        <label htmlFor="description" className="textlabel">
          Description
        </label>
        <input
          type="textarea"
          placeholder="Description"
          name="description"
          id="description"
          className="textinput"
          onChange={createChangeHandler}
        />

        <label htmlFor="ce_upload" className="textlabel">
          Upload Image
        </label>
        <input
          type="file"
          placeholder="Upload Image"
          name="upload"
          id="ce_upload"
          className="textinput"
          onChange={imageHandler}
        />
        {/* <button className="btn" onClick={uploadHandler}>
          Upload Image
        </button> */}

        <label htmlFor="event_type" className="textlabel">
          Online or Offline
        </label>
        <select
          className="create_event_select"
          name="event_type"
          id="event_type"
          onChange={createChangeHandler}
        >
          <option value="">Please Select one</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <label htmlFor="location" className="textlabel">
          Event Location
        </label>
        <input
          type="text"
          placeholder="Event Location"
          name="location"
          id="location"
          className="textinput"
          onChange={createChangeHandler}
        />

        <br />
        <SelectDateFromTo />

        <label htmlFor="user_limit" className="textlabel">
          Maximum Number of Participants
        </label>
        <input
          type="number"
          placeholder="Maximum Number of Participants"
          name="user_limit"
          id="user_limit"
          className="textinput"
          onChange={createChangeHandler}
        />

        <label htmlFor="free" className="textlabel">
          Free or Paying
        </label>
        <select
          className="create_event_select"
          name="free"
          id="free"
          onChange={createChangeHandler}
        >
          <option value="">Please Select one</option>
          <option value="true">Free</option>
          <option value="false">Paying</option>
        </select>

        <label htmlFor="price" className="textlabel">
          Price
        </label>
        <input
          type="number"
          placeholder="Price"
          name="price"
          id="price"
          className="textinput"
          onChange={createChangeHandler}
        />
        <label htmlFor="currency" className="textlabel">
          Currency
        </label>
        <select
          className="create_event_select"
          name="currency"
          id="currency"
          onChange={createChangeHandler}
        >
          <option value="">Please Select one</option>
          <option value="HUF">HUF</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <button type="submit" className="btn">Create Event!</button>
      </form>

      <Map />
    </div>
  );
}

export default CreateEventScreen;
