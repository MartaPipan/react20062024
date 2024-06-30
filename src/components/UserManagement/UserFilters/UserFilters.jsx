import React from "react";

const UserFilters = ({
  currentResults,
  setCurrentResults,
  currentNat,
  setCurrentNat,
}) => {
  return (
    <div>
      <select name="nat" value={currentNat} onChange={this.handlerNat}>
        <option value="us">us</option>
        <option value="dk">dk</option>
        <option value="fr">fr</option>
        <option value="gb">gb</option>
      </select>
      <div>
        <label>
          <input
            type="radio"
            value={5}
            checked={currentResults === 5}
            onChange={this.handlerResults}
          />
          5
        </label>
        <label>
          <input
            type="radio"
            value={10}
            checked={currentResults === 10}
            onChange={this.handlerResults}
          />
          10
        </label>
        <label>
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
