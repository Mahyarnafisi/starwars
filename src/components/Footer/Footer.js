import React from "react";
import { Link } from "react-router-dom";
import footerStyle from "./Footer.module.css";
import { useDispatch, useSelector } from "react-redux";

function Footer(props) {
  const dispatch = useDispatch();
  const homeBtnStatus = useSelector((state) => state.homeBtnVisible);
  const homeButton = () => {
    dispatch({ type: "HOME-BTN-VISIBLE" });
  };
  return (
    <div className={footerStyle.footer}>
      {homeBtnStatus && (
        <h2>
          <Link className={footerStyle.link} to="/">
            Home
          </Link>
        </h2>
      )}
    </div>
  );
}

export default Footer;
