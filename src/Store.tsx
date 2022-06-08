import { createStore, Reducer } from "redux";
import {
  TODO_ADD,
  TODO_COMPLETE,
  TODO_COMPLETE2,
  TODO_INCOMPLETE,
  TODO_INCOMPLETE2,
  TODO_STATUS_CHANGE,
} from "./Actions";
import { todo } from "./TodoType";

export type state = { todos: todo[]; completed: number; incomplete: number };

let newId = 1;
const initialState: state = {
  todos: [],
  completed: 0,
  incomplete: 0,
};

export const reducer: Reducer<state> = (
  currentState = initialState,
  action
) => {
  switch (action.type) {
    case TODO_ADD: {
      const todoText = action.payload;
      const todo: todo = { id: newId, title: todoText, done: false };
      newId++;
      return { ...currentState, todos: [...currentState.todos, todo] };
    }
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = currentState.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...currentState, todos: newTodos };
    }

    case TODO_COMPLETE: {
      return {
        ...currentState,
        completed: currentState.completed + 1,
      };
    }
    case TODO_INCOMPLETE: {
      return {
        ...currentState,
        incomplete: currentState.incomplete + 1,
      };
    }
    case TODO_COMPLETE2: {
      return {
        ...currentState,
        incomplete: currentState.incomplete - 1,
      };
    }
    case TODO_INCOMPLETE2: {
      return {
        ...currentState,
        completed: currentState.completed - 1,
      };
    }
    default: {
      return currentState;
    }
  }
};
const store = createStore(reducer);

export default store;
