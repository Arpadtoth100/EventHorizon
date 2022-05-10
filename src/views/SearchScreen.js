import Map from '../components/utilities/Map';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/utilities/FilterBar';
import Pagination from '../services/Pagination';

function SearchScreen() {
  return (
    <div className="outlet_main">
      <SearchBar />
      <FilterBar />
      <Pagination />
      <Map />
    </div>
  );
}

export default SearchScreen;
