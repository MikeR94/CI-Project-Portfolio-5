import React, { createContext, useContext, useState } from "react";

export const SearchQueryContext = createContext();
export const SetSearchQueryContext = createContext();

export const useSearchQueryContext = () => useContext(SearchQueryContext);
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
