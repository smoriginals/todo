import React, { useState} from 'react';
import '../App.css';
export default function Cards(props) {

    const [color, setColor] = useState('white');

    const Complete = (e) => {
        const newColor = color === 'white' ? 'lightgreen' : 'white';
        setColor(newColor);
        e.target.closest('.card').style.backgroundColor = newColor;
    }
    const Delete = (e) => {
        console.log('Deleting');
    }
    return (
        <>
            <div className="card col-md-3 my-2 mx-2">
                <div className="card-body">
                    <h5 className="card-title">{props.task}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="card-link"><i className="fa-solid ok fa-circle-check fs-4" onClick={Complete} ></i></a>
                    <a href="#" className="card-link"><i className="fa-solid dl fa-circle-xmark fs-4" onClick={Delete}></i></a>
                </div>
            </div>
        </>
    );
}