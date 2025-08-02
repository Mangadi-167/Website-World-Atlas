import React from 'react';

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative w-full md:w-50">
      {/* Ikon Pencarian */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        className="
          block w-full p-2.5 pl-10 
          text-sm text-slate-900 dark:text-slate-200
          bg-slate-100 dark:bg-slate-700 
          rounded-lg border border-transparent 
          focus:ring-2 focus:ring-sky-500 focus:border-transparent
          transition-all
          placeholder:text-slate-400
        "/>
    </div>
  );
}

export default SearchBar;
