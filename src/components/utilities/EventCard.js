export default function EventCard(props) {
  return (
    <div className="event-card">
      <img src={props.image} className="event-card-image" alt="the event" />
      <h3 className="event-title">
        <p>{props.title}</p>
      </h3>
      <div className="event-date">{props.date}</div>
      <div className="event-venue">{props.venue}</div>
      <div className="event-organizer">{props.organizer}</div>
    </div>
  );
}
