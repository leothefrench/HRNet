import { useState } from "react";

interface DropdownProps {
    numberRowSelected: number;
    setNumberRowSelected: (value: number) => void;
    filterData: (value: string) => void;
}


export const Dropdown: React.FC<DropdownProps> = ({numberRowSelected, setNumberRowSelected, filterData}) => {

    const options = [10, 25, 50]
    const [searchText, setSearchText] = useState('')

    const handleSelectRow = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberRowSelected(parseInt(e.target.value, 10))
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if (typeof e === 'string') {
            setSearchText(e)
            filterData(e)
        } else {
            setSearchText(e.target.value)
            filterData(e.target.value)
        }
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
      <div className="search-container relative">
        <label htmlFor="search" className="mx-1">
          Search:
        </label>
        <input
          type="text"
          id="search"
          value={searchText}
          onChange={handleSearch}
          className="rounded pr-10"
        />
        {searchText && (
          <button
            className="text-red-500 text-center absolute top-0 right-0 rounded pr-2"
            onClick={() => handleSearch('')}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
}