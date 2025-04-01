import React, { useState } from 'react';
import contexts from '../ContextAPI/contexts';

const TaskProvider = (props) => {

    const [tsk, setTsk] = useState([]);

    const CreateTask = async (taskDescription) => {
       
        const response = await fetch('http://localhost:5000/task/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: taskDescription
            })
        });
        const data = await response.json();
        console.log(data);
        console.log('Task Created');
        
    }


    const DeleteTask = () => {
        console.log('Task Deleted');
    }
    const CompleteTask = () => {
        console.log('Task Completed');
    }
    const ReadTask = () => {
        console.log('Task Read');
    }

    return (
        <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, ReadTask, tsk, setTsk }}>
            {props.children}
        </contexts.Provider>
    )
}
export default TaskProvider;