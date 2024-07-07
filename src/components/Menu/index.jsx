import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../contexts/index";
import CONSTANTS from "../../constants";

const { TRANSLATIONS } = CONSTANTS;

const Menu = () => {
  const [language] = useContext(LanguageContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">{TRANSLATIONS[language].home}</NavLink>
        </li>
        <li>
          <NavLink to="/users">{TRANSLATIONS[language].users}</NavLink>
        </li>
        <li>
          <NavLink to="/counter">{TRANSLATIONS[language].counter}</NavLink>
        </li>
        <li>
          <NavLink to="/load">{TRANSLATIONS[language].load}</NavLink>
        </li>
        <li>
          <NavLink to="/form">{TRANSLATIONS[language].form}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
