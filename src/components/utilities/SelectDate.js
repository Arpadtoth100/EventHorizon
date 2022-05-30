import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDate({ setDateValue, dateValue }) {
  return (
    <DatePicker
      selected={dateValue}
      onChange={(date) => setDateValue(date)}
      onSelect={(date) => setDateValue(date)}
      startDate={new Date()}
      dateFormat="MM/dd/yyyy"
      className="datepickerinput"
      minDate={new Date()}
    />
  );
}

export default SelectDate;

//
