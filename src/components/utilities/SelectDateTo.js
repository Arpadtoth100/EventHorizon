import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDateTo(props) {
  return (
    <>
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

export default SelectDateTo;
