import { FC } from "react";
import ToDoRow from "./ToDoRow";
import { connect, useDispatch } from "react-redux";
import { todoStatusActionCreator, TODO_STATUS_CHANGE } from "./Actions";
import { completeTodoSelector, inCompleteTodoSelector } from "./Selectors";
import { state } from "./Store";
import { todo } from "./TodoType";

type todoPageProps = {
  todos: todo[];
};

const ToDoPage: FC<todoPageProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (id: number, done: boolean) => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: { id, done } });
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
const dispatchMapper = { onStatusChange: todoStatusActionCreator };

export const CompleteTodoComponent = connect(
  completeMapper,
  dispatchMapper
)(ToDoPage);
export const InCompleteTodoComponent = connect(
  incompleteMapper,
  dispatchMapper
)(ToDoPage);
