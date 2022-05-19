import { readEvent } from '../services/crud';
import { useState, useEffect } from 'react';
import Pagination from '../services/Pagination';
import UserNavigationMenu from '../components/utilities/UserNavigationMenu';
import CardContainerMyCreated from '../components/utilities/CardContainerMyCreated';

export default function MyEventsScreen(props) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    readEvent().then((snapshot) =>
      setEventList(Object.entries(snapshot.val()))
    );
  }, []);

  return (
    <div className="outlet_main">
      <UserNavigationMenu />
      <CardContainerMyCreated title={'Events Created By Me'} data={eventList} />
      {/* <Pagination /> */}
    </div>
  );
}
