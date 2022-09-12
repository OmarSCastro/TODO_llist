import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import Swal from 'sweetalert2'
import { ValContext } from "../../context/ValContext";

export const AddButton = ( ) => {

  const { newTodo, todos, setViewTodo } = useContext(ValContext)


  const alert = () => {

    Swal.fire({
      title: 'Agrega tu nueva tarea',
      input: 'text',
      inputAttributes: {
        placeholder: 'Escribe tu tarea',
        autocapitalize: 'on'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
    }).then((success) => {
      if (success.isConfirmed) {
        if (success.value.length >= 1) {
          const todo = {
            id: new Date().getTime(),
            done: false,
            description: success.value
          }
          // setViewTodo([...todos, todo])
          newTodo(todo);
        } 
      }
    })
  }
    
    return (
      <Button className=" p-button-text p-button-sm" onClick={alert}>
      <p className="pi pi-plus mr-2"></p>
      Agregar ToDo
    </Button>
  );
};
