import React, { useContext } from 'react';
import contexts from '../ContextAPI/contexts';
import '../App.css';

export default function Cards(props) {

    const ctx = useContext(contexts);
    const { CompleteTask, DeleteTask, FetchTask } = ctx;

    const cardColor = props.completed ? 'primary' : 'white';

    const Completed = (e) => {
        e.preventDefault();
        CompleteTask(props.id); 
    }
    const Delete = (e) => {
        e.preventDefault();
        DeleteTask(props.id);
        FetchTask();
    }

    return (
        <>
            <div className="card m-1 rounded-1 fs-5">
                <div className={`card-body p-3 bg-${cardColor}`}>
                    <h4 className="card-subtitle">{props.title}</h4>
                    <p className="card-text ext ">-----------------------------------</p>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="card-link"><i className="fa-solid ok fa-circle-check fs-4" onClick={Completed} ></i></a>
                    <a href="/" className="card-link"><i className="fa-solid dl fa-circle-xmark fs-4" onClick={Delete}></i></a>
                </div>
            </div>

        </>
    );
}