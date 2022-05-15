import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../EventComponents/EventCard';

function CardContainer(props) {

  const navigate = useNavigate();

  const clickEventHandler = (key) => () => {
    navigate("/eventpage");
  }

  const cards = props.data.map((item) => {
    const key = item[0];
    const eventData = item[1];
    return (
      <div className="event-card" onClick={clickEventHandler(key)}>
        <img src={props.image_url} className="event-card-image" alt="the event" />
        <h3 className="event-title">
          <p>{props.title}</p>
        </h3>
        <div className="event-date">{props.date_from}</div>
        <div className="event-venue">{props.location}</div>
        <div className="event-organizer">{props.organizer}</div>
      </div>
    )
  });

  return (
    <div className="main" >
      <h3>{props.title}</h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainer;
