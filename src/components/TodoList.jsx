// import React, { useState } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: "Do laundry" },
//     { id: 2, text: "Buy groceries" },
//     { id: 3, text: "Pay bills" }
//   ]);

//   const [draggingTodo, setDraggingTodo] = useState(null);

//   const handleDragStart = (e, todo) => {
//     setDraggingTodo(todo);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const newTodos = todos.filter((t) => t.id !== draggingTodo.id);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h2>Todo</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             draggable
//             onDragStart={(e) => handleDragStart(e, todo)}
//           >
//             {todo.text}
//           </li>
//         ))}
//       </ul>
//       <div
//         className="completed"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         Drop Here to Mark as Completed
//       </div>
//     </div>
//   );
// };

// export default TodoList;




import React from "react";
import Todo from "./Todo";
import { Droppable } from "react-beautiful-dnd";

const TodoList = ({todos, setTodos, CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">To Do</span>
            {todos &&
              todos.map((todo, index) => (
                <Todo
                  index={index}
                  todos={todos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {CompletedTodos &&
              CompletedTodos.map((todo, index) => (
                <Todo
                  index={index}
                  todos={CompletedTodos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
