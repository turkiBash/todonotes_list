import React, {useState} from 'react';

const Todo = ({setTodos, text, id, todo,todos, setInputText, inputText}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(text);
    //const [localStorage, setLocalStorage] = useState('');



    // const localStorageHandler = (e) => {
    //     window.localStorage.setItem("id", todos)
    //     return localStorage
    // }



    const inputTextHandler = (e) => {
        setEditText(e.target.value);

    };


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

    }

    const editHandler = () => {

        setTodos(todos.filter((el) =>{
            if(el.id === todo.id){
                todo.text = editText

            }
                setIsEdit(false)
                return todos

        }))


    }


    return (
        <div className="todo">

            {isEdit ?

                    <form className="todo-form" >
                    <input value={editText} onChange={inputTextHandler} type="text" className="form-input"  required placeholder="Type Somthing...." />
                    <button className="edit-btn" onClick={editHandler}>Save</button>
                     </form>
                 :
                <div>
                    <ul className="todos" >{text}</ul>
                    <button className="edit-btn" onClick={() => { setIsEdit(true);}}>Edit</button>
                </div>
            }

            <button onClick={deleteHandler} className="delete-btn">Delete</button>


        </div>
    )

};

export default Todo;
