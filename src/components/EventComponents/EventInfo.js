import { useState } from "react";
import JoinModal from "./JoinModal";

export default function EventInfo(props) {
  const [showJoinModal, setShowJoinModal] = useState(false)

  const openJoinModal = () => {
    setShowJoinModal(prev => !prev)
  }
  return (
    <div className="event-info">
      <h3 className="eventinfo-name">
        <p>{props.title}</p>
      </h3>
      <div className="eventinfo-date">{props.date}</div>
      <div className="eventinfo-venue">{props.venue}</div>
      <div className="eventinfo-button">
        <button className="btn" onClick={openJoinModal}>Join</button>
        <JoinModal showJoinModal={showJoinModal} setShowJoinModal={setShowJoinModal} />
      </div>
    </div>
  );
}

