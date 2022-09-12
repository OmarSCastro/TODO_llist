import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos=[], handleDelete, handleToggle }) => {
  return (
    <div className='flex justify-content-center flex-wrap card-container' >
    {/* <div className='todoList' > */}
      {
        todos.map( todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ) )
      }
    </div>
  )
}
