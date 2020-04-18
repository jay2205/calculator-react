import React, { useState } from "react";
import ButtonPannel from "./components/ButtonPannel";
import Display from "./components/Display";
import Calculate from "./logic/calculate";
import "./App.css";

function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const onButtonPress = buttonName => {
    const object = {
      total,
      next,
      operation
    };
    const updatedObject = Calculate(object, buttonName);
    setTotal(updatedObject.total);
    setNext(updatedObject.next);
    setOperation(updatedObject.operation);
  };
  return (
    <div className="App">
      <Display value={next || total || 0} />
      <ButtonPannel onClickHandle={onButtonPress} />
    </div>
  );
}

export default App;
