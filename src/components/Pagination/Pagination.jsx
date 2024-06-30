import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <button onClick={prevPage}>&lt;</button>
      <span> {currentPage} </span>
      <button onClick={nextPage}>&gt;</button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
