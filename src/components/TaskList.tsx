import React from 'react'
import { useGetTasksQuery, useDeleteTaskMutation } from '../api/Api-task';
import { Task } from '../types/Task';

function TaskList() {

    const { data, isLoading} = useGetTasksQuery({});

    const [ deleteTask ] = useDeleteTaskMutation();

    const handledelete = (id:number) => {
        
        deleteTask(id)
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (data){
        return (
            <ul>
                {
                    data.map((task: Task) => {
                        return <li key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button >Complete</button>
                            <button onClick={()=>handledelete(task.id)} >Delete</button>
                            </li>
                    })
                }
            </ul>
        )
    }
    else {
        return <div>Something went wrong</div>
    }
  
}

export default TaskList