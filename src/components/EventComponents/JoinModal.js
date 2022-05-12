import React from 'react';
import { MdClose } from 'react-icons/md';
import EventInfo from './EventInfo';

export default function JoinModal({ showJoinModal, setShowJoinModal }, props) {
    const CloseModalButton = MdClose;

    return (
        <>
            {showJoinModal ? (
                <div className='modal-background'>
                    <div className='ModalWrapper' showJoinModal={showJoinModal}>
                        <img className="ModalImg" src="https://picsum.photos/300/200" alt='' />
                        <div className="ModalContent">
                            <h1>Event title</h1>
                            <p>Event location: </p>
                            <p>Event date: </p>
                            <div>
                                <label htmlFor='email'>Send this event to your friend, enter their email:</label>
                                <input className="JoinModalInput" type="email" id='email' placeholder="email" required></input>
                                <button className="ModalSendButton">Send Event</button>
                            </div>
                            <div><button className="ModalDiscardButton" aria-label='Close modal'
                                onClick={() => setShowJoinModal(prev => !prev)}>Discard</button>
                                <button className="ModalJoinButton">Join Event</button></div>

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
