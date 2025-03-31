import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import contexts from '../../backend/ContextAPI/contexts';
import Cards from '../Componenets/Cards';
import Navbar from '../Componenets/Navbar';
import Title from '../Componenets/Title';

export default function Home() {

    const example = useContext(contexts);
    const { ReadTask } = example;

    const FetchTask = () => {
        ReadTask();
    }

    return (
        <>
            <Title />

            <div className="container p-2">
                 <Navbar/>
            </div>

            <div className="container">
                <h1 className="text-center text-white">No Task</h1>
            </div>

            <div className="container d-flex justify-content-center flex-wrap p-2">
                FetchTask();
                <Cards/>
            </div>
        </>
    );
}
