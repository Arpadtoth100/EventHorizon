import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { deleteEvent, deleteAttandee } from '../../services/crud';
import { AuthContext } from '../Context/AuthContext';

function ConfirmationPopUp({
  setShowConfirmationPopUp,
  remove,
  cancel,
  confirmationQuestion,
  eventId,
  deleteOrRemove,
}) {
  const authContext = useContext(AuthContext);

  const CloseModalButton = MdClose;

  const toMyEvents = useNavigate();

  const deleteEventHandler = (event) => {
    event.preventDefault();
    deleteEvent(eventId);
    setShowConfirmationPopUp((prev) => !prev);
    toMyEvents('/profile');
  };

  const removeUserHandler = (event) => {
    event.preventDefault();
    deleteAttandee(eventId, authContext.loggedUserID);
    setShowConfirmationPopUp((prev) => !prev);
    toMyEvents('/profile');
  };

  return (
    <div className="modal-background">
      <div className="confirmation__box">
        <CloseModalButton
          className="CloseModalButton"
          aria-label="Close modal"
          onClick={() => setShowConfirmationPopUp((prev) => !prev)}
        />
        <div className="confirmationQ">{confirmationQuestion}</div>
        <div className="confirmationbutton__box">
          <button
            className="confirmationbutton joinEventBtn"
            onClick={deleteOrRemove ? deleteEventHandler : removeUserHandler}
          >
            {remove}
          </button>
          <button
            className="confirmationbutton joinEventBtn"
            onClick={() => setShowConfirmationPopUp((prev) => !prev)}
          >
            {cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopUp;
