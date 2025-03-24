import React from 'react';
import '../App.css';
export default function Cards(props) {
    return (
        <>
            
                <div className="card col-md-4 my-2 mx-2">
                    <div className="card-body">
                        <h5 className="card-title">Task</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Study</h6>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="card-link"><i className="fa-solid ok fa-circle-check fs-4"></i></a>
                        <a href="#" className="card-link"><i className="fa-solid dl fa-circle-xmark fs-4"></i></a>
                    </div>
                </div>
          
        </>
    );
}