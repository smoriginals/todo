import React, { useState } from 'react';
import Cards from '../Componenets/Cards';
import '../App.css';

export default function Home() {

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]); // Corrected initial state to an array
    const [text, setText] = useState('No Task');

    const HandleChange = (e) => {
        setInputValue(e.target.value);
    }

    const AddCard = async (e) => {
        if (inputValue.trim() !== '') {
            try {
                const response = await fetch('http://localhost:5000/task/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ description: inputValue })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (list.length === 0) {
                        setList([inputValue]);
                        setText('New Task Added');
                    } else {
                        setList([...list, inputValue]);
                    }
                } else {
                    console.error('Failed to add task');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        setInputValue(''); // Added to clear the input field after adding the card
    }

    return (
        <>
            <h1>Let's To-Do</h1>
            <div className="container p-2">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold text-light">Let's Do Something Exceiting...</a>
                        <div className="container d-flex jusify-content-center p-2">
                            <input className="input-box" placeholder="Enter Task's" onChange={HandleChange} value={inputValue} /> {/* Added value attribute */}
                            <button className="add-button" onClick={AddCard}>Add</button>
                        </div>
                    </div>
                </nav>
            </div>
            <h1>{text}</h1>
            <div className="container d-flex justify-content-center flex-wrap">
                {
                    list.map((item, val) => {
                        return <Cards description={item} task={`Task ${val + 1}`} />
                    })
                }
            </div>
        </>
    );
}
