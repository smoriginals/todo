import React, { useState, useEffect } from 'react';
import contexts from '../ContextAPI/contexts';


const API_URL = process.env.REACT_APP_API_URL||'http://localhost:5000';

const TaskProvider = (props) => {

    const [tsk, setTsk] = useState([]);

    const CreateTask = async (taskDescription) => {
        try {
            const response = await fetch(`${API_URL}/task/add/`, {
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
        catch (error) {
            console.error('Error creating task:', error);
        }
    }

    const FetchTask = async () => {
        try {

            const response = await fetch(`${API_URL}/task/fetch`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setTsk(data);
        }
        catch (error) {
            console.error('Error fetching tasks:', error);
        }

    }
    useEffect(() => {
        FetchTask()
    }, [])

    const CompleteTask = async (id) => {
        try {

            const response = await fetch(`${API_URL}/task/done/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: true, color: 'primary' })
            })
            const data = await response.json();

            setTsk(tsk.map(task => task.id === id ? data : task));
            await FetchTask();
        }
        catch (error) {
            console.error('Error completing task:', error);
        }
    };

    const DeleteTask = async (id) => {
        try {

            const response = await fetch(`${API_URL}/task/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }

            })

            const data = await response.json();

            setTsk(tsk.filter(task => task.id !== id));
            await FetchTask();
        }
        catch (error) {
            console.error('Error deleting task:', error);
        }
    }


    return (
        <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, FetchTask, tsk, setTsk }}>
            {props.children}
        </contexts.Provider>
    )
}
export default TaskProvider;