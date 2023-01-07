import React from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ championsPerPage, totalChampions, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChampions / championsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={`pagination ${styles.Ul}`}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Button
              onClick={() => paginate(number)}
              className={`page-link ${styles.Button}`}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
