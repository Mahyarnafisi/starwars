import React from "react";
import headerStyle from "./Header.module.css";
import starWarsLogo from "../../assets/Starwars_logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.header__logo}>
        <Link to="/">
          <img src={starWarsLogo} alt="logo image" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
