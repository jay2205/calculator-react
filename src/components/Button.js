import React from "react";
import "./Button.css";
export default function Button(props) {
  function handleOnClick(e) {
    props.onClickHandle(props.name);
  }

  const classNames = [
    "button-component",
    props.orange ? "orange" : "",
    props.wide ? "wide" : ""
  ];

  return (
    <div className={classNames.join(" ").trim()}>
      <button onClick={handleOnClick}>{props.name}</button>
    </div>
  );
}
