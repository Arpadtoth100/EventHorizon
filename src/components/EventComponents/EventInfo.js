import { useState, useEffect, useCallback } from 'react';
import JoinModal from './JoinModal';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../services/crud';
import { onAuthStateChanged } from 'firebase/auth';

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [correctUser, setCorrectUser] = useState(false);

  const navTo = useNavigate();

  const openJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };

  const userCheck = useCallback(() => {
    if (auth.currentUser?.uid === eventData?.uid) {
      setCorrectUser(true);
    }
  }, []);

  useEffect(() => {
    userCheck();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCorrectUser(false);
      }
    });
  }, []);

  return (
    <div className="event-info">
      <div className='eventimage_container' style={{ backgroundImage: `url(${eventData.image_url})` }}>
      </div>
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
        {correctUser && (
          <button
            className="joinEventBtn"
            aria-label="Close modal"
            onClick={() => deleteEvent(eventId)}
          >
            Delete Event
          </button>
        )}
        {auth.currentUser ? (
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
      </div>
    </div>
  );
}
