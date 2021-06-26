import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos}) => {

    return (
        <div className="Todo-list">
           <ul className="">
               {todos.map((todo) => (
                   <Todo text={todo.text} key={todo.id} />
               ))}
           </ul>
        </div>
    );
}
export default TodoList;