import format from "date-fns/format";

export default function EventCard(props) {
  return (
    <div className="event-card">
      {(props.free === true || props.free === 'true') && (
        <div className="card-badge">FREE</div>
      )}
      <div className="event-cardFix">
        <img
          src={props.image_url ? props.image_url : 'https://picsum.photos/200'}
          className="event-card-image"
          alt="the event"
        />
      </div>
      <h3 className="event-title">
        <p className="event-title">{props.title}</p>
      </h3>
      <div className="event-date">{format(new Date(props.date_from), "cccc yyyy/MM/dd h:mm aa")}</div>
      <div className="event-venue">{props.location}</div>
      <div className="event-organizer">{props.organizer}</div>
    </div>
  );
}
