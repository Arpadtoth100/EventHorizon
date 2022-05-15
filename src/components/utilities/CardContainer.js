import EventCard from '../EventComponents/EventCard';

function CardContainer(props) {
  const cards = props.data.map((item) => {
    const key = item[0];
    const eventData = item[1];
    return <EventCard key={key} {...item[1]} />;
  });
  return (
    <div className="main" onClick={props.onClick}>
      <h3>{props.title}</h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainer;
