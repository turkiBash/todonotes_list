import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import {useState} from "react";


function App() {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

  return (
    <div className="App">
        <h1>
            Turki's List
        </h1>
        <Form
            todos={todos}
              setTodos={setTodos}
              inputText={inputText}
              setInputText={setInputText}
        />
        <TodoList />
    </div>
  );
}

export default App;
