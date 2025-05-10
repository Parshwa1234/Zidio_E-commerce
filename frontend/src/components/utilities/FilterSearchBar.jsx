import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const options = ['Accounts', 'Aerospace Engineering', 'Web Development', 'Finance', 'Marketing'];

const FilterSearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [filters, setFilters] = useState([]);
  
    const handleAddFilter = (value) => {
      if (!filters.includes(value)) {
        setFilters([...filters, value]);
        setInputValue('');
      }
    };
  
    const handleRemove = (value) => {
      setFilters(filters.filter((item) => item !== value));
    };
  
    const filteredOptions = options.filter(
      (opt) => opt.toLowerCase().includes(inputValue.toLowerCase()) && !filters.includes(opt)
    );

  return (
    <div className="w-full max-w-2xl">
        <div className="w-full max-w-2xl rounded-xl border border-gray-300 bg-slate-900 text-white p-2 pl-3 focus-within:ring-2 focus-within:ring-blue-400 overflow-x-auto">
            {/* Inner scrollable flex row */}
            <div className="flex items-center gap-2 flex-nowrap">
                {/* Search icon */}
                <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-400 text-sm ml-1 shrink-0"
                />

                {/* Filters */}
                {filters.map((item, index) => (
                <div
                    key={index}
                    className="inline-flex items-center bg-blue-500 text-white px-3 py-1 rounded-md text-sm shrink-0"
                >
                    <span className="truncate max-w-[6rem]">{item}</span>
                    <button
                    className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                    onClick={() => handleRemove(item)}
                    >
                    &times;
                    </button>
                </div>
                ))}

                {/* Input field */}
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search filters..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none min-w-[120px] py-1 shrink-0"
                />
            </div>
            </div>


        {/* Dropdown Suggestions */}
        {inputValue && filteredOptions.length > 0 && (
            <div className="absolute mt-1 w-80 bg-slate-950 rounded-md shadow-lg z-10 max-h-40 overflow-y-auto border border-gray-700">
            {filteredOptions.map((opt, index) => (
                <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm text-white hover:text-black"
                onClick={() => handleAddFilter(opt)}
                >
                {opt}
                </div>
            ))}
            </div>
        )}
    </div>
  );
};

export default FilterSearchBar;
