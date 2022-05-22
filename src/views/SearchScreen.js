import Map from '../components/GoogleMap/Map';
import SearchBar from '../components/SearchBar';
// import FilterBar from '../components/utilities/FilterBar';

function SearchScreen() {
  return (
    <div className="outlet_main search_container">
      <SearchBar />
      {/* <FilterBar /> */}
      <div className="mapcontainer_div">
        <Map />
      </div>
    </div>
  );
}

export default SearchScreen;
