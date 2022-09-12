import React, { useContext } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ValContext } from "../context/ValContext";

export const TodoItem = ({ todo }) => {

  const {deleteTodo, toggleTodo} = useContext(ValContext);

  const borrarTodo = () => {
    deleteTodo(todo.id);
    // const newTodos = DeleteTodo(todo.id);
    // setViewTodo(newTodos)
  }

  const footer = (
    <span>
      <Button 
        label={`${todo.done === false ? "Terminar" : "Cancelar"}`} 
        onClick={() => toggleTodo(todo.id)}
        />
      <Button
        label="Borrar"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
        onClick={() => borrarTodo(todo.id)}
      />
    </span>
  );

  return (
    <Card
      style={{ width: "25em" }}
      footer={footer}
      className={`m-4 ${todo.done? "surface-card" : "bg-purple-700" }`}
    >
      <h3 className={`m-0 ${(todo.done)? 'line-through' : ''  }`} style={{ lineHeight: "1.5" }}>
        {todo.description}
      </h3>
    </Card>
  );
};
