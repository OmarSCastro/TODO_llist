import React, { useState } from 'react'
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

function App() {

  const [viewTodos, setViewTodos] = useState('');

  const {todos, todosCount, pendingTodosCount, newTodo, deleteTodo, toggleTodo, deleteAllTodos} = useTodos();

  return (
    <div className="App ">
      <h1 className='text-cyan-50'>MIS TAREAS</h1>
      <h2>Has completado {pendingTodosCount} de {todosCount} tareas</h2>
      <NavBar newTodo={ newTodo } deleteTodos ={ deleteAllTodos } />
      <div  >
        <TodoList 
          todos = { todos }
          handleDelete = { deleteTodo } 
          handleToggle = { toggleTodo }
        />
      </div>

    </div>
  );
}

export default App;