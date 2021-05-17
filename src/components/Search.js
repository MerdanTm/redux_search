import React from "react";

function Search({ onSearch }) {
  return (
    <div>
      <input type="text" onChange={(e) => onSearch(e.target.value)}></input>
      <label>Search</label>
    </div>
  );
}

export default Search;
