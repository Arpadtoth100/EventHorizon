import React from 'react';
import { MdClose } from 'react-icons/md';
import EventInfo from './EventInfo';
import { auth } from '../../config/firebase'
import { readUser, createAttendee } from '../../services/crud';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function JoinModal({ showJoinModal, setShowJoinModal, eventData, eventId }) {

    const [userName, setUserName] = useState("");

    const toSignInUP = useNavigate()

    const CloseModalButton = MdClose;

    const clickJoinHandler = (event) => {
        event.preventDefault();
        if (!auth.currentUser.uid) {
            toSignInUP("/signin")
        }
        createAttendee(eventId, auth.currentUser.uid, userName);
        alert("Thank you, you successfully joined the event!");
    };

    useEffect(() => {
        if (auth.currentUser.uid) {
            readUser(auth.currentUser.uid).then(snapshot => setUserName(snapshot.val().username));
        }
    }, [])

    return (
        <>
            {showJoinModal ? (
                <div className='modal-background'>
                    <div className='ModalWrapper' showJoinModal={showJoinModal}>
                        <img className="ModalImg" src={eventData.data.image_url} alt='the event' />
                        <div className="ModalContent">
                            <h1>{eventData.data.title}</h1>
                            <p>Event location: {eventData.data.venue}</p>
                            <p>Event date: {eventData.data.date} </p>
                            <div>
                                <label htmlFor='email'>Send this event to your friend, enter their email:</label>
                                <input className="JoinModalInput" type="email" id='email' placeholder="email" required></input>
                                <button className="ModalSendButton">Send Event</button>
                            </div>
                            <div>
                                <button className="ModalDiscardButton" aria-label='Close modal'
                                    onClick={() => setShowJoinModal(prev => !prev)}>Discard</button>
                                <br />
                                <button className="ModalJoinButton" onClick={clickJoinHandler}>Join Event</button></div>

                        </div>
                        <CloseModalButton className='CloseModalButton'
                            aria-label='Close modal'
                            onClick={() => setShowJoinModal(prev => !prev)}
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}
