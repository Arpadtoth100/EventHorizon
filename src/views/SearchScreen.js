import Map from '../components/utilities/Map';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/utilities/FilterBar';
import CardContainer from '../components/utilities/CardContainer';

function SearchScreen() {
  return (
    <div className="outlet_main">
      <SearchBar />
      <FilterBar />
      <CardContainer title={'Results:'} />
      <Map />
    </div>
  );
}

export default SearchScreen;
