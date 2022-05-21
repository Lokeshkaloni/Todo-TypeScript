import React from "react";

function ToDoRow(props) {
  const onCheckBoxChange = () => {
    props.onStatusChange(props.children);
  };
  return (
    <div className="ml-4 flex items-center space-x-2">
      <input checked={props.done} onChange={onCheckBoxChange} type="checkbox" />
      <h3 className={"text-gray-600 " + (props.done && "line-through")}>
        {props.children}
      </h3>
    </div>
  );
}
export default ToDoRow;
