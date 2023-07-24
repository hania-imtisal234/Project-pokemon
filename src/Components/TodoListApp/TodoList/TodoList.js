import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="List-item-Table">
      <div className="list-item">
        <input className="list-item-box" value={props.item}></input>
        <button
          onClick={() => {
            props.deleteItem(props.index);
          }}
          className="list-item-delete-btn"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoList;
