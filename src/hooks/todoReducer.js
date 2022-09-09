import React from 'react'
import { types } from '../types/types';

export const todoReducer = ( initialState= [], action ) => {
  switch (action.type) {
    case types.agregar:
        return[
            ...initialState,
            action.payload
        ]

    case types.borrar:
        return initialState.filter( todo => todo.id !== action.payload );
        
    case types.modificar:
        return initialState.map( todo => {
            if (todo.id === action.payload) {
                return{
                    ...todo,
                    done: !todo.done
                }
            }
            return todo;
        })
        
    case types.borrarTodos:
        return initialState.filter( todo => todo.done === false );
  
    default:
        return initialState;
  }
}
