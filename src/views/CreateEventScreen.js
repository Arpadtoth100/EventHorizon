import { useState, useCallback } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createEvent } from '../services/crud';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

import SelectDateFromTo from '../components/utilities/SelectDateFromTo';
import MapCreate from '../components/GoogleMap/MapCreate';

function CreateEventScreen() {
  const [imageToUpload, setImageToUpload] = useState(null);
  const navTo = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [isClicked, setIsClicked] = useState(false);

  const defaultEventData = {
    uid: '',
    title: '',
    description: '',
    category_id: null,
    image_url: '',
    event_type: '',
    location: '',
    date_from: new Date(),
    date_to: new Date(),
    user_limit: null,
    free: 'true',
    price: null,
    currency: '',
    coord: null,
  };
  const [eventData, setEventData] = useState(defaultEventData);
  const [marker, setMarker] = useState();

  const onMapClick = useCallback((event) => {
    setMarker({
      coord: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      time: new Date(),
    });
  }, []);
  const createChangeHandler = useCallback((e) => {
    setEventData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const createEventHandler = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    if (imageToUpload) {
      await uploadImage(imageToUpload);
    } else {
      eventData.coord
        ? createEvent({
            ...eventData,
            uid: auth?.currentUser.uid,
            date_from: startDate.toString(),
            date_to: endDate.toString(),

            coord: marker?.coord,
          }).then(() => {
            setEventData(defaultEventData);
            navTo('/event_created');
          })
        : createEvent({
            ...eventData,
            uid: auth?.currentUser.uid,
            date_from: startDate.toString(),
            date_to: endDate.toString(),
          }).then(() => {
            setEventData(defaultEventData);
            navTo('/event_created');
          });
    }
  };

  const imageHandler = (event) => {
    setImageToUpload(event.target.files[0]);
  };

  const uploadImage = async (image) => {
    setIsClicked(true);
    if (!image) return;
    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(storageRef, image)
      .then((uploadResult) => {
        getDownloadURL(uploadResult.ref).then((url) => {
          eventData.coord
            ? createEvent({
                ...eventData,
                uid: auth?.currentUser.uid,
                date_from: startDate.toString(),
                date_to: endDate.toString(),
                image_url: url,
                coord: marker?.coord,
              }).then(() => {
                setEventData(defaultEventData);
                navTo('/event_created');
              })
            : createEvent({
                ...eventData,
                uid: auth?.currentUser.uid,
                date_from: startDate.toString(),
                date_to: endDate.toString(),
                image_url: url,
              }).then(() => {
                setEventData(defaultEventData);
                navTo('/event_created');
              });
        });
      })
      .catch((e) => console.log(e));
  };

  const removeImageToUpload = () => {
    setImageToUpload();
  };

  return (
    <div className="outlet_main create_event_main">
      <form className="create_event_form" onSubmit={createEventHandler}>
        <label htmlFor="title" className="textlabel">
          Event Title
        </label>
        <input
          type="text"
          placeholder="Event title"
          name="title"
          id="title"
          className="textinput"
          required
          onChange={createChangeHandler}
          maxLength="40"
        />

        <label htmlFor="category_id" className="textlabel">
          Category
        </label>
        <select
          required
          className="select"
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
          <option value="6">{'Art & Culture'}</option>
          <option value="7">Games</option>
          <option value="8">Hobbies</option>
        </select>

        <label htmlFor="description" className="textlabel textarea">
          Description
        </label>
        <textarea
          required
          type="textarea"
          placeholder="Description"
          name="description"
          id="description"
          className="textinput"
          onChange={createChangeHandler}
          maxLength="100"
        />

        <label htmlFor="ce_upload" className="textlabel">
          Choose Image to Upload
        </label>
        <input
          required
          type="file"
          placeholder="Upload Image"
          name="upload"
          id="ce_upload"
          className="textinput"
          accept="image/*"
          onChange={imageHandler}
        />
        {imageToUpload && (
          <div className="imagepreview_containerEvent">
            <img
              className="imagepreview"
              src={URL.createObjectURL(imageToUpload)}
              alt="newuseravatar"
            />
            <button
              className="removeimage_button"
              onClick={removeImageToUpload}
            >
              Remove this image
            </button>
          </div>
        )}

        <label htmlFor="event_type" className="textlabel">
          Online or Offline
        </label>
        <select
          required
          className="select"
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
          required={eventData.event_type === 'online' ? false : true}
          type="text"
          placeholder="Event Location"
          name="location"
          id="location"
          className="textinput"
          onChange={createChangeHandler}
          maxLength="50"
        />

        <br />
        <p className="textlabel datepick">
          Please select the starting and closing dates:
        </p>
        <SelectDateFromTo
          required
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <label htmlFor="user_limit" className="textlabel">
          Maximum Number of Participants
        </label>
        <input
          required
          type="number"
          min="1"
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
          required
          className="select"
          name="free"
          id="free"
          onChange={createChangeHandler}
        >
          <option value="null">Please Select one</option>
          <option value="true">Free</option>
          <option value="false">Paying</option>
        </select>
        {eventData.free === 'true' ? (
          <></>
        ) : (
          <>
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
              min="0"
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
          </>
        )}

        <button
          type="submit"
          className="btn createeventBtn"
          disabled={isClicked}
        >
          Create Event!
        </button>
      </form>

      <div>
        <h1 className="createevent_h1">You can create your events here</h1>
        <h3>
          Fill in the form and please don't forget to click the map coordinates!
        </h3>
        <div className="map_container">
          <MapCreate
            marker={marker}
            eventData={eventData}
            onMapClick={onMapClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEventScreen;
