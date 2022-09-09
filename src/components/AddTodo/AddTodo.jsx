import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useTodos } from '../../hooks/useTodos'

export const AddTodo = () => {

  const [todo, setTodo] = useState('')

    const { newTodo } = useTodos();

Swal.fire({
  title: 'Agrega tu nueva tarea',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Agregar',
  preConfirm: (description) => {
    const todo = {
        id: new Date().getTime(),
        done: false,
        description: description
    }
    setTodo(todo);
  },
}).then(() => {
  console.log('El then: ',todo)
  newTodo(todo);
})

}
