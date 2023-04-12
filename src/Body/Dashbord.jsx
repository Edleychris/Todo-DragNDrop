import React, { useState } from "react";
import InputField from "../components/InputField";
// import TodoList from "../components/TodoList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Dashbord = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  
  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dashbord">
        <span className="heading">Drag And Drop</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <div className="container">

          <Droppable droppableId="TodosList">
            {(provided, snapshot) => (
              <div
                className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="todos__heading">Tasks</span>
                {todos?.map((todo, index) => (
                  <div
                    className="todos__item"
                    key={todo.id}
                    draggable
                    onDragStart={() => console.log("dragging")}
                  >
                    {todo.todo}
                  </div>
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
                {completedTodos?.map((todo, index) => (
                  <div
                    className="todos__item"
                    key={todo.id}
                    draggable
                    onDragStart={() => console.log("dragging")}
                  >
                    {todo.todo}
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Dashbord;

