import React from "react";
import listItemStyle from "./listItem.module.css";
function ListItem(props) {
  console.log(props.fetchedData);
  return (
    <div className={listItemStyle.listItem}>
      <h1 className={listItemStyle.title}>
        <i class="bi bi-film"></i>
        {props.title}
      </h1>
    </div>
  );
}

export default ListItem;
