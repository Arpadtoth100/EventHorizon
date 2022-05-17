import UserNavigationMenu from './utilities/UserNavigationMenu';
import CardContainer from '../components/utilities/CardContainer';
import CardContainerPaid from '../components/utilities/CardContainerPaid';
import { readEvent } from '../services/crud';
import { useState, useEffect } from 'react';

const ProfileScreen = (props) => {
  const [eventList, setEventList] = useState([]);


  useEffect(() => {
    readEvent()
      .then(snapshot => setEventList(Object.entries(snapshot.val())));

  }, [])
  return (
    <div className="outlet_main">
      <h2>ProfileScreen Page</h2>
      <section className='userprofile_container'>
        <div>
          <span>
            <img className='useravatar' src="https://picsum.photos/150" alt="useravatar" />
            <p className='welcomeUser'>Welcome User!</p>
          </span>
        </div>
        <div className='userNavMenu_container'>
          <UserNavigationMenu />
        </div>
      </section>
      <CardContainer
        title={'Newest Events on the Horizon'}
        data={eventList}
      />
      <CardContainerPaid
        title={'Featured Events on The Horizon'}
        data={eventList} />
    </div>
  );
}
export default ProfileScreen;
