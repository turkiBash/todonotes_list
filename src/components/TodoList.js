import React from 'react';
import Todo from "./Todo";

const TodoList = ({setTodos, todos}) => {

    return (
        <div className="Todo-list">
           <ul className="">
               {todos.map((todo) => (
                   <Todo setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} todo={todo} />
               ))}
           </ul>
        </div>
    );
}
export default TodoList;