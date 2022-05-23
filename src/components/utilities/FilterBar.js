function FilterBar({ eventList, setFilteredList }) {
  function onChangeHandler(event) {
    setFilteredList(
      eventList.filter((fe) => {
        return fe[1].title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
    setFilteredList(
      eventList.filter((fe) => {
        return fe[1].description
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
    setFilteredList(
      eventList.filter((fe) => {
        return fe[1].location
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Result"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default FilterBar;
