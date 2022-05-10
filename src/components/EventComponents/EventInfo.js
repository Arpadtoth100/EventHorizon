export default function EventInfo(props) {
  return (
    <div className="event-info">
      <h3 className="eventinfo-name">
        <p>{props.title}</p>
      </h3>
      <div className="eventinfo-date">{props.date}</div>
      <div className="eventinfo-venue">{props.venue}</div>
      <div className="eventinfo-button">
        <button className="btn">Join</button>
      </div>
    </div>
  );
}
