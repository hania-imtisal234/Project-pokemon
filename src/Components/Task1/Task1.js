import "./Task1.css";
import { useState } from "react";

const Task1 = () => {
  const [input, setInput] = useState(null);

  const setInputName = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="task1">
      <input
        type="text"
        placeholder="Enter name: "
        value={input}
        onChange={setInputName}
      ></input>
      <button
        onClick={() => {
          setInput(input);
        }}
      >
        +
      </button>
      <h4>{input}</h4>;
    </div>
  );
};

export default Task1;
