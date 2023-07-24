import "./TodoInput.css";
import { useState } from "react";

const TodoInput = (props) => {
  const [input, setinput] = useState(null);

  const getInput = (event) => {
    setinput(event.target.value);
  };

  return (
    <div className="Todolist">
      <div className="Todolist__input">
        <input
          className="Todolist__inputfield"
          type="text"
          value={input}
          placeholder="Add Items"
          onChange={getInput}
        ></input>
      </div>

      <div className="Todolist__button">
        <button
          onClick={(e) => {
            props.addlist(input);
            setinput("");
          }}
          className="TodoList__button"
        >
          Add toDo
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
