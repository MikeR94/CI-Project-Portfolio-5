// React and Router
import React, { createContext, useContext, useState } from "react";

/**
 * Create the SearchQueryContext
 */
export const SearchQueryContext = createContext();

/**
 * Create the SetSearchQueryContext
 */
export const SetSearchQueryContext = createContext();

/**
 * Function to retrieve the SearchQueryContext
 */
export const useSearchQueryContext = () => useContext(SearchQueryContext);

/**
 * Function to retrieve the SetSearchQueryContext
 */
export const useSetSearchQueryContext = () => useContext(SetSearchQueryContext);

export const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchQueryContext.Provider value={{ searchQuery }}>
      <SetSearchQueryContext.Provider value={{ setSearchQuery }}>
        {children}
      </SetSearchQueryContext.Provider>
    </SearchQueryContext.Provider>
  );
};
