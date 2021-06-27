import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";



function App() {

    const [ inputText, setInputText ] = useState("");
    const [ todos, setTodos ] = useState([]);

    const saveToLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify([todos]))
    }
    const getSaveToLocalStorage = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]))
        }else{
            let todoLocalStorage = JSON.parse(localStorage.getItem("todos"))
// console.log(todoLocalStorage)
            setTodos(todoLocalStorage);
        }
    }

    useEffect(() => {

        getSaveToLocalStorage()
    },[])


    useEffect(() => {
        saveToLocalStorage()
    },[todos]);

  return (
    <div className="App">
        <h1>
            List
        </h1>
        <Form
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          inputText={inputText}
        />
        <TodoList inputText={inputText} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
