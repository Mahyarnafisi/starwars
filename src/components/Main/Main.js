import React from "react";
import mainStyle from "./main.module.css";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import ListItem from "../List/ListItem";
function Main(props) {
  return (
    <div className={mainStyle.main}>
      {props.fetchedData.map((item) => {
        return (
          <Link key={props.fetchedData.episode_id} className={mainStyle.link} to={`/${item.episode_id}`}>
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
