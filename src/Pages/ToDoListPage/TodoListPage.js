import TodoInput from "../../Components/TodoListApp/TodoInput/TodoInput.js";
import TodoList from "../../Components/TodoListApp/TodoList/TodoList.js";
import "./TodoListPage.css";
import { useState } from "react";

function TodoListPage() {
  const [list, setlist] = useState([]);
  let addlist = (input) => {
    setlist([...list, input]);
  };

  const deleteListItem = (key) => {
    let newlist = [...list];
    newlist.splice(key, 1);
    setlist([...newlist]);
  };
  return (
    <div className="TodolistPage">
      <div className="TodoListComponent">
        <div className="TodoListInput">
          <TodoInput addlist={addlist} />
          <h2 className="TodoList-label">To Do List</h2>
          <hr className="line"></hr>
          {list.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
