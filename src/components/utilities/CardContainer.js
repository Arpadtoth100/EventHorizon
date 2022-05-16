import EventCard from '../EventComponents/EventCard';
import { readEvent } from '../../services/crud';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function CardContainer(props) {


  const navTo = useNavigate();

  const clickHandler = (key) => (event) => {
    event.preventDefault();
    navTo(`/eventpage/${key}`)
  }


  const cards = props.data.slice(0, 5).map((item) => {
    const key = item[0];
    return item[1].free === true &&
      <div key={key} onClick={clickHandler(key)}><EventCard key={key} {...item[1]} /></div>

  });



  return (
    <div className="main" >
      <h3>{props.title}</h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default CardContainer;
