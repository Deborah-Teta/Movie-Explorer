import React from 'react';

function SearchBar({ search, setSearch }) {
  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log('Searching for:', search);
  };
  return (
    <div className="flex gap-2 mb-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
      />
      <button
        onClick={handleSearch}
        className="bg-amber-600 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;