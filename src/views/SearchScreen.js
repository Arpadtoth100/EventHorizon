import Map from '../components/GoogleMap/Map';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/utilities/FilterBar';
import Pagination from '../services/Pagination';

function SearchScreen() {
  return (
    <div className="outlet_main">
      <SearchBar />
      <FilterBar />
      <Pagination />
      <div className="mapcontainer_div">
        <Map />
      </div>
    </div>
  );
}

export default SearchScreen;
