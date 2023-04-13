import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const Todo = ({
  todo,
  handleEdit,
  handleDelete,
  handleDone,
  isEdit,
  setIsEdit,
  editTodo,
  setEditTodo,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "todo",
    item: { todo, id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const ref = useRef(null);

  const onTouchStart = (e) => {
    ref.current.style.border = "1px solid pink";
  };

  const onTouchEnd = (e) => {
    ref.current.style.border = "none";
  };

  return (
    <div
      className={`todos__single ${todo?.isDone ? "done" : ""}`}
      draggable
      ref={(instance) => {
        drag(instance);
        ref.current = instance;
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ border: isDragging ? "1px solid pink" : "none" }}
    >
      {isEdit ? (
        <form onSubmit={(e) => handleEdit(e, todo.id)}>
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        </form>
      ) : (
        <>
          {todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            {!todo.isDone && (
              <span
                className="icon"
                onClick={() => {
                  if (!isEdit) {
                    setIsEdit(!isEdit);
                  }
                }}
                onTouchEnd={() => {
                  if (!isEdit) {
                    setIsEdit(!isEdit);
                  }
                }}
              >
                <AiFillEdit style={{ color: "blue" }} />
              </span>
            )}
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete style={{ color: "red" }} />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone style={{ color: "green" }} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
