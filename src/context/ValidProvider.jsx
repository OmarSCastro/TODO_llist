import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../hooks/todoReducer';
import { ValContext } from './ValContext'

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const ValidProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init); 
  const [viewTodo, setViewTodo] = useState(todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])
  
  
  const newTodo = ( todo ) => {
      dispatch( {
          type: '[TODO] add todo',
          payload: todo
      })
  };
  
  const deleteTodo = ( id ) => {
      dispatch( {
          type: '[TODO] delete todo',
          payload: id
      })
  };
  
  const toggleTodo = (id) => {
      dispatch( {
          type: '[TODO] toggle todo',
          payload: id
      })
  };
  
  const deleteAllTodos = () => {
      dispatch( {
          type: '[TODO] delete todos'
      })
  };

  return (
    <ValContext.Provider 
    value= {
    {  
      todos, 
      viewTodo, 
      setViewTodo,
      newTodo,
      deleteTodo,
      toggleTodo,
      deleteAllTodos,
      todosCount : todos.length,
      pendingTodosCount: todos.filter( todo => todo.done ).length,
    }
    }
    >
        {children}
    </ValContext.Provider>
  )
}
