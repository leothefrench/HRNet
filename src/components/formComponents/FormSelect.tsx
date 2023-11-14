import Select from 'react-select';

interface FormSelectProps {
  label: string;
  value: { label: string; value: string } | null;
  options: { label: string; value: string }[];
  onChange: (selectedOption: { label: string; value: string } | null) => void;
  getOptionLabel: (option: { label: string; value: string }) => string;
}

export const FormSelect:React.FC<FormSelectProps> = ({ label, value, options, onChange, getOptionLabel}) => {
  return (
    <div>
        <label htmlFor={label} className="block mt-4">
            {label}
        </label>
        <Select
            options={options}
            value={value}
            onChange={(selectedOption) => onChange(selectedOption)}
            getOptionLabel={getOptionLabel}
        />
    </div>
  )
}