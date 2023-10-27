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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        filterData(e.target.value)
    }

  return (
    <div className="flex justify-between items-center">
        <div>
            <span>Show</span>
            <select id="row" value={numberRowSelected} onChange={handleSelectRow}>
                {options.map((choice) => (
                    <option key={choice} value={choice}>
                        {choice}
                    </option>
                ))}
            </select>
            <span>entries</span>
        </div>
        <div>
            <label htmlFor="search">Search:</label>
            <input
                type="text"
                id="search"
                value={searchText}
                onChange={handleSearch}
            />
        </div>
    </div>
  )
}