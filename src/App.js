import Form from "./Components/Form";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import {useState} from "react";


function App() {

const [addText, setAddText] = useState('')


  return (
    <div className="App">
        <h1>
            Todo Notes
        </h1>
        <Form addText={addText} setAddText={setAddText} />
        <TodoList />
        <Todo addText={addText} setAddText={setAddText} />
    </div>
  );
}

export default App;
