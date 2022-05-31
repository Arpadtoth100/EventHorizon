import { useState, useEffect, useContext } from 'react';
import { filterMyCreatedEvent } from '../services/crud';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';
import { NavLink } from 'react-router-dom';

export default function MyEvents() {
  const authContext = useContext(AuthContext);
  const [myCreatedEventList, setMyCreatedEventList] = useState([]);

  useEffect(() => {
    authContext?.loggedUserID &&
      filterMyCreatedEvent(authContext.loggedUserID).then((snapshot) =>
        setMyCreatedEventList(Object.entries(snapshot.val() || {}))
      );
  }, [authContext.loggedUserID]);

  return (
    <>
      {myCreatedEventList.length !== 0 ? (
        <Pagination title={'Events I have Created'} data={myCreatedEventList} />
      ) : (
        <>
          <h2 className='warning'>You have not created any events yet!</h2>
          <div className="createvent_link">
          <NavLink to="/create_event" className="createvent_link">
            Create Event
          </NavLink>
          </div>
          
        </>
      )}
    </>
  );
}
