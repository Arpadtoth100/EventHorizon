import { useState, useEffect, useContext } from 'react';
import { filterMyCreatedEvent } from '../services/crud';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';

export default function MyEventsScreen(props) {
  const authContext = useContext(AuthContext);
  const [myCreatedEventList, setMyCreatedEventList] = useState([]);
  console.log(myCreatedEventList);
  useEffect(() => {
    authContext?.loggedUserID &&
      filterMyCreatedEvent(authContext.loggedUserID).then((snapshot) =>
        setMyCreatedEventList(Object.entries(snapshot.val()))
      );
  }, [authContext.loggedUserID]);

  return (
    <div className="outlet_main">
      {myCreatedEventList.length != 0 ? (
        <Pagination title={'My Created Events'} data={myCreatedEventList} />
      ) : (
        <h3>You have not created any events yet!</h3>
      )}
    </div>
  );
}
