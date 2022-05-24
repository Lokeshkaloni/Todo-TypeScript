import React, { FC } from "react";
import CreateToDo from "./CreateToDo";
import Button from "./Button";
import Header from "./Header";
import Container1 from "./Container1";
import Container2 from "./Container2";
import ToDoRow from "./ToDoRow";
import { useDispatch } from "react-redux";
import {
  TODO_COMPLETE,
  TODO_COMPLETE2,
  TODO_INCOMPLETE,
  TODO_INCOMPLETE2,
} from "./Actions";
import { v4 as uuidv4 } from "uuid";
import { todoRowProps } from "./TodoType";

const ToDoPage: FC = () => {
  const [toDoFormVisible, updateToDoForm] = React.useState(false);
  const showToDoForm = () => updateToDoForm(true);
  const hideToDoForm = () => updateToDoForm(false);
  const [toDoList, updateToDoList] = React.useState<any[]>([]);
  const [doneList, updateDoneList] = React.useState<any[]>([]);

  const markAsDone = (todo: any) => {
    const newToDoList = toDoList.filter((t) => t !== todo);
    updateToDoList(newToDoList);
    updateDoneList([...doneList, todo]);
    updatecompTodo();
    updateIncompTodo();
  };

  const markNotDone = (todo: any) => {
    const newDoneList = doneList.filter((t) => t !== todo);
    updateDoneList(newDoneList);
    updateToDoList([...toDoList, todo]);
    updatecompTodo2();
    updateIncompTodo2();
  };

  const addToDo = (todo: any) => {
    updateToDoList([...toDoList, todo]);
  };

  const dispatch = useDispatch();
  const updatecompTodo = () => {
    dispatch({ type: TODO_COMPLETE });
  };

  const updateIncompTodo = () => {
    dispatch({ type: TODO_INCOMPLETE2 });
  };

  const updatecompTodo2 = () => {
    dispatch({ type: TODO_COMPLETE2 });
  };

  const updateIncompTodo2 = () => {
    dispatch({ type: TODO_INCOMPLETE });
  };

  return (
    <div>
      <Header>XTodo</Header>
      <div className="space-y-4">
        <h1 className="font-bold ml-4 text-2xl">Things to get done</h1>
        <Container1></Container1>
        {toDoList.map((t) => (
          <ToDoRow onStatusChange={markAsDone} done={false} key={t}>
            {t}
          </ToDoRow>
        ))}

        {!toDoFormVisible && (
          <Button onClick={showToDoForm} border="full">
            + Add a todo
          </Button>
        )}

        {toDoFormVisible && (
          <CreateToDo onClose={hideToDoForm} onCreate={addToDo}></CreateToDo>
        )}

        <Container2></Container2>
        {doneList.map((t) => (
          <ToDoRow onStatusChange={markNotDone} done={true} key={t}>
            {t}
          </ToDoRow>
        ))}
      </div>
    </div>
  );
};

export default ToDoPage;
