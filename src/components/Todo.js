import React from 'react';

const Todo = ({setTodos, text, id, todo,todos}) => {


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));

    }
    return (
        <div className="todo">
            <ul className="todos" >{text}</ul>
                <button onClick={deleteHandler} className="delete-btn">Delete</button>
            <button className="edit-btn">Edit</button>
        </div>
    )

};

export default Todo;
