import Map from '../components/GoogleMap/Map';
import SearchBar from '../components/SearchBar';
import Pagination from '../services/Pagination';
import { readEvent } from '../services/crud';
import { useEffect, useState } from 'react';

function SearchScreen() {
  const [eventList, setEventList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    readEvent().then((snapshot) => {
      setEventList(Object.entries(snapshot.val()));
      setFilteredList(Object.entries(snapshot.val()));
    });
  }, []);

  return (
    <>
      <div className="outlet_main search_container">
        <SearchBar eventList={eventList} setFilteredList={setFilteredList} />
        <div className="mapcontainer_div">
          <Map />
        </div>
      </div>
      <div>
        <Pagination title={'Check these awesome events'} data={filteredList} />
      </div>
    </>
  );
}

export default SearchScreen;
