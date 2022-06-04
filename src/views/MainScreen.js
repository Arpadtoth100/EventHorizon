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
  const perPage = 5;

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
          <span className="mp_icons">
            <div className="mp_iconcontainer">
              <FaFacebookF size={'1.5em'} />
            </div>
            <div className="mp_iconcontainer">
              <FaTwitter size={'1.5em'} />
            </div>
            <div className="mp_iconcontainer">
              <FaInstagram size={'1.5em'} />{' '}
            </div>
          </span>
        </div>
      </div>
      <div className="mainbackground">
        <div className="blabla">
          <h2>Event Horizon is the best place for finding wonderful events!</h2>
          <br />
          <p>Events. Programs. Where to go. Today. Tomorrow. Next week.</p>

          <p>You find it all here!</p>

          <p>
            We offer the best things to do and you can help us to offer even
            more if you create new events. Or simply join.
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
        <div className="greentitle">
          <Pagination
            title={'Free Events on The Horizon'}
            data={freeEventList}
            perPage={perPage}
          />
        </div>
        <br></br>
        <div className="greentitle">
          <Pagination
            title={'Featured Events on The Horizon'}
            data={paidEventList}
            perPage={perPage}
          />
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default MainScreen;
