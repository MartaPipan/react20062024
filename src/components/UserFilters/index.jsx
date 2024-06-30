import React from "react";
import styles from "./UserFilters.module.scss";

const UserFilters = ({
  currentResults,
  setCurrentResults,
}) => {
  const handlerResults = ({ target: { value } }) =>
    setCurrentResults(Number(value));

  return (
    <div className={styles["user-filters-container"]}>
      <div>
        <label className={styles["filter-label"]}>
          <input
            type="radio"
            value={5}
            checked={currentResults === 5}
            onChange={handlerResults}
          />
          5
        </label>
        <label className={styles["filter-label"]}>
          <input
            type="radio"
            value={10}
            checked={currentResults === 10}
            onChange={handlerResults}
          />
          10
        </label>
        <label className={styles["filter-label"]}>
          <input
            type="radio"
            value={15}
            checked={currentResults === 15}
            onChange={handlerResults}
          />
          15
        </label>
      </div>
    </div>
  );
};

export default UserFilters;
