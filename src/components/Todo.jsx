import React, { useEffect, useState, useRef } from "react";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { MdDone } from "react-icons/md";

const Todo = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [edit]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className={`todos__single ${todo.isDone ? "done" : ""}`}>
      {edit ? (
        <form onSubmit={(e) => handleEdit(e, todo.id)}>
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
            ref={inputRef}
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
                  if (!edit) {
                    setEdit(!edit);
                  }
                }}
              >
                {/* <AiFillEdit /> */}
              </span>
            )}
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              {/* <AiFillDelete /> */}
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              {/* <MdDone /> */}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
