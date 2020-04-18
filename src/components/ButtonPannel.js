import React from "react";
import Button from "./Button";
import "./ButtonPannel.css";

export default function ButtonPannel(props) {
  const onClickHandle = buttonName => {
    props.onClickHandle(buttonName);
  };

  return (
    <div className="button-panel-component">
      <div>
        <Button name="AC" onClickHandle={onClickHandle} />
        <Button name="+/-" onClickHandle={onClickHandle} />
        <Button name="%" onClickHandle={onClickHandle} />
        <Button name="÷" onClickHandle={onClickHandle} orange />
      </div>
      <div>
        <Button name="7" onClickHandle={onClickHandle} />
        <Button name="8" onClickHandle={onClickHandle} />
        <Button name="9" onClickHandle={onClickHandle} />
        <Button name="X" onClickHandle={onClickHandle} orange />
      </div>
      <div>
        <Button name="4" onClickHandle={onClickHandle} />
        <Button name="5" onClickHandle={onClickHandle} />
        <Button name="6" onClickHandle={onClickHandle} />
        <Button name="-" onClickHandle={onClickHandle} orange />
      </div>
      <div>
        <Button name="1" onClickHandle={onClickHandle} />
        <Button name="2" onClickHandle={onClickHandle} />
        <Button name="3" onClickHandle={onClickHandle} />
        <Button name="+" onClickHandle={onClickHandle} orange />
      </div>
      <div>
        <Button name="0" onClickHandle={onClickHandle} wide />
        <Button name="." onClickHandle={onClickHandle} />
        <Button name="=" onClickHandle={onClickHandle} />
      </div>
    </div>
  );
}
