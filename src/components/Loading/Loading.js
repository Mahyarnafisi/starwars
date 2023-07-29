import React from "react";
import loadingStyle from "./Loading.module.css";
function Loading(props) {
  return (
    <div className={loadingStyle.loading}>
      <span className={loadingStyle.loadingBar}></span>
    </div>
  );
}

export default Loading;
