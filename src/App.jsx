import React, { useContext, useState } from 'react'
import './App.css';
import {} from './styles';

// Importaciones de prime
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

//Importaciones de componentes
import { NavBar } from './components/NavBar/NavBar';
import { useTodos } from './hooks/useTodos';
import { TodoList } from './helpers/TodoList';
import { ValContext } from './context/ValContext';

function App() {

  const {todos, viewTodo, todosCount, pendingTodosCount, newTodo, deleteTodo, toggleTodo, deleteAllTodos} = useContext(ValContext);

  return (
    <div className="App ">
      <h1 className='text-cyan-50'>MIS TAREAS</h1>
      <h2>Has completado {pendingTodosCount} de {todosCount} tareas</h2>
      <NavBar newTodo={ newTodo } deleteTodos ={ deleteAllTodos } />
      <div  >
        <TodoList 
          // todos = { viewTodo }
          todos = { todos }
          handleDelete = { deleteTodo } 
          handleToggle = { toggleTodo }
        />
      </div>

    </div>
  );
}

export default App;