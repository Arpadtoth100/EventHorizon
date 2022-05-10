import EventCard from '../EventComponents/EventCard';
import { eventCardData } from '../../services/eventCardData';

function CardContainer(props) {
  const cards = eventCardData.map((item) => {
    return <EventCard key={item.id} {...item} />;
  });
  return (
    <div className="main">
      <h3>{props.title}</h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainer;
