import moment from "moment";

export default function EventCard(props) {

  
  return (
    <div className="event-card">
      {(props.free === true || props.free === "true") && <div className="card-badge">FREE</div>}
      <img src={props.image_url ? props.image_url : "https://picsum.photos/200"} className="event-card-image" alt="the event" />
      <h3 className="event-title">
        <p className="event-title">{props.title}</p>
      </h3>
      <div className="event-date">{moment(props.date_from).format("dddd MMMM Do, yyyy h:mm a")}</div>
      <div className="event-venue">{props.location}</div>
      <div className="event-organizer">{props.organizer}</div>
    </div>
  );
}
