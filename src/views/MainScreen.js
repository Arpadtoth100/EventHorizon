import CardContainer from '../components/utilities/CardContainer';
import CardContainerPaid from '../components/utilities/CardContainerPaid';
import Slider from '../services/Slider';
import Pagination from '../services/Pagination';
import { readEvent } from '../services/crud';
import { useState, useEffect } from 'react';

const MainScreen = (props) => {
  const [eventList, setEventList] = useState([]);
  //const [freeEventList, setFreeEventList] = useState([]);
  //const [paidEventList, setPaidEventList] = useState([]);

  useEffect(() => {
    readEvent().then((snapshot) =>
      setEventList(Object.entries(snapshot.val()))
    );
  }, []);

  // useEffect(() => {
  //   filterFreeEvent().then((snapshot) => {
  //     snapshot.forEach((child) => {
  //       console.log(child.val());
  //     });
  //   });
  // }, []);

  return (
    <div className="outlet_main">
      <div className="about-us_container">
        <div className="aboutus-hero">
          <div className="aboutus-hero-img-wrapper">
            <img
              className="aboutus-hero-img"
              src="./pexels-pixabay-207896 new color1.jpg"
              alt=""
            />
          </div>
          <div className="aboutus-hero-text">
            <p>There are always great events on the horizon!</p>
            <br />
            <p>Let's Explore!</p>
          </div>
        </div>
        <div className="blabla">
          <p>
            EventHorizon is the best lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cumque ratione est ut nisi nihil repudiandae
            officia pariatur voluptatem! Culpa eligendi vitae magni amet fugit
            nihil officiis harum, aliquid voluptas laudantium?
          </p>
        </div>
      </div>

      <br />
      <Pagination title={'Free Events on The Horizon'} data={eventList} />
      <Pagination title={'Featured Events on The Horizon'} data={eventList} />
    </div>
  );
};

export default MainScreen;
