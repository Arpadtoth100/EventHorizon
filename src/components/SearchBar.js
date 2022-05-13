import SelectDate from './utilities/SelectDate';

function SearchBar() {
  return (
    <>
      <input type="text" placeholder="City" />
      <SelectDate />
      <label htmlFor="se_price">Admission</label>
      <select className="search_event_select" name="se_price" id="se_price">
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>
      <label htmlFor="se_type">Event type</label>
      <select className="search_event_select" name="se_type" id="se_type">
        <option value="online">Online</option>
        <option value="paid">In Person</option>
      </select>
      <label htmlFor="se_category">Category</label>
      <select className="se_select" name="se_category" id="se_category">
        <option value="0">Please Select an option</option>
        <option value="1">Music</option>
        <option value="2">Theatre</option>
        <option value="3">Travel</option>
        <option value="4">Sports</option>
        <option value="5">E-Sports</option>
      </select>
    </>
  );
}
export default SearchBar;
