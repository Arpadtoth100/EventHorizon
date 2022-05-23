import { useState, useEffect, useContext } from 'react';
import { filterMyCreatedEvent } from '../services/crud';
import Pagination from '../services/Pagination';
import { AuthContext } from '../components/Context/AuthContext';



export default function MyEventsScreen(props) {
  const authContext = useContext(AuthContext);
  const [myCreatedEventList, setMyCreatedEventList] = useState([]);

  useEffect(() => {

    authContext.loggedUserID && filterMyCreatedEvent(authContext.loggedUserID).then((snapshot) =>
      setMyCreatedEventList(Object.entries(snapshot.val()))
    );
  }, []);

  return (
    <div className="outlet_main">

      <Pagination
        title={'My Created Events'}
        data={myCreatedEventList}
      />
    </div>
  );
}
