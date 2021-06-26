import React from 'react';

const Todo = ({text}) => {

    // const deleteHandler = (e) => {
    //     let deleteBtn = e.target.value
    //
    // }
    return (
        <div className="todo">
            <ul>{text}</ul>
                <button className="delete-btn">Delete</button>
            <button className="edit-btn">Edit</button>
        </div>
    )

};

export default Todo;
