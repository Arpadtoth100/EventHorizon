import { useState, useCallback } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createEvent } from '../services/crud';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

import SelectDateFrom from '../components/utilities/SelectDateFrom';
import SelectDateTo from '../components/utilities/SelectDateTo';
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

  const onMapClick = useCallback(
    (event) => {
      setMarker({
        coord: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        },
        time: new Date(),
      });
    },
    [setMarker]
  );

  const createChangeHandler = useCallback((e) => {
    setEventData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const createEventHandler = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    console.log(eventData);
    if (imageToUpload) {
      await uploadImage(imageToUpload);
    } else {
      marker?.coord
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
    if (!image) return;
    setIsClicked(true);
    console.log(eventData);

    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(storageRef, image)
      .then((uploadResult) => {
        getDownloadURL(uploadResult.ref).then((url) => {
          marker?.coord
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

  return (
    <>
      <h1 className="createevent_h1">Create new event</h1>
      <h3 className="createevent_h3">
        Fill in the form and please don't forget to add the location on the map!
      </h3>
      <div className="create_event_main">
        <div className="create_event-container">
          <form className="create_event_form" onSubmit={createEventHandler}>
            <label htmlFor="title" className="textlabel">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Event title"
              name="title"
              id="title"
              className="cr_textinput"
              required
              onChange={createChangeHandler}
              maxLength="50"
            />
            <label htmlFor="description" className="textlabel textarea">
              Description
            </label>
            <div className="responsive">
              <textarea
                required
                type="textarea"
                placeholder="Description"
                name="description"
                id="description"
                className="input-field-message"
                onChange={createChangeHandler}
                cols="60"
                rows="6"
                maxLength="1200"
              />
            </div>
            <label htmlFor="location" className="textlabel">
              Event Location
            </label>
            <input
              required={eventData.event_type === 'online' ? false : true}
              type="text"
              placeholder="Event Location"
              name="location"
              id="location"
              className="cr_textinput"
              onChange={createChangeHandler}
              maxLength="50"
            />
            <label htmlFor="ce_upload" className="textlabel">
              Choose Image to Upload
            </label>
            {imageToUpload && (
              <div className="imagepreview_containerEvent">
                <img
                  className="imagepreview"
                  src={URL.createObjectURL(imageToUpload)}
                  alt="neweventimage"
                />
              </div>
            )}
            <input
              required
              type="file"
              placeholder="Upload Image"
              name="upload"
              id="ce_upload"
              className="cr_textinput"
              accept="image/*"
              onChange={imageHandler}
            />

            <div className="formRow">
              <div className="inline-block right-margin">
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
                  <option value="9">Other</option>
                </select>
              </div>
              <div className="inline-block responsive right-margin">
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
              </div>
            </div>
            <div className="formRow">
              <div className="inline-block right-margin">
                <label
                  htmlFor="startdate"
                  className="textlabel datepick textlabel"
                >
                  Starting date
                </label>
                <SelectDateFrom
                  required
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </div>
              <div className="inline-block responsive right-margin">
                <label
                  htmlFor="endDate"
                  className="textlabel datepick textlabel"
                >
                  Closing date
                </label>
                <SelectDateTo
                  required
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="inline-block right-margin">
                <label
                  htmlFor="user_limit"
                  className="textlabel"
                  id="particip_textlabel"
                >
                  Max Number of Participants
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  placeholder="Max Number of Participants"
                  name="user_limit"
                  id="user_limit"
                  className="textinput"
                  onChange={createChangeHandler}
                />
              </div>
              <div className="inline-block responsive right-margin">
                <label htmlFor="free" className="textlabel">
                  Admission fee
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
                  <option value="false">Paid</option>
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
                      className="select"
                      name="currency"
                      id="currency"
                      onChange={createChangeHandler}
                    >
                      <option value="">Please Select Currency</option>
                      <option value="HUF">HUF</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn createeventBtn"
              disabled={isClicked}
            >
              Create Event!
            </button>
          </form>
          <div className="map_container map-create">
            <MapCreate
              marker={marker}
              eventData={eventData}
              onMapClick={onMapClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEventScreen;
