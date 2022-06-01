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
      <div className="inner_search">
        <div className="search_title">
          <h1>Explore the Horizon!</h1>
          <h2>Hundreds of great Events are waiting for You!</h2>
        </div>
        <div className="search_container">
          <div className="search_bar">
            <SearchBar
              eventList={eventList}
              setFilteredList={setFilteredList}
              filteredList={filteredList}
            />
          </div>
          {filteredList.length === 0 ? (
            <div id="nosuchevents">
              <h1>There are no such events yet!</h1>
              <h2>Try searching again!</h2>
            </div>
          ) : (
            <div className="search_output">
              <Pagination
                data={filteredList}
                searchscreen_class={'searchscreen_class'}
              />
            </div>
          )}
          <div className="search_map">
            <Map eventList={filteredList} title={"Let's Explore"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchScreen;
