import { useState } from "react";
import JoinModal from "./JoinModal";

export default function EventInfo(props) {
  const [showJoinModal, setShowJoinModal] = useState(false)

  const openJoinModal = () => {
    setShowJoinModal(prev => !prev)
  }

  console.log(props)
  return (
    <div className="event-info">
      <h3 className="eventinfo-name">
        <p>{props.data.title}</p>
      </h3>
      <img src={props.data.image_url} alt="the event" />
      <div className="eventinfo-date">{props.data.date}</div>
      <div className="eventinfo-venue">{props.data.venue}</div>
      
      <div className="eventinfo-button">
        <button className="btn" onClick={openJoinModal}>Join</button>
        <JoinModal showJoinModal={showJoinModal} setShowJoinModal={setShowJoinModal} eventData={props}/>
      </div>
    </div>
  );
}

