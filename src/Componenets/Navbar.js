import React from 'react'
import '../App.css';
export default function AddTaskBar(props) {

    const HandleChange = (e) => {
        console.log(e.target.value);
    }
    const HandleAddTask = () => {
        console.log('Task Added');
    }
    return (
        <>
            <nav className="navbar bg-body-tertiary rounded-0 d-flex p-3">
                <div className="container d-flex justify-content-center">
                    <a className="navbar-brand text-center w-100">What's in Your Mind</a>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2 input-box" type="search" placeholder="🎯 Let's Do This..." aria-label="Search" onChange={HandleChange } />
                        <button className="btn btn-primary" onClick={HandleAddTask}>Add</button>
                    </div>
                </div>
            </nav>
        </>
    );
}