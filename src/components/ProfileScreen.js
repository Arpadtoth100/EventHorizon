import { filterFreeEvent, filterPaidEvent } from '../services/crud';
import { useState, useEffect } from 'react';
import Pagination from '../services/Pagination';

const ProfileScreen = () => {
  const [freeEventList, setFreeEventList] = useState([]);
  const [paidEventList, setPaidEventList] = useState([]);

  useEffect(() => {
    filterFreeEvent().then((snapshot) => {
      setFreeEventList(Object.entries(snapshot.val()));
    });
  }, []);

  useEffect(() => {
    filterPaidEvent().then((snapshot) => {
      setPaidEventList(Object.entries(snapshot.val()));
    });
  }, []);

  return (
    <div className="outlet_main">
      <Pagination title={'Free Events on The Horizon'} data={freeEventList} />
      <Pagination
        title={'Featured Events on The Horizon'}
        data={paidEventList}
      />
    </div>
  );
};
export default ProfileScreen;
