import React, { FC } from "react";
import ToDoRow from "./ToDoRow";
import { connect, useDispatch } from "react-redux";
import {
  todoAddActionCreator,
  todoStatusActionCreator,
  TODO_COMPLETE,
  TODO_INCOMPLETE,
} from "./Actions";
import { completeTodoSelector, inCompleteTodoSelector } from "./Selectors";
import { state } from "./Store";
import { todo } from "./TodoType";
const completeMapper = (s: state) => ({ todos: completeTodoSelector(s) });
const incompleteMapper = (s: state) => ({ todos: inCompleteTodoSelector(s) });
const dispatchMapper = { onStatusChange: todoAddActionCreator };

type todoPageProps = {
  todos: todo[];
  onStatusChange: (id: number, done: boolean) => void;
};

const ToDoPage: FC<todoPageProps> = ({ todos, onStatusChange }) => {
  console.log("todos", todos);
  const dispatch = useDispatch();
  const updatecompTodo = () => {
    dispatch({ type: TODO_COMPLETE });
  };
  const updateIncompTodo2 = () => {
    dispatch({ type: TODO_INCOMPLETE });
  };
  const handleStatusChange = (id: number, done: boolean) => {
    dispatch(todoStatusActionCreator(id, done));
  };

  return (
    <div className="space-y-4">
      {todos.map((t) => (
        <ToDoRow onStatusChange={onStatusChange} todo={t} key={t.id}></ToDoRow>
      ))}
    </div>
  );
};

export default ToDoPage;

export const CompleteTodoComponent = connect(
  completeMapper,
  dispatchMapper
)(ToDoPage);
export const InCompleteTodoComponent = connect(
  incompleteMapper,
  dispatchMapper
)(ToDoPage);
