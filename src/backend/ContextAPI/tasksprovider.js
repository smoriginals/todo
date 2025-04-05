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
            body: JSON.stringify({ description: taskDescription})
        });
        const data = await response.json();
        setTsk([...tsk,data]);
    }

    const FetchTask = async () => {
        const response = await fetch('http://localhost:5000/task/fetch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setTsk(data);
    }

    const CompleteTask = async (id) => {
        const response = await fetch(`http://localhost:5000/task/done/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ completed: true })
        })
        const data = await response.json();
        setTsk(tsk.map(task => task.id === id ? data : task));
        console.log('Task Completed');
       
    };

    const DeleteTask = () => {
        console.log('Task Deleted');
    }


    return (
        <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, FetchTask, tsk, setTsk }}>
            {props.children}
        </contexts.Provider>
    )
}
export default TaskProvider;