import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={moment(startDate).format("dddd MMMM Do, yyyy h:mm a")}
      onChange={(date) => setStartDate(date)}
      // showTimeSelect
      dateFormat="Pp"
    />
  );
}

export default SelectDate;
