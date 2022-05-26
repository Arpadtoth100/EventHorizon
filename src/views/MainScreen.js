import Pagination from '../services/Pagination';
import { useState, useEffect } from 'react';
import { filterEvent } from '../services/crud';

const MainScreen = () => {
  const [freeEventList, setFreeEventList] = useState([]);
  const [paidEventList, setPaidEventList] = useState([]);

  useEffect(() => {
    filterEvent('true').then((snapshot) => {
      setFreeEventList(Object.entries(snapshot.val()));
    });
  }, []);

  useEffect(() => {
    filterEvent('false').then((snapshot) => {
      setPaidEventList(Object.entries(snapshot.val()));
    });
  }, []);

  return (
    <div className="outlet_main">
      <div className="about-us_container">
        <div className="aboutus-hero">
          <div className="aboutus-hero-img-wrapper">
            <img
              className="aboutus-hero-img"
              src="./pexels-pixabay-207896 new color kisebb.jpg"
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
          <h2>
            Event Horizon is the best place for finding wonderful events you can
            join!
          </h2>
          <br></br>
          <p>
            EventHorizon is the best lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cumque ratione est ut nisi nihil repudiandae
            officia pariatur voluptatem! Culpa eligendi vitae magni amet fugit
            nihil officiis harum, aliquid voluptas laudantium?
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum.
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <Pagination title={'Free Events on The Horizon'} data={freeEventList} />
      <br></br>
      <br></br>
      <Pagination
        title={'Featured Events on The Horizon'}
        data={paidEventList}
      />
      <br></br>
    </div>
  );
};

export default MainScreen;
