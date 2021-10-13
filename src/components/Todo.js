import { Add, Delete, Remove } from "@material-ui/icons";
import { useState } from "react";

import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addTodo = () => {
    if (!input) {
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = todos.filter((elem, ind) => {
      return ind !== id;
    });
    setTodos(updatedItems);
  };
  const removeAll = () => {
    setTodos([]);
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="btn btn-add" onClick={addTodo}>
          <Add />
        </button>

        {todos.map((elem, indx) => {
          return (
            <div className="items">
              <h3 key={indx}>{elem}</h3>
              <button
                className="btn btn-delete"
                onClick={() => deleteItem(indx)}
              >
                <Remove />
              </button>
            </div>
          );
        })}
        <br />
        <button className="btn btn-remove" onClick={removeAll}>
          <Delete />
        </button>
      </form>
    </div>
  );
};

export default Todo;
