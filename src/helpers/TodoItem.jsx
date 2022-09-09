import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const TodoItem = ({ todo, DeleteTodo, ToggleTodo }) => {

  const footer = (
    <span>
      <Button 
        label={`${todo.done === false ? "Terminar" : "Cancelar"}`} 
        onClick={() => ToggleTodo(todo.id)}
        />
      <Button
        label="Borrar"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
        onClick={() => DeleteTodo(todo.id)}
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
    //todo agregar componente de card de primereact para hacer cada todo
  );
};
