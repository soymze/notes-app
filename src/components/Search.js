import React from 'react';
import './Search.css';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className='search-box'>
      <input 
        type="search" 
        placeholder='Search...' 
        className='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
