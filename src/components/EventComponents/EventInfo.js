import { useState, useEffect, useCallback, useContext } from 'react';
import JoinModal from './JoinModal';
import ConfirmationPopUp from './ConfirmationPupUp';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import SimpleMap from '../GoogleMap/SimpleMap';
import { AuthContext } from '../Context/AuthContext';
import { readAttendee } from '../../services/crud';
import format from "date-fns/format";

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [correctUser, setCorrectUser] = useState(false);
  const [showConfirmationPopUp, setShowConfirmationPopUp] = useState(false);
  const [attendee, setAttendee] = useState();
  const [joined, setJoined] = useState(false);
  const [deleteOrRemove, setDeleteOrRemove] = useState(false);

  const authContext = useContext(AuthContext);

  const navTo = useNavigate();
  

  useEffect(() => {
    readAttendee(eventId).then((snapshot) => setAttendee(snapshot.val()));
    attendee?.hasOwnProperty(authContext.loggedUserID) && setJoined(true);
  }, [eventData, authContext.loggedUserID]);

  const openJoinModal = () => {
    setShowJoinModal((prev) => !prev);
  };

  const openConfirmationPopUp = (event) => {
    setShowConfirmationPopUp((prev) => !prev);
    event.target.value === 'delete'
      ? setDeleteOrRemove(true)
      : setDeleteOrRemove(false);
  };

  const userCheck = useCallback(() => {
    if (authContext.loggedUserID === eventData?.uid) {
      setCorrectUser(true);
    } else {
      setCorrectUser(false);
    }
  }, [eventData, authContext.loggedUserID]);

  useEffect(() => {
    userCheck();
  }, [eventData?.uid]);

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
        style={{ backgroundImage: `url(${eventData?.image_url})` }}
      ></div>
      <img
        className="eventpage_img"
        src={eventData?.image_url}
        alt="the event"
      />
      <h1 className="eventinfo-name">{eventData?.title}</h1>
      <br></br>
      <div className="eventinfo-description">{eventData?.description}</div>
      <br></br>
      {eventData?.price && (
        <div className="eventinfo-fee">
          Admission fee:
          {' ' + eventData?.price} {eventData?.currency}
        </div>
      )}
      <br></br>
      <div className="eventinfo-date">
        ide kell a dátum
        {/* <p>{format(new Date(`${eventData.date_from}`), "cccc, dd MMMM yyyy h:mm aa")} to {format(new Date(`${eventData.date_to}`), "h:mm aa")}</p> */}
      </div>
      <br></br>
      <div className="eventinfo-location">
        {eventData?.location}
      </div>
      <br></br>
      <div className="eventinfo-participants">
        Maximum number of participants: {eventData?.user_limit}
      </div>
      <br></br>
      <div className="eventinfo-button">
        {eventData?.coord && (
          <SimpleMap title={'Event Location'} eventData={eventData} />
        )}
        {correctUser ? (
          <button
            className="joinEventBtn"
            aria-label="Close modal"
            onClick={openConfirmationPopUp}
            value="delete"
          >
            Delete Event
          </button>
        ) : (
          <></>
        )}

        {joined ? (
          <button
            className="joinEventBtn"
            aria-label="Close modal"
            onClick={openConfirmationPopUp}
            value="unsubscribe"
          >
            Unsubscribe
          </button>
        ) : (
          <>
            {authContext.loggedUserID ? (
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
          </>
        )}

        {showConfirmationPopUp && (
          <ConfirmationPopUp
            deleteOrRemove={deleteOrRemove}
            correctUser={correctUser}
            eventId={eventId}
            setShowConfirmationPopUp={setShowConfirmationPopUp}
            confirmationQuestion={
              deleteOrRemove
                ? 'Are you sure you want to delete this event?'
                : "Are you sure you don't want to participate?"
            }
            remove={deleteOrRemove ? 'Delete' : 'Unsubscribe'}
            cancel="Cancel"
          />
        )}
      </div>
    </div>
  );
}
