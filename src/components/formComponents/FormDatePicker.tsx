import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormDatePickerProps {
    label: string,
    value: Date | null,
    onChange: (date: Date | null) => void
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({label, value, onChange}) => {
  return (
    <div>
      <label htmlFor={label} className="block mt-4">
        {label}
      </label>
      <DatePicker className="w-full p-2 border rounded" id={label} selected={value} onChange={onChange} name={label}/ >
    </div>
  );
}