import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDate({ setDateValue }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      onSelect={(date) => setDateValue(date.toString().slice(4, 15))}
      startDate={startDate}
      dateFormat="MM/dd/yyyy"
    />
  );
}

export default SelectDate;
