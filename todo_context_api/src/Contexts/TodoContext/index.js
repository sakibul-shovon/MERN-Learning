import { createContext, useCallback, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completed: !todo.completed,
                    completedAt: !todo.completed ? new Date().toLocaleString() : null,
                };
            }
            return todo; // Ensure other todos remain unchanged
        });
        setTodos(newTodos); // Update the state
    };


    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    )



};
export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
};
export default TodoContext;

