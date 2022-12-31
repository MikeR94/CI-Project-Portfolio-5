import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={`form-inline ${styles.SearchBar}`}>
      <input
        type="search"
        id="form1"
        className="form-control"
        placeholder="Search for a champion"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
