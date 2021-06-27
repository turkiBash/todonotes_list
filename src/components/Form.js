import React from 'react'


const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);

    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{text: inputText, id: Math.random() * 1000}]);
        e.preventDefault();
        setInputText("")

    };



    return (
        <div className="form">
            <form className="todo-form" onSubmit={submitTodoHandler} >
                <input value={inputText} required onChange={inputTextHandler} type="text" className="form-input" placeholder="Type Somthing...." />
                <button className="add-todo" >add</button>
            </form>
        </div>
    );
}
export default Form
