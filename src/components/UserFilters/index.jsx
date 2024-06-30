import React from "react";
import styles from "./UserFilters.module.scss"

const UserFilters = ({
  currentResults,
  setCurrentResults,
  currentNat,
  setCurrentNat,
}) => {
  return (
    <div className={styles['user-filters-container']}>
      <select name="nat" value={currentNat} onChange={this.handlerNat}>
        <option value="us">us</option>
        <option value="dk">dk</option>
        <option value="fr">fr</option>
        <option value="gb">gb</option>
      </select>
      <div>
        <label className={styles['filter-label']}>
          <input
            type="radio"
            value={5}
            checked={currentResults === 5}
            onChange={this.handlerResults}
          />
          5
        </label>
        <label className={styles['filter-label']}>
          <input
            type="radio"
            value={10}
            checked={currentResults === 10}
            onChange={this.handlerResults}
          />
          10
        </label>
        <label className={styles['filter-label']}>
          <input
            type="radio"
            value={15}
            checked={currentResults === 15}
            onChange={this.handlerResults}
          />
          15
        </label>
      </div>
    </div>
  );
};

export default UserFilters;
