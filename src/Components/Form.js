import React from 'react'
import {useState} from "react/cjs/react.production.min";

const Form = () => {


    return (
        <div className="form">
            <form className="todo-form" value="Submit">
                <input type="text" className="form-input" placeholder="Type Somthing...."/>
                    <button className="add-todo" value="onAdd" >+</button>
                    <button className="remove-todo">-</button>
                    <button className="edit-todo">edit</button>
            </form>
        </div>
    )
}
export default Form
