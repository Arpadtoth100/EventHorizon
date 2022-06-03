import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDateFrom(props) {
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
        minDate={new Date()}
      />
    </>
  );
}

export default SelectDateFrom;