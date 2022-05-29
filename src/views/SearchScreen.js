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

  console.log('filteredlist', filteredList)

  if (filteredList.length === 0) {
    return (
      <>
        <div className="outlet_main search_container">
  
          <SearchBar
            eventList={eventList}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
          />
          <div className="pagination_search">
            <div className='search_title'>
            <h1 id='nosuchevents'>There are no such events yet!</h1>
            <h1>You can search for other options, please fill in the form again!</h1>
            </div>
            
          </div>
        </div>
        <div className="mapcontainer_div_search">
          <Map eventList={filteredList} title={"Let's Explore"} />
        </div>
  
      </>)
  } else

  return (
    <>
      <div className="outlet_main search_container">

        <SearchBar
          eventList={eventList}
          setFilteredList={setFilteredList}
          filteredList={filteredList}
        />
        <div className="pagination_search">
          <div className='search_title'>
            <h1>You can search for events here, please fill in the form!</h1>
            <h2>Before you start searching, we offer you some events.</h2>
            <h2>After your search the results will appear below.</h2>
          </div>
          <Pagination
            // title={'Check these awesome events'} 
            data={filteredList} />
        </div>
      </div>
      <div className="mapcontainer_div_search">
        <Map eventList={filteredList} title={"Let's Explore"} />
      </div>

    </>
  );
}

export default SearchScreen;
