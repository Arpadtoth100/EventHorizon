import EventCard from '../EventComponents/EventCard';
import { useNavigate } from 'react-router-dom';

function CardContainer(props) {
  const navTo = useNavigate();

  const clickHandler = (key) => (event) => {
    event.preventDefault();
    navTo(`/eventpage/${key}`);
  };

  const cards = props.data.map((item) => {
    const key = item[0];
    return (
      <div key={key} onClick={clickHandler(key)}>
        <EventCard key={key} {...item[1]} />
      </div>
    );
  });

  return (
    <div className="main">
      <h1 className='cardlist-title'>{props.title}</h1>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainer;
