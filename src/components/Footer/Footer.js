import React from "react";
import { Link } from "react-router-dom";
import footerStyle from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={footerStyle.footer}>
      <h2>
        <Link className={footerStyle.link} to="/">
          Home
        </Link>
      </h2>
    </div>
  );
}

export default Footer;
