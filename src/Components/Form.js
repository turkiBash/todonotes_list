import React from 'react'


const Form = ({ setInputText, todos, setTodos, inputText }) => {

const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(setTodos)
    setTodos([...todos,{text: inputText, id: Math.random() * 100}]);
};


    return (
        <div className="form">
            <form className="todo-form" >
                <input onChange={inputTextHandler} type="text" className="form-input" placeholder="Type Somthing...."/>
                    <button onSubmit={submitTodoHandler} type="submit" className="add-todo">Submit</button>
            </form>
        </div>
    )
}
export default Form
