import React from 'react'
import { useCreateTaskMutation } from '../api/Api-task';

function TaskForm() {

     const [ createtask ] =useCreateTaskMutation()

    const handleSubmit = (e:any) =>{
        e.preventDefault();

         const name = e.target.elements.name.value.trim();
        const description = e.target.elements.description.value.trim();
        const completed = e.target.elements.completed.checked
        createtask({
            title: name,
            description: description,
            status: completed
        }) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' />
            <input type='text' name='description' />
            <input type='checkbox' name='completed' />
            <button type='submit'>Add Task</button>
            
        </form>
    )
}

export default TaskForm