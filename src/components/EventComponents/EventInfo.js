import { useState, useEffect, useCallback, useContext } from 'react';
import JoinModal from './JoinModal';
import ConfirmationPopUp from './ConfirmationPupUp';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import SimpleMap from '../GoogleMap/SimpleMap';
import { AuthContext } from '../Context/AuthContext';

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [correctUser, setCorrectUser] = useState(false);
  const authContext = useContext(AuthContext);
  const [showConfirmationPopUp, setShowConfirmationPopUp] = useState(false);

  const navTo = useNavigate();

  const openJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };

  const openConfirmationPopUp = () => {
    setShowConfirmationPopUp((prev) => !prev);
  };

  const userCheck = useCallback(() => {
    if (authContext?.uid === eventData?.uid) {
      setCorrectUser(true);
    }
  }, [authContext?.uid]);

  useEffect(() => {
    userCheck();
  }, [authContext?.uid]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCorrectUser(false);
      }
    });
  }, []);

  return (
    <div className="event-info">
      <div
        className="eventimage_container"
        style={{ backgroundImage: `url(${eventData.image_url})` }}
      ></div>
      <img
        className="eventpage_img"
        src={eventData.image_url}
        alt="the event"
      />
      <h1 className="eventinfo-name">{eventData.title}</h1>
      <br></br>
      <div className="eventinfo-description">{eventData.description}</div>
      <br></br>
      {eventData.price && (
        <div className="eventinfo-fee">
          Admission fee:
          {' ' + eventData.price} {eventData.currency}
        </div>
      )}
      <br></br>
      <div className="eventinfo-date">Starting date: {eventData.date_from}</div>
      <div className="eventinfo-date">Closing date: {eventData.date_to}</div>
      <br></br>
      <div className="eventinfo-location">
        Event Location: {eventData.location}
      </div>
      <br></br>
      <div className="eventinfo-participants">
        Maximum number of participants: {eventData.user_limit}
      </div>
      <br></br>
      <div className="eventinfo-button">
        {eventData.coord && (
          <SimpleMap title={'Event Location'} eventData={eventData} />
        )}
        {correctUser && (
          <button
            className="joinEventBtn"
            aria-label="Close modal"
            onClick={openConfirmationPopUp}
            /* onClick={() => deleteEvent(eventId)} */
          >
            Delete Event
          </button>
        )}

        {auth?.currentUser ? (
          <>
            <button className="joinEventBtn" onClick={openJoinModal}>
              Join Event
            </button>
            <JoinModal
              showJoinModal={showJoinModal}
              setShowJoinModal={setShowJoinModal}
              eventData={eventData}
              eventId={eventId}
            />
          </>
        ) : (
          <button
            className="joinEventBtn"
            type="button"
            onClick={() => {
              navTo('/signin');
            }}
          >
            Sign in to Join
          </button>
        )}
        {showConfirmationPopUp && (
          <ConfirmationPopUp
            eventId={eventId}
            setShowConfirmationPopUp={setShowConfirmationPopUp}
            confirmationQuestion="Are you sure you want to delete this event?"
            remove="Delete"
            cancel="Cancel"
          />
        )}
      </div>
    </div>
  );
}
