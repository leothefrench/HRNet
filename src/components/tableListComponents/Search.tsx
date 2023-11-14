import { useState } from 'react';

interface SearchProps {
    filterData: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ filterData }) => {

    const [searchText, setSearchText] = useState('')

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
    <div className="search-container relative mb-4">
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
  );
}
