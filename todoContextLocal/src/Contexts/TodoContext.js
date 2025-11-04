import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Hello",
            checked: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCheck: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}