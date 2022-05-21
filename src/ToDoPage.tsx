import React from "react";
import CreateToDo from "./CreateToDo";
import Button from "./Button";
import Header from "./Header";
import Container1 from "./Container1";
import Container2 from "./Container2";
import ToDoRow from "./ToDoRow";

function ToDoPage() {
  const [toDoFormVisible, updateToDoForm] = React.useState(false);
  const showToDoForm = () => updateToDoForm(true);
  const hideToDoForm = () => updateToDoForm(false);
  const [toDoList, updateToDoList] = React.useState([]);
  const [doneList, updateDoneList] = React.useState([]);

  const markAsDone = (todo) => {
    const newToDoList = toDoList.filter((t) => t !== todo);
    updateToDoList(newToDoList);
    updateDoneList([...doneList, todo]);
  };

  const markNotDone = (todo) => {
    const newDoneList = doneList.filter((t) => t !== todo);
    updateDoneList(newDoneList);
    updateToDoList([...toDoList, todo]);
  };

  const addToDo = (todo) => {
    updateToDoList([...toDoList, todo]);
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
}

export default ToDoPage;
