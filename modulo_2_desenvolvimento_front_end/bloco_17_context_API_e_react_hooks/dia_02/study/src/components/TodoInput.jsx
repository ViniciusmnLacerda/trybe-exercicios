import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext)
  
  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <section>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        <input 
          value={newTodo}
          onChange={handleChange}
          type="text"
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button onClick={handleClick}>Add tarefa</button>
    </section>
  )
}

export default TodoInput