import React, { ChangeEvent, FC, memo } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD, TODO_INCOMPLETE } from "./Actions";
import Button from "./Button";
import Card from "./Card";

type createTodoType = { onClose: () => void };

const CreateToDo: FC<createTodoType> = (props) => {
  const [inputValue, updateInputValue] = React.useState("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateInputValue(event.target.value);
  };
  const dispatch = useDispatch();
  const updateIncompTodo = () => {
    dispatch({ type: TODO_INCOMPLETE });
  };

  const handleSubmit = () => {
    dispatch({ type: TODO_ADD, payload: inputValue });
    updateInputValue("");
    props.onClose();
    updateIncompTodo();
  };
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Card>
      <div className="space-y-2">
        <h1 className="font-medium text-xl">Create a todo</h1>
        <input
          value={inputValue}
          onChange={onInputChange}
          className="border rounded-md"
          placeholder="enter todotodo"
        />
        <div className="space-x-2">
          <Button disabled={!inputValue} onClick={handleSubmit}>
            Save
          </Button>
          <Button theme="secondary" onClick={handleClose}>
            cancel
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default memo(CreateToDo);
