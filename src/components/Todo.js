import React, {useState} from 'react';

const Todo = ({setTodos, text, id, todo,todos}) => {

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
                todo.text = editText

            }
                setIsEdit(false)
                return todos
        }))


    }

    return (
        <div className="todo">

            {isEdit ?
                <div>
                    <input value={editText} onChange={inputTextHandler} type="text" className="form-input" placeholder="Type Somthing...." />
                    <button className="edit-btn" onClick={editHandler}>Save</button>
                </div> :
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
