// React and Router
import React from "react";
import { useHistory } from "react-router-dom";
// Contexts
import {
  useSearchQueryContext,
  useSetSearchQueryContext,
} from "../contexts/SearchQueryContext";
// Styles
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const { searchQuery } = useSearchQueryContext();
  const { setSearchQuery } = useSetSearchQueryContext();
  const history = useHistory();
  return (
    <div className={`form-inline ${styles.SearchBar}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Search for a champion"
        aria-label="Search"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          history.push("/home");
        }}
      />
    </div>
  );
};

export default SearchBar;
