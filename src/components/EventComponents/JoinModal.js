import React from 'react';
import { MdClose } from 'react-icons/md';
import { auth } from '../../config/firebase';
import { readUser, createAttendee } from '../../services/crud';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinModal({
  showJoinModal,
  setShowJoinModal,
  eventData,
  eventId,
}) {
  const [userName, setUserName] = useState('');
  const [success, setSuccess] = useState(false);

  const toSignInUP = useNavigate();

  const CloseModalButton = MdClose;

  const clickJoinHandler = (event) => {
    event.preventDefault();
    if (auth.currentUser) {
      createAttendee(eventId, auth.currentUser.uid, userName);
      setSuccess(true);
    } else {
      toSignInUP('/signin');
    }
  };

  useEffect(() => {
    if (auth?.currentUser?.uid) {
      readUser(auth.currentUser.uid).then((snapshot) =>
        setUserName(snapshot.val().username)
      );
    }
  }, []);

  return (
    <>
      {showJoinModal ? (
        <div className="modal-background">
          <div className="ModalWrapper" showJoinModal={showJoinModal}>
            <img
              className="ModalImg"
              src={eventData.data.image_url ? eventData.data.image_url : "https://picsum.photos/200" }
              alt="the event"
            />
            <div className="ModalContent">
              <h1>{eventData.data.title}</h1>
              
              <h4>Event location: {eventData.data.location}</h4>
              <h4>Event date: </h4>
              <p>{eventData.data.date_from} </p>
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
                <button
                  className="ModalDiscardButton"
                  aria-label="Close modal"
                  onClick={() => setShowJoinModal((prev) => !prev)}
                >
                  Discard
                </button>
                <br />
                <button className="ModalJoinButton" onClick={clickJoinHandler}>
                  Join Event
                </button>
              </div>
              {success && <p className='success'>Thank you, you successfully joined the event!</p>}
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
