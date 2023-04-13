import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

function CompletedTasks({todos}) {
    const [completedTodos, setCompletedTodos] =useState([])

    const [{isOver}, drop] = useDrop({
        accept: "todo",
        drop:(item) => {
            addCompletedTodos(item.todo.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const addCompletedTodos =(id) =>{
        setCompletedTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone} : todo
        )
        )
    }
  return (
    <div className='completed-task'
    ref={drop}
    style={{ border: isOver ? "1px solid pink" : ""}}>

        <h3>Completed Tasks</h3>
        {completedTodos.map((todo) => (
            <div className='completed-task__list--item' >
                <span>{todo.todo}</span>
            </div>
        ))}
    </div>
  )
}

export default CompletedTasks