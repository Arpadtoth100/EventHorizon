import { useState, useEffect, useContext } from 'react';
import { filterMyCreatedEvent } from '../services/crud';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';

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
        <h3>You have not created any events yet!</h3>
      )}
    </>
  );
}
