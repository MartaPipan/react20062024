import React from 'react';

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

export default Pagination;