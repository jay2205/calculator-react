import React from "react";
import "./Display.css";

export default function(props) {
  return (
    <div className="display-component">
      <p>{props.value}</p>
    </div>
  );
}
