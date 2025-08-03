import React from 'react';


function SearchBar({ value, onChange, placeholder, results, onSearchSubmit }) {
   const handleSubmit = (e) => {
        e.preventDefault(); 
        if (onSearchSubmit) {
            onSearchSubmit(value); 
        }
    };
  return (
    <div className="relative w-full md:w-80">
      <form onSubmit={handleSubmit}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Search..."}
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            autoComplete="off"
          />
        </div>
      </form>
      {results && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {results.map((item, index) => (
              <li key={index}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item.name || item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default SearchBar;