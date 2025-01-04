import React, { useState } from "react";
import { useTodos } from "../../Contexts/TodoContext";
function AddTodo() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();
  const submitHander = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={submitHander}
        className="flex flex-row gap-x-2 justify-between"
      >
        <input
          type="text"
          value={text}
          placeholder="Add a new Todo"
          onChange={(e) => {
            setText(e.target.value);
            className = "form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";    
          }}
         
        />
        <button type="submit" className="w-32 bg-blue-50 hover:bg-blue-700"> Submit</button>
      </form>
    </div>
  );
}

export default AddTodo;
