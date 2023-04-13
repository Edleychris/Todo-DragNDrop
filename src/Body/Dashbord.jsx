import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";
import CompletedTasks from "../components/CompletedTasks"
import "./Dashboard.css"

const Dashbord = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleEdit =(e, id) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo))
    );
    setIsEdit(false);
    setEditTodo("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

   const handleDone =(id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {...todo, isDone:  !todo.isDone} : todo
    )
    );
   };

   useEffect(() => {
    const newCompletedTodos = todos.filter((todo) => todo.isDone === true)
    setCompletedTodos(newCompletedTodos)
   }, [todos])
   console.log(completedTodos)

  return (
      <div className="dashbord">
        <span className="heading">Drag And Drop</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <div className="todo-list2">

              <div className="">

                <span className="todos__heading">Tasks</span>
                <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleDone={handleDone}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                handleEdit={handleEdit}
                />
                  </div>
                <CompletedTasks todos={completedTodos} />
               </div>
               </div>
  );
};

export default Dashbord;

