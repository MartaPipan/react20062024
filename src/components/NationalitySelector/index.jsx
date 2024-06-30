import React from "react";
import PropTypes from "prop-types";
import styles from "./NationalitySelector.module.scss";

const NationalitySelector = ({ currentNat, setCurrentNat }) => {
  const handlerNat = ({ target: { value } }) => setCurrentNat(value);

  return (
    
      <select
        name="nat"
        value={currentNat}
        onChange={handlerNat}
        className={styles["select-nat"]}
      >
        <option value="us">us</option>
        <option value="dk">dk</option>
        <option value="fr">fr</option>
        <option value="gb">gb</option>
      </select>
    
  );
};

NationalitySelector.propTypes = {
  currentNat: PropTypes.string.isRequired,
  setCurrentNat: PropTypes.func.isRequired,
};

export default NationalitySelector;
