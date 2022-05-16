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
      <h1 className="eventinfo-name">
        {props.data.title}
      </h1>
      <img src={props.data.image_url} alt="the event" />
      <div className="eventinfo-date">{props.data.date}</div>
      <div className="eventinfo-venue">{props.data.venue}</div>
      
      <div className="eventinfo-button">
        <button className="joinEventBtn" onClick={openJoinModal}>Join Event</button>
        <JoinModal showJoinModal={showJoinModal} setShowJoinModal={setShowJoinModal} eventData={props}/>
      </div>
    </div>
  );
}

