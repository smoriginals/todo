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
            body: JSON.stringify({ description: taskDescription })
        });
        const data = await response.json();
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

    const DeleteTask = () => {
        console.log('Task Deleted');
    }

    const CompleteTask = async (id) => {
        const response = await fetch('http://localhost:5000/task/done/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        const data = await response.json();
        setTsk(data);

    }

    return (
        <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, FetchTask, tsk, setTsk }}>
            {props.children}
        </contexts.Provider>
    )
}
export default TaskProvider;