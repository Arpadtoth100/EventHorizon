import { useState, useCallback } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createEvent } from '../services/crud';
import { auth } from '../config/firebase';

import SelectDateFromTo from '../components/utilities/SelectDateFromTo';
import Map from '../components/GoogleMap/Map';

function CreateEventScreen() {
  const [imageToUpload, setImageToUpload] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const defaultEventData = {
    uid: '',
    status: '',
    title: '',
    description: '',
    category_id: null,
    image_url: '',
    event_type: '',
    location: '',
    date_from: new Date(),
    date_to: new Date(),
    user_limit: null,
    free: true,
    price: null,
    currency: '',
  };
  const [eventData, setEventData] = useState(defaultEventData);

  const createChangeHandler = useCallback((e) => {
    setEventData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const createEventHandler = async (e) => {
    e.preventDefault();
    if (imageToUpload) {
      await uploadImage(imageToUpload);
    } else {
      createEvent({
        ...eventData,
        uid: auth?.currentUser.uid,
        date_from: startDate.toString(),
        date_to: endDate.toString(),
      }).then(() => {
        setEventData(defaultEventData);
        console.log('es utanna', eventData);
      });
    }
  };

  console.log(eventData.image_url);

  const imageHandler = (event) => {
    setImageToUpload(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const uploadImage = async (image) => {
    if (!image) return;
    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(storageRef, image)
      .then((uploadResult) => {
        console.log(uploadResult);
        getDownloadURL(uploadResult.ref)
          .then((url) => {
            createEvent({
              ...eventData,
              uid: auth?.currentUser.uid,
              date_from: startDate.toString(),
              date_to: endDate.toString(),
              image_url: url,
            }).then(() => {
              setEventData(defaultEventData);
            });
          })
          .then((value) => console.log('eventdata first', eventData));
      })
      .catch((e) => console.log(e));
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
          <option value="5">Outdoor activity</option>
          <option value="6">Art & Culture</option>
          <option value="7">Games</option>
          <option value="8">Hobbies</option>
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
        <SelectDateFromTo
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

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

        <button type="submit" className="btn">
          Create Event!
        </button>
      </form>
      <div className="map_container">
        <Map />
      </div>
    </div>
  );
}

export default CreateEventScreen;
