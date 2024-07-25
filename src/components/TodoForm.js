import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSumbit = e=>{
        e.preventDefault();
         addTodo(value)
         setValue('')
    }
    return (
        <form className='TodoForm' onSubmit={handleSumbit}>
            <input  value={value}  type='text' className='todo-input' placeholder='what is the task today' onChange={(e)=>{setValue(e.target.value)}}/>
            <button type='submit' className='todo-btn'>
                Add Task
            </button>
        </form>
    )
}
