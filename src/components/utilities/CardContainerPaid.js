import EventCard from '../EventComponents/EventCard';
import { readEvent } from '../../services/crud';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CardContainerPaid(props) {

  /* const navTo = useNavigate();
  const [eventDetailData, setEventDetailData] = useState([]);

  const clickHandler = (key) => (event) => {
  readEvent(key).then(snapshot => setEventDetailData(Object.entries(snapshot.val())));
  console.log(eventDetailData)
  navTo("/eventdetail")

   } */

  const cards = props.data.slice(0, 5).map((item) => {
    const key = item[0];
    return item[1].free === "false" &&
    <div key={key} /* onClick={clickHandler(key)} */><EventCard key={key} {...item[1]} /></div>
    
  });
  
  
  return (
    <div className="main">
      <h3>{props.title}</h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainerPaid;
