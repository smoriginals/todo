import React, { useState } from 'react';
import '../App.css';

export default function Home() {

    return (
        <>
            <h1>Let's To-Do</h1>
            <div className="container">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold text-light">Task's</a>
                        <div className="container d-flex jusify-content-center p-2">
                            <input className="input-box" placeholder="Enter Task's"/>
                            <button className="add-button">Add</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}