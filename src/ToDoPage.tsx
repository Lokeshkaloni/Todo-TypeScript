import React, { FC } from "react";
import ToDoRow from "./ToDoRow";
import { connect, useDispatch } from "react-redux";
import { TODO_COMPLETE, TODO_INCOMPLETE, TODO_STATUS_CHANGE } from "./Actions";
import { completeTodoSelector, inCompleteTodoSelector } from "./Selectors";
import { state } from "./Store";
import { todo } from "./TodoType";

type todoPageProps = {
  todos: todo[];
};

const ToDoPage: FC<todoPageProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const updatecompTodo = () => {
    dispatch({ type: TODO_COMPLETE });
  };
  const updateIncompTodo2 = () => {
    dispatch({ type: TODO_INCOMPLETE });
  };
  const handleStatusChange = () => {
    dispatch({
      type: TODO_STATUS_CHANGE,
      payload: { id: Number, done: Boolean },
    });
  };

  return (
    <div className="space-y-4">
      {todos.map((t) => (
        <ToDoRow
          onStatusChange={handleStatusChange}
          todo={t}
          key={t.id}
        ></ToDoRow>
      ))}
    </div>
  );
};

export default ToDoPage;
const completeMapper = (s: state) => ({ todos: completeTodoSelector(s) });
const incompleteMapper = (s: state) => ({ todos: inCompleteTodoSelector(s) });

export const CompleteTodoComponent = connect(completeMapper)(ToDoPage);
export const InCompleteTodoComponent = connect(incompleteMapper)(ToDoPage);
