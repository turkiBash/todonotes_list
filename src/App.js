import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";



function App() {

    const [ inputText, setInputText ] = useState("");
    const [ todos, setTodos ] = useState([]);

  return (
    <div className="App">
        <h1>
            Turki's List
        </h1>
        <Form
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          inputText={inputText}
        />
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
