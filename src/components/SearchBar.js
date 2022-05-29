import SelectDate from '../components/utilities/SelectDate';
import FilterBar from './utilities/FilterBar';
import { useEffect, useState } from 'react';

function SearchBar({ eventList, setFilteredList }) {
  const [dateValue, setDateValue] = useState('');
  const [searchValue, setSearchValue] = useState({
    location: '',
    free: '',
    event_type: '',
    category_id: '',
  });

  function changeHandler(event) {
    setSearchValue((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  useEffect(() => {
    eventList &&
      setFilteredList(
        eventList?.filter((filtered) => {
          return (
            filtered[1].location
              .toLowerCase()
              .includes(searchValue?.location.toLowerCase()) &&
            filtered[1].free
              .toLowerCase()
              .includes(searchValue?.free.toLowerCase()) &&
            filtered[1].event_type
              .toLowerCase()
              .includes(searchValue?.event_type.toLowerCase()) &&
            filtered[1].category_id.includes(searchValue?.category_id) &&
            filtered[1].date_from
              .toLowerCase()
              .includes(dateValue.toString().slice(4, 15).toLowerCase())
          );
        })
      );
  }, [searchValue, dateValue]);

  return (
    <div>
      <form className="search_form">
        <h3>Search for events:</h3>
        <label htmlFor="loc" className="textlabel">
          Location
        </label>
        <input
          id="loc"
          name="location"
          className="textinput2"
          type="text"
          placeholder="City"
          onChange={changeHandler}
        />
        <p className="textlabel datepick">Pick the date:</p>
        <SelectDate setDateValue={setDateValue} dateValue={dateValue} />
        <label htmlFor="se_price" className="textlabel">
          Admission
        </label>
        <select
          onChange={changeHandler}
          className="select"
          name="free"
          id="se_price"
        >
          <option value="">Select one</option>
          <option value="true">Free</option>
          <option value="false">Paying</option>
        </select>
        <label htmlFor="se_type" className="textlabel">
          Event type
        </label>
        <select
          onChange={changeHandler}
          className="select"
          name="event_type"
          id="se_type"
        >
          <option value="">Select one</option>
          <option value="online">Online</option>
          <option value="offline">In Person</option>
        </select>
        <label htmlFor="se_category" className="textlabel">
          Category
        </label>
        <select
          onChange={changeHandler}
          className="select"
          name="category_id"
          id="se_category"
        >
          <option value="">Select one</option>
          <option value="1">Music</option>
          <option value="2">Flash Mob</option>
          <option value="3">Theatre</option>
          <option value="4">E-Sports</option>
          <option value="5">Outdoor activity</option>
          <option value="6">{'Art & Culture'}</option>
          <option value="7">Games</option>
          <option value="8">Hobbies</option>
          <option value="8">Other</option>
        </select>
        <h2 className="textlabel">Filter result:</h2>
        <FilterBar eventList={eventList} setFilteredList={setFilteredList} />
      </form>
    </div>
  );
}
export default SearchBar;
