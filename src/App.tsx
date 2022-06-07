import React, { FC } from "react";
import Button from "./Button";
import Container1 from "./Container1";
import Container2 from "./Container2";
import CreateToDo from "./CreateToDo";
import Header from "./Header";
import ToDoPage, {
  CompleteTodoComponent,
  InCompleteTodoComponent,
} from "./ToDoPage";

const App: FC = () => {
  const [toDoFormVisible, updateToDoForm] = React.useState(false);
  const showToDoForm = () => updateToDoForm(true);
  const hideToDoForm = () => updateToDoForm(false);
  return (
    <div className="space-y-4">
      <Header>XTodo</Header>
      <h1 className="font-bold ml-4 text-2xl">Things to get done</h1>
      <Container1></Container1>
      <InCompleteTodoComponent />
      {!toDoFormVisible && (
        <Button onClick={showToDoForm} border="full">
          + Add a todo
        </Button>
      )}

      {toDoFormVisible && <CreateToDo onClose={hideToDoForm}></CreateToDo>}
      <Container2></Container2>
      <CompleteTodoComponent />
    </div>
  );
};

export default App;
