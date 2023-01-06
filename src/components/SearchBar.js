import React from "react";
import styles from "../styles/SearchBar.module.css";
import {
  useSearchQueryContext,
  useSetSearchQueryContext,
} from "../contexts/SearchQueryContext";

const SearchBar = () => {
  const { searchQuery } = useSearchQueryContext();
  const { setSearchQuery } = useSetSearchQueryContext();
  return (
    <div className={`form-inline ${styles.SearchBar}`}>
      <input
        type="search"
        className="form-control"
        placeholder="Search for a champion"
        aria-label="Search"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
