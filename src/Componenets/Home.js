import '../App.css';
import React, {useContext} from 'react';
import Cards from '../Componenets/Cards';
import Navbar from '../Componenets/Navbar';
import Title from '../Componenets/Title';
import context from '../backend/ContextAPI/contexts';

export default function Home() {
    const ctx = useContext(context);
    const { ReadTask } = ctx;

    const FetchTask = () => {
        ReadTask();
    }

    return (
        <>
            <Title />
            <div className="container p-2">
                <Navbar />
            </div>

            <div className="container">
                <h1 className="text-center text-white">No Task</h1>
            </div>

            <div className="container d-flex justify-content-center flex-wrap p-2">
                <Cards/>
            </div>
        </>
    );
}
