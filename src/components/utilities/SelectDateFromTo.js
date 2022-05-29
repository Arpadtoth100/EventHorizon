import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function SelectDateFromTo(props) {
  return (
    <>
      <DatePicker
      className="textlabel datepickerinput"
        selected={props.startDate}
        onChange={(date) => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}
        showTimeSelect
        dateFormat="MM/dd/yyyy h:mm aa"
      />
      <DatePicker
      className="textlabel datepickerinput"
        selected={props.endDate}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
        showTimeSelect
        dateFormat="MM/dd/yyyy h:mm aa"
      />
    </>
  );
}

export default SelectDateFromTo;
