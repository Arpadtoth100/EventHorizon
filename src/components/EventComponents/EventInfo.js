import { useState, useEffect, useCallback, useContext } from 'react';
import JoinModal from './JoinModal';
import ConfirmationPopUp from './ConfirmationPupUp';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import SimpleMap from '../GoogleMap/SimpleMap';
import { AuthContext } from '../Context/AuthContext';
import { readAttendee, readUser } from '../../services/crud';
import format from 'date-fns/format';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function EventInfo({ eventData, eventId }) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [correctUser, setCorrectUser] = useState(false);
  const [showConfirmationPopUp, setShowConfirmationPopUp] = useState(false);
  const [attendee, setAttendee] = useState();
  const [joined, setJoined] = useState(false);
  const [deleteOrRemove, setDeleteOrRemove] = useState(false);
  const [success, setSuccess] = useState(false);
  const [organizer, setOrganizer] = useState('');

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

  useEffect(() => {
    readUser(eventData.uid).then((snapshot) => setOrganizer(snapshot.val()));
  }, [eventData?.uid]);

  console.log(eventData.uid, organizer.username, organizer.profile_url);

  return (
    <>
      <div className="eventpagetop">
        <div className="eventimage-hero">
          <div
            className="eventimagebg_container"
            style={{ backgroundImage: `url(${eventData?.image_url})` }}
          ></div>
          <div className="eventpage_main">
            <div className="topcontainer">
              <img
                className="box1 eventpage_img"
                src={eventData?.image_url}
                alt="the event"
              />
              <div className="box2">
                <h2 className="eventpage_smalldate">
                  {eventData.date_from && (
                    <p>
                      {format(
                        new Date(`${eventData?.date_from}`),
                        'cccc, dd MMMM'
                      )}
                    </p>
                  )}
                </h2>
                <h1 className="eventinfo-name">{eventData?.title}</h1>
                <br></br>
                <div>
                  <h4 className="organizer">
                    Organized by: {organizer?.username}
                  </h4>
                  <img
                    className="organizeravatar"
                    src={organizer?.profile_url}
                    alt="organizeravatar"
                  />
                </div>
                <br></br>
                <div className="eventinfo-participants">
                  Maximum number of participants: {eventData?.user_limit}
                </div>
                <br></br>
                <h2 className="eventpage_price">
                  {eventData.price ? (
                    <>
                      Admission fee:
                      {' ' + eventData?.price} {eventData?.currency}
                    </>
                  ) : (
                    'Free'
                  )}
                </h2>
              </div>
            </div>
            <div className="success">
              {success && <p>You successfully joined the event!</p>}
            </div>
            <div className="joinbutton-container">
              <span className="mp_icons">
                <div className="mp_iconcontainer mp_iconcontainer2">
                  <FaFacebookF size={'1.5em'} />
                </div>
                <div className="mp_iconcontainer mp_iconcontainer2">
                  <FaTwitter size={'1.5em'} />
                </div>
                <div className="mp_iconcontainer mp_iconcontainer2">
                  <FaInstagram size={'1.5em'} />{' '}
                </div>
              </span>
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

              {joined || success ? (
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
                        success={success}
                        setSuccess={setSuccess}
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
            <div className="eventdescription-container">
              <section className="eventpagedescription">
                <div className="eventinfo-date">
                  {eventData.date_from && (
                    <p className="eventinfo-date">
                      {format(
                        new Date(`${eventData.date_from}`),
                        'cccc, dd MMMM yyyy h:mm aa'
                      )}{' '}
                      to{' '}
                      {format(
                        new Date(`${eventData.date_to}`),
                        'cccc, dd MMMM yyyy h:mm aa'
                      )}
                    </p>
                  )}
                  <div className="eventinfo-location">
                    {eventData?.location}
                  </div>
                </div>
                <h2>About this event</h2>
                <p className="eventinfo-description2">
                  {eventData?.description}
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="simplemap_container">
          <div className="eventinfo-simplemap">
            {eventData?.coord && (
              <SimpleMap title={'Event Location'} eventData={eventData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
