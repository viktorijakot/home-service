import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfToday } from "date-fns";

interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => onDateChange(date)}
      dateFormat="yyyy-MM-dd"
      inline
      minDate={startOfToday()}
    />
  );
};

export default DatePicker;
