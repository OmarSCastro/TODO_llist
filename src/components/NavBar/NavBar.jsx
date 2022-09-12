import React, { useContext, useRef } from 'react'
import { AddButton } from '../AddButton/AddButton'
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useTodos } from '../../hooks/useTodos';
import { ValContext } from '../../context/ValContext';

export const NavBar = () => {

  const { todos, deleteAllTodos, setViewTodo } = useContext(ValContext)

  const toast = useRef(null);

  const accept = () => {
    deleteAllTodos();
  }

  const reject = () => {
      console.log();
  }

  // const toast = useRef(null);

  const confirmPosition = (position) => {
    confirmDialog({
        message: 'Estas seguro de borrar tus tareas completadas?',
        header: 'Borrar completados',
        icon: 'pi pi-info-circle',
        position,
        accept,
        reject
    });
};


    const items = [
        {
          label: 'Ver',
          icon: 'pi pi-eye',
          items: [
            {
                label: 'Todos',
                icon: 'pi pi-bars',
                command: () => {
                    // setViewTodo(todos);
                  } 
                },
                {
                  label: 'Pendientes',
                  icon: 'pi pi-times',
                  command: () => {
                    // setViewTodo(todos.filter( todo => todo.done === false ));
                  } 
                },
                {
                  label: 'Completados',
                  icon: 'pi pi-check',
                  command: () => {
                    // setViewTodo(todos.filter( todo => todo.done === true ));
                } 
            },
          ]
        },
        {
          label: 'Eliminar completados',
          icon: 'pi pi-trash',
          command: () => {
            confirmPosition('left');
          } 
      },
      ];

  
    const end = <AddButton  />

  return (
    <div className="px-3 py-2">
      <ConfirmDialog />
      <Menubar className='surface-overlay' model={items} end={end}  />
    </div>
  )
}
