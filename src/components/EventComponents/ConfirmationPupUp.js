import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { deleteEvent } from '../../services/crud';

function ConfirmationPopUp({ setShowConfirmationPopUp, remove, cancel, confirmationQuestion, eventId }) {

    const CloseModalButton = MdClose;

    const toMyEvents = useNavigate()

    const deleteEventHandler = (event) => {
        event.preventDefault()
        deleteEvent(eventId)
        setShowConfirmationPopUp((prev) => !prev)
        toMyEvents('/my_events')
    }

    return (
        <div className='modal-background'>
            <div className="confirmation__box">
                <CloseModalButton
                    className="CloseModalButton"
                    aria-label="Close modal"
                    onClick={() => setShowConfirmationPopUp((prev) => !prev)}
                />
                <div className='confirmationQ'>{confirmationQuestion}</div>
                <div className='confirmationbutton__box'>
                    <button className='confirmationbutton joinEventBtn'
                        onClick={deleteEventHandler}>
                        {remove}
                    </button>
                    <button className='confirmationbutton joinEventBtn'
                        onClick={() => setShowConfirmationPopUp((prev) => !prev)}>
                        {cancel}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ConfirmationPopUp