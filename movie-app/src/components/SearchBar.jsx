import React from 'react'

function SearchBar ({ search, setSearch }) {
    return(
        <>
        <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
         />
        </>
    )
}
export default SearchBar