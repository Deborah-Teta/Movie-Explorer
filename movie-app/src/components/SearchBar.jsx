import React from 'react'

function SearchBar ({ search, setSearch }) {
    return(
        <>
        <button onClick= {search}
            className="bg-gray-800 text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition">
                                Search
        </button>
        <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded md-w-2xl mb-4 bg-gray-200"
         />
        
        </>
    )
}
export default SearchBar