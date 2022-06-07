import React, { FC, useCallback } from "react";
import { todoRowProps } from "./TodoType";

const ToDoRow: FC<todoRowProps> = ({ todo, onStatusChange }) => {
  const { done, title, id } = todo;

  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);
  return (
    <div className="ml-4 flex items-center space-x-2">
      <input checked={done} onChange={handleChange} type="checkbox" />
      <h3 className={"text-gray-600 " + (done && "line-through")}>{title}</h3>
    </div>
  );
};
export default ToDoRow;
