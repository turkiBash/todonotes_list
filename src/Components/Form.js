import React from 'react'

const Form = ({ addText, setAddText }) => {

const handleAddText = (e) => {
    e.preventDefault()
    setAddText(e.target.value)
}

const handleSetAddText = (e) => {
    e.preventDefault()
    setAddText(e.target.value)
}

    return (
        <div className="form">
            <form className="todo-form" >
                <input type="text" onSubmit={handleAddText} className="form-input" placeholder="Type Somthing...."/>
                    <button className="add-todo" onSubmit={handleSetAddText}>+</button>
                    <button className="remove-todo">-</button>
                    <button className="edit-todo">edit</button>
            </form>
        </div>
    )
}
export default Form
