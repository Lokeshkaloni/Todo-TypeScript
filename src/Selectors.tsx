import { state } from "./Store";

export const completeTodoSelector = (s: state) => {
  s.todos.filter((t) => t.done);
};

export const inCompleteTodoSelector = (s: state) => {
  s.todos.filter((t) => !t.done);
};
