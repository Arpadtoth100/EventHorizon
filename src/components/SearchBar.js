import DatePick from '../components/utilities/DatePicker';
import Select from './utilities/Select';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="City" />
      <DatePick />
      <Select
        options={[['Please choose an option', 'Paid', 'Free'], 'Event type']}
      />
      <Select
        options={[
          ['Please choose an option', 'Online', 'In Person'],
          'Event Location',
        ]}
      />
      <Select
        options={[
          [
            'Please choose an option',
            'Music',
            'Flash Mob',
            'Theatre',
            'E-Sports',
            'Sports',
          ],
          'Category',
        ]}
      />
    </div>
  );
}
export default SearchBar;
