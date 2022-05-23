import { filterEvent } from '../services/crud';
import { useState, useEffect } from 'react';
import Pagination from '../services/Pagination';

const ProfileScreen = () => {
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
