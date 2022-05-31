import Pagination from '../services/Pagination';
import { useState, useEffect } from 'react';
import { filterEvent } from '../services/crud';
import '../Video.css';
import videoBg3 from '../images/videoBg3.mp4';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

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
    <div>
      <div className="videomain">
        <video className="video" src={videoBg3} autoPlay loop muted />
        <div className="aboutus-hero-text">
            <h1>Every Day There Are New Events on the Horizon!</h1>
            <br />
            <h1>Let's Explore!</h1>
          <span className="followus">
            <div className="icon">
              <FaFacebookF size={'1.5em'} />
            </div>
            <div className="icon">
              <FaTwitter size={'1.5em'} />
            </div>
            <div className="icon">
              <FaInstagram size={'1.5em'} />{' '}
            </div>
          </span>
        </div>
      </div>
      <div className="blabla">
        <h2>
          Event Horizon is the best place for finding wonderful events you can
          join!
        </h2>
        <br />
        <p>
          EventHorizon is the best lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cumque ratione est ut nisi nihil repudiandae officia
          pariatur voluptatem! Culpa eligendi vitae magni amet fugit nihil
          officiis harum, aliquid voluptas laudantium?
        </p>
        {/*<p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est laborum.
        </p> */}
      </div>

      <br></br>
      <br></br>

      <Pagination title={'Free Events on The Horizon'} data={freeEventList} />
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
