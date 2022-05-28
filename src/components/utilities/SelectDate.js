import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDate({ setDateValue, dateValue }) {


  return (
    <DatePicker
      selected={dateValue}
      onChange={(date) => setDateValue(date)}
      onSelect={(date) => setDateValue(date)}
      startDate={dateValue}
      dateFormat="MM/dd/yyyy"
      className="datepickerinput"
    />
  );
}

export default SelectDate;

//
