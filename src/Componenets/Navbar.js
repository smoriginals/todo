import React, { useState, useContext } from 'react'
import context from '../backend/ContextAPI/contexts';
import '../App.css';
export default function AddTaskBar(props) {

    const ctx = useContext(context);
    const { tsk, setTsk } = ctx;

    const [inputValue, setInputValue] = useState('');

    const HandleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
       
    }

    const HandleAddTask = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            setTsk([...tsk, inputValue]);
            ctx.CreateTask(inputValue);
            setInputValue('');
        }
        
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary rounded-0 d-flex p-3 mb-0">
                <div className="container d-flex justify-content-center">
                    <a className="navbar-brand text-center w-100">What's in Your Mind</a>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2 input-box" type="search" placeholder="🎯 Let's Do This..." aria-label="Search" onChange={HandleChange} value={inputValue} />
                        <button className="btn btn-primary" onClick={HandleAddTask}>Add</button>
                    </div>
                </div>
            </nav>
        </>
    );
}