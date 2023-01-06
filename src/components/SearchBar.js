import React from "react";
import styles from "../styles/SearchBar.module.css";
import {
  useSearchQueryContext,
  useSetSearchQueryContext,
} from "../contexts/SearchQueryContext";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const { searchQuery } = useSearchQueryContext();
  const { setSearchQuery } = useSetSearchQueryContext();
  const history = useHistory();
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
          history.push("/");
        }}
      />
    </div>
  );
};

export default SearchBar;
