import { useEffect, useState, useReducer } from "react";
import { todoReducer } from "../useReduce/reducer4/reducer";

export const useTodo = () => {
    const [count, setCount] = useState(0);
    const initialTodo = []

    const init = () => {
      return JSON.parse(localStorage.getItem('todo')) || initialTodo;
    }

    const [todos, dispatch] = useReducer( todoReducer ,initialTodo, init)

    useEffect(() => {
      
      localStorage.setItem('todo', JSON.stringify(todos))
      
      const valueCount = todos.filter(td => !td.done)
      setCount(valueCount.length)
      
    }, [todos]);
  
    const onNewTodo = (todo) =>{
  
      const action = {
        type: '[TODO] Add Todo',
        payload: todo,
      }
  
      dispatch(action)
  
    }
    
    const handleDeleteTodo = (id) =>{
  
      const action = {
        type: '[TODO] Remove Todo',
        payload: id,
      }
  
      dispatch(action)
  
    }
  
    const handleToggleTodo = (id) =>{
  
      const action = {
        type: '[TODO] Toggle Todo',
        payload: id,
      }
  
      dispatch(action)
  
    }

    return {
        todos,
        count,
        onNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}