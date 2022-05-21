import React, { FC } from "react";
import Button from "./Button";
import Card from "./Card";

const CreateToDo: FC = (props: any) => {
  const [inputValue, updateInputValue] = React.useState("");
  const onInputChange = (event: any) => {
    updateInputValue(event.target.value);
  };

  const saveToDo = () => {
    props.onCreate(inputValue);
    updateInputValue("");
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
          <Button disabled={!inputValue} onClick={saveToDo}>
            Save
          </Button>
          <Button theme="secondary" onClick={props.onClose}>
            cancel
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default CreateToDo;
