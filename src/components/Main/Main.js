import React from "react";
import mainStyle from "./main.module.css";
import { Link } from "react-router-dom";
function Main(props) {
  return (
    <div className={mainStyle.main}>
      {props.fetchedData.map((item, i) => {
        return (
          <Link key={i} className={mainStyle.link} to={`/${item.episode_id}`}>
            <h2 className={mainStyle.title}>{item.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Main;

{
}
