import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="New task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;