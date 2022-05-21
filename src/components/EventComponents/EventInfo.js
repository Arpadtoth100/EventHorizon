import { useState } from 'react';
import JoinModal from './JoinModal';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  console.log(eventData);
  const navTo = useNavigate();

  const openJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };
  return (
    <div className="event-info">
      <h1 className="eventinfo-name">{eventData.title}</h1>
      <img src={eventData.image_url} alt="the event" />
      <div className="eventinfo-venue">{eventData.description}</div>
      {eventData.price && (
        <div className="eventinfo-venue">
          Admission fee:
          {eventData.price} {eventData.currency}
        </div>
      )}
      <div className="eventinfo-date">Starting date: {eventData.date_from}</div>
      <div className="eventinfo-date">Closing date: {eventData.date_to}</div>
      <div className="eventinfo-venue">
        Event Location: {eventData.location}
      </div>
      <div className="eventinfo-venue">
        Maximum number of participants: {eventData.user_limit}
      </div>

      <div className="eventinfo-button">
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
