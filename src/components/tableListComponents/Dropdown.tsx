interface DropdownProps {
    numberRowSelected: number;
    setNumberRowSelected: (value: number) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({numberRowSelected, setNumberRowSelected}) => {

    const options = [10, 25, 50]

    const handleSelectRow = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Selected value:', e.target.value);
        const selectedValue = parseInt(e.target.value, 10);
        setNumberRowSelected(selectedValue);
    }

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <label htmlFor="row" className="mx-1">
          Show:
        </label>
        <select
          id="row"
          value={numberRowSelected}
          onChange={handleSelectRow}
          className="mx-1 rounded"
        >
          {options.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
        <span>entries</span>
      </div>
    </div>
  );
}