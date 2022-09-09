import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  
const [todos, dispatch] = useReducer(todoReducer, initialState, init); 

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

return {
    newTodo,
    deleteTodo,
    toggleTodo,
    deleteAllTodos,
    todos,
    todosCount : todos.length,
    pendingTodosCount: todos.filter( todo => todo.done ).length,
}


}
