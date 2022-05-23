import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

function SelectDateFromTo(props) {
  return (
    <>
      <DatePicker
        selected={moment(props.startDate).format("dddd MMMM Do, yyyy h:mm a")}
        onChange={(date) => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}
        // showTimeSelect
        dateFormat="Pp"
      />
      <DatePicker
        selected={moment(props.endDate).format("dddd MMMM Do, yyyy h:mm a")}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
        // showTimeSelect
        dateFormat="Pp"
      />
    </>
  );
}

export default SelectDateFromTo;
