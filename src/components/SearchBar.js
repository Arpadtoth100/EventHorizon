import DatePicker from 'react-datepicker';
import FilterBar from './utilities/FilterBar';

function SearchBar({ eventList, setFilteredList }) {
  return (
    <div>
      <form className="search_form">
        <h3>Search for events:</h3>
        <label htmlFor="city" className="textlabel">
          City
        </label>
        <input type="text" placeholder="City" />
        <p>Pick the date:</p>
        <DatePicker />
        <label htmlFor="se_price" className="textlabel">
          Admission
        </label>
        <select className="search_event_select" name="se_price" id="se_price">
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        <label htmlFor="se_type" className="textlabel">
          Event type
        </label>
        <select className="search_event_select" name="se_type" id="se_type">
          <option value="online">Online</option>
          <option value="paid">In Person</option>
        </select>
        <label htmlFor="se_category" className="textlabel">
          Category
        </label>
        <select className="se_select" name="se_category" id="se_category">
          <option value="0">Please Select an option</option>
          <option value="1">Music</option>
          <option value="2">Theatre</option>
          <option value="3">Travel</option>
          <option value="4">Sports</option>
          <option value="5">E-Sports</option>
        </select>
        <h2>Filter result:</h2>
        <FilterBar eventList={eventList} setFilteredList={setFilteredList} />
      </form>
    </div>
  );
}
export default SearchBar;
