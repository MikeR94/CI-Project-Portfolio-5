import React from "react";

const SearchBar = () => {
  return (
    <div class="form-outline">
      <input
        type="search"
        id="form1"
        class="form-control"
        placeholder="Search for a champion"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
