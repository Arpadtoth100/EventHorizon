import UserNavigationMenu from './utilities/UserNavigationMenu';
import { readEvent, readUser } from '../services/crud';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import Pagination from '../services/Pagination';

const ProfileScreen = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    readEvent().then((snapshot) =>
      setEventList(Object.entries(snapshot.val()))
    );
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    readUser(auth.currentUser?.uid)
      .then((snapshot) => {
        setUser(snapshot.val());
      })
      .catch((e) => console.log(e));
  }, [auth.currentUser]);

  return (
    <div className="outlet_main">
      <section className="userprofile_container">
        <span>
          <img
            className="useravatar"
            src={
              user?.profile_url
                ? user?.profile_url
                : 'https://picsum.photos/100'
            }
            alt="useravatar"
          />
          <p className="welcomeUser">
            Welcome {user?.username ? user?.username : ' Dear Guest'}!
          </p>
        </span>
        <div className="userNavMenu_container">
          <UserNavigationMenu />
        </div>
      </section>
      <Pagination title={'Free Events on The Horizon'} data={eventList} />
      <Pagination title={'Featured Events on The Horizon'} data={eventList} />
    </div>
  );
};
export default ProfileScreen;
