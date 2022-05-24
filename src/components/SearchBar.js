import DatePicker from 'react-datepicker';
import FilterBar from './utilities/FilterBar';
import { useState } from 'react';

function SearchBar({ eventList, setFilteredList, filteredList }) {
  const [searchValue, setSearchValue] = useState({});

  function changeHandler(event) {
    let temp;
    if (event.target.name === 'loc') {
      setFilteredList(
        eventList.filter((fe) => {
          return fe[1].location
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        })
      );
      // } else if (event.target.name === 'se_price') {
      //   temp = eventList.map((ev) => {
      //     if (event.target.value === ev[1].free) {
      //       return ev;
      //     }
      //   });
      //   setFilteredList(temp.filter(Boolean));
      // } else if (event.target.name === 'se_type') {
      //   temp = eventList.map((ev) => {
      //     if (event.target.value === ev[1].event_type) {
      //       return ev;
      //     }
      //   });
      //   setFilteredList(temp.filter(Boolean));
      // } else if (event.target.name === 'se_category') {
      //   temp = eventList.map((ev) => {
      //     if (event.target.value === ev[1].category_id) {
      //       return ev;
      //     }
      //   });
      //   console.log(temp);
      //   setFilteredList(temp.filter(Boolean));
    }
  }

  return (
    <div>
      <form className="search_form">
        <h3>Search for events:</h3>
        <label htmlFor="loc" className="textlabel">
          Location
        </label>
        <input
          id="loc"
          name="loc"
          className="textinput"
          type="text"
          placeholder="City"
          onChange={changeHandler}
        />
        <p>Pick the date:</p>
        <DatePicker />
        <label htmlFor="se_price" className="textlabel">
          Admission
        </label>
        <select
          onChange={changeHandler}
          className="search_event_select"
          name="se_price"
          id="se_price"
        >
          <option value="">Please Choose an option</option>
          <option value="true">Free</option>
          <option value="false">Paid</option>
        </select>
        <label htmlFor="se_type" className="textlabel">
          Event type
        </label>
        <select
          onChange={changeHandler}
          className="search_event_select"
          name="se_type"
          id="se_type"
        >
          <option value="">Please Choose an option</option>
          <option value="online">Online</option>
          <option value="offline">In Person</option>
        </select>
        <label htmlFor="se_category" className="textlabel">
          Category
        </label>
        <select
          onChange={changeHandler}
          className="se_select"
          name="se_category"
          id="se_category"
        >
          <option value="">Please Select one</option>
          <option value="1">Music</option>
          <option value="2">Flash Mob</option>
          <option value="3">Theatre</option>
          <option value="4">E-Sports</option>
          <option value="5">Outdoor activity</option>
          <option value="6">{'Art & Culture'}</option>
          <option value="7">Games</option>
          <option value="8">Hobbies</option>
        </select>
        <h2>Filter result:</h2>
        <FilterBar eventList={eventList} setFilteredList={setFilteredList} />
      </form>
    </div>
  );
}
export default SearchBar;
