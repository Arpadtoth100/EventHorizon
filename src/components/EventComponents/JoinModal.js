import React, { useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import { auth } from '../../config/firebase';
import { readUser, createAttendee } from '../../services/crud';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from '../Paypal/Payment';

import { usePayPalScriptReducer } from '@paypal/react-paypal-js';

export default function JoinModal({
  showJoinModal,
  setShowJoinModal,
  eventData,
  eventId,
}) {
  const [userName, setUserName] = useState('');
  const [success, setSuccess] = useState(false);
  const [paidFor, setPaidFor] = useState(false);

  const [{ options }, dispatch] = usePayPalScriptReducer();

  const toSignIn = useNavigate();


  const CloseModalButton = MdClose;

  const clickJoinHandler = (event) => {
    event.preventDefault();
    if (auth.currentUser) {
      createAttendee(eventId, auth.currentUser.uid, userName);
      setSuccess(true);
    } else {
      toSignIn('/signin');
    }
  };

  useEffect(() => {
    if (auth?.currentUser?.uid) {
      readUser(auth.currentUser.uid).then((snapshot) =>
        setUserName(snapshot.val().username)
      );
    }
  }, []);

  const priceCheck = useCallback(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: eventData.currency,
      },
    });
  }, [dispatch, options, eventData.currency]);

  useEffect(() => {
    if (eventData.free) {
      setPaidFor(true);
    }
    priceCheck();
  }, [eventData.free, priceCheck]);

  return (
    <>
      {showJoinModal ? (
        <div className="modal-background">
          <div className="ModalWrapper" showJoinModal={showJoinModal}>
            <img
              className="ModalImg"
              src={
                eventData.image_url
                  ? eventData.image_url
                  : 'https://picsum.photos/200'
              }
              alt="the event"
            />
            <div className="ModalContent">
              <h1>{eventData.title}</h1>

              <h4>Event location: {eventData.location}</h4>
              <h4>Event date: </h4>
              <p>{eventData.date_from} </p>
              <br></br>
              <div>
                <label htmlFor="email">
                  Send this event to your friend, enter their email:
                </label>
                <input
                  className="JoinModalInput"
                  type="email"
                  id="email"
                  placeholder="email"
                  required
                ></input>
                <button className="ModalSendButton">Send Event</button>
              </div>
              <div>
                <br />
                {paidFor ? (
                  <button
                    className="ModalJoinButton"
                    onClick={clickJoinHandler}
                  >
                    Join Event
                  </button>
                ) : (
                  <>
                    <div>
                      Event fee: {eventData.price} {eventData.currency}
                    </div>
                    <Payment
                      product={eventData}
                      paidfor={paidFor}
                      setPaidFor={setPaidFor}
                    />
                  </>
                )}
              </div>
              {success && (
                <p className="success">
                  Thank you, you successfully joined the event!
                </p>
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
