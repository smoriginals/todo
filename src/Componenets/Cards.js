import React, {useContext,useState} from 'react';
import contexts from '../backend/ContextAPI/contexts';
import '../App.css';

export default function Cards(props) {
    const ctx = useContext(contexts);
    const { CompleteTask } = ctx;

    const [color, setColor] = useState('white');

    const Completed = (e) => {
        e.preventDefault();
        CompleteTask(props.id);
        setColor('success');
        
    }
    const Delete = (e) => {
        e.preventDefault();
        console.log('Task Deleted');
    }

    return (
        <>
            <div className="card m-1 rounded-1">
                <div className="card-body p-3">
                    <h4 className="card-subtitle mb-2 text-body-secondary">{props.title}</h4>
                    <p className="card-text ext ">--------------------------------------------</p>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="card-link"><i className="fa-solid ok fa-circle-check fs-4" onClick={Completed} ></i></a>
                    <a href="/" className="card-link"><i className="fa-solid dl fa-circle-xmark fs-4" onClick={Delete}></i></a>
                </div>
            </div>

        </>
    );
}