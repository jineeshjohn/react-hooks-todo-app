import React, { useState } from "react";

import "./styles.css";

const TodoApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="TodoApp">
      <h1>Hello CodeSandbox {counter} !</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </div>
  );
};
export default TodoApp;
