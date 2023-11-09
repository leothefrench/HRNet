interface FormInputFieldProps {
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInputField: React.FC<FormInputFieldProps> = ({label, value, onChange}) => {
  return (
    <div>
      <label htmlFor={label} className="block mt-4">
        {label}
      </label>
      <input
        className="w-full p-2 border rounded"
        type="text"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}