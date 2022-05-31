import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';

function SelectDate({ setDateValue, dateValue }) {
  useEffect(() => {
    if (dateValue === null) {
      setDateValue('');
    }
  }, [dateValue]);
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
