import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="">
        {props.todos && 
        props.todos.map((todo, index) => (
          <Todo {...props} todo={todo} index= {index} key={todo.id} />
        ))}
         
    </div>
  );
};

export default TodoList;
