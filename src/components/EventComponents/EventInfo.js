import { useState } from 'react';
import JoinModal from './JoinModal';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const navTo = useNavigate();

  const openJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };
  return (
    <div className="event-info">
      <h1 className="eventinfo-name">{eventData.title}</h1>
      <img src={eventData.image_url} alt="the event" />
      <div className="eventinfo-date">{eventData.date}</div>
      <div className="eventinfo-venue">{eventData.venue}</div>

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
