// React and Router
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// Contexts
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { SearchQueryProvider } from "./contexts/SearchQueryContext";
// Styles
import "./index.css";
// Web Vitals
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <SearchQueryProvider>
          <App />
        </SearchQueryProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
