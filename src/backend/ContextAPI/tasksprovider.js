import React, { useState,useEffect } from 'react';
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
        setTsk([...tsk, data]);
        await FetchTask();
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
    useEffect(() => {
        FetchTask()
    }, [])

    const CompleteTask = async (id) => {
        const response = await fetch(`http://localhost:5000/task/done/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: true })
        })
        const data = await response.json();
        setTsk(tsk.map(task => task.id === id ? data : task));
        
    };

    const DeleteTask = async (id) => {
        const response = await fetch(`http://localhost:5000/task/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }

        })
        const data = await response.json();
        setTsk(tsk.filter(task => task.id !== id));
        await FetchTask();
    }

   
return (
    <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, FetchTask, tsk, setTsk }}>
        {props.children}
    </contexts.Provider>
)
}
export default TaskProvider;