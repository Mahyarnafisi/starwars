import React from "react";
import { Link } from "react-router-dom";
import errorStyle from "./Error.module.css";
function Error(props) {
  return (
    <div className={errorStyle.error}>
      <h1>Error</h1>
      <Link to="/">Get back to home</Link>
    </div>
  );
}

export default Error;
