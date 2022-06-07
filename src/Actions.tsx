export const TODO_COMPLETE = "todo completed";
export const TODO_INCOMPLETE = "todo incomplete";
export const TODO_ADD = "add a todo";
export const TODO_STATUS_CHANGE = "todo status change";

export const todoStatusActionCreator = (todoId: number, newStatus: boolean) => {
  return { type: TODO_STATUS_CHANGE, payload: { id: todoId, done: newStatus } };
};
export const todoAddActionCreator = (todoText: string) => {
  return { type: TODO_ADD, payload: { todoText } };
};
