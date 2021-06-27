import React, {useState} from 'react';

const Todo = ({setTodos, text, todo ,todos, id, inputText}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(text);


    const inputTextHandler = (e) => {
        setEditText(e.target.value);

    };


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

    }

    const editHandler = () => {

        setTodos(todos.filter((el) =>{
            if(el.id === todo.id){
                todo.id = inputText

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
                    <button className="edit-btn" onChange={editHandler}>Save</button>
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
