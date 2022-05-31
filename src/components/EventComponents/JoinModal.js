import React from 'react';
import { MdClose } from 'react-icons/md';
import { auth } from '../../config/firebase';
import {
  readUser,
  createAttendee,
  readAttendee,
  readEvent,
} from '../../services/crud';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Payment from '../Paypal/Payment';
import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import format from "date-fns/format";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function JoinModal({
  showJoinModal,
  setShowJoinModal,
  eventData,
  eventId,
  success,
  setSuccess,
}) {
  const [userName, setUserName] = useState('');

  const [paidFor, setPaidFor] = useState(false);
  const [joinModalEvent, setJoinModalEvent] = useState([]);
  const [attendee, setAttendee] = useState([]);
  const [free, setFree] = useState(false);

  const [{ options }, dispatch] = usePayPalScriptReducer();

  let { id } = useParams();

  useEffect(() => {
    readEvent(id).then((snapshot) => setJoinModalEvent(snapshot.val() || {}));
  }, []);

  useEffect(() => {
    readAttendee(id).then((snapshot) =>
      setAttendee(Object.entries(snapshot.val() || {}))
    );
  }, []);

  useEffect(() => {
    if (eventData?.free === 'true') {
      setFree(true);
    }
  }, [eventData?.free]);

  const navTo = useNavigate();

  const CloseModalButton = MdClose;

  const clickJoinHandler = (event) => {
    event.preventDefault();
    if (auth.currentUser) {
      createAttendee(eventId, auth.currentUser.uid, userName);
      setSuccess(true);
    } else {
      navTo('/signin');
    }
  };

  useEffect(() => {
    if (auth?.currentUser?.uid) {
      readUser(auth.currentUser.uid).then((snapshot) =>
        setUserName(snapshot.val().username)
      );
    }
  }, []);

  function priceCheck() {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: eventData.currency,
      },
    });
  }
  useEffect(() => {
    priceCheck();
  }, [eventData?.currency]);

  return (
    <>
      {showJoinModal ? (
        <div className="modal-background">
          <div className="ModalWrapper">
            <img
              className="ModalImg"
              src={
                eventData.image_url ? eventData.image_url : './blackhole.png'
              }
              alt="the event"
            />
            <div className="ModalContent">
              <h1>{eventData.title}</h1>

              <h4>{eventData.location}</h4>
              <br />
              <p>{format(new Date(eventData.date_from), "cccc, dd MMMM yyyy h:mm aa")} </p>
              <br></br>
              <div>
                <p> Share this event on social media</p>
                <span className="joinmodal_icons">
                  <div className='iconcontainer'><FaFacebookF size={'1.5em'} /></div>
                  <div className='iconcontainer'><FaTwitter size={'1.5em'} /></div>
                  <div className='iconcontainer'><FaInstagram size={'1.5em'} />{' '}</div>
                </span>
              </div>
              {Number(joinModalEvent.user_limit) === attendee.length ? (
                <h3>Event is full</h3>
              ) : (
                <div>
                  <br />
                  {free ? (
                    <>
                      {!success && (
                        <button
                          className="ModalJoinButton"
                          onClick={clickJoinHandler}
                        >
                          Join Event
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {!success && (
                        <>
                          <div>
                            Event fee: {eventData.price} {eventData.currency}
                          </div>
                          <Payment
                            product={eventData}
                            paidfor={paidFor}
                            setPaidFor={setPaidFor}
                            setSuccess={setSuccess}
                            eventId={eventId}
                            userName={userName}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
              {success && (
                <div className="success">
                  <p>You successfully joined the event!</p>
                  <p>Redirecting you to your Profile</p>
                </div>
              )}
            </div>
            <CloseModalButton
              className="CloseModalButton"
              aria-label="Close modal"
              onClick={() => setShowJoinModal((prev) => !prev)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
