import '../App.css';
import React, {useContext,useEffect} from 'react';
import Cards from '../Componenets/Cards';
import Navbar from '../Componenets/Navbar';
import Title from '../Componenets/Title';
import context from '../backend/ContextAPI/contexts';

export default function Home() {
    const ctx = useContext(context);
    const {tsk,FetchTask} = ctx;

    useEffect(() => {
        FetchTask();
    },[]);
    return (
        <>
            <Title />
            <div className="container p-2">
                <Navbar />
            </div>

            <div className="container">
                <h1 className="text-center text-white">{tsk.length===0?'No Tasks':'New Tasks'}</h1>
            </div>

            <div className="container d-flex justify-content-center flex-wrap p-2 h-100vh">
                {
                    tsk.map((task,index) => {
                        return <Cards key={task._id} description={task.description} title={`Task ${index + 1}`} />
                    })
                }
            </div>
        </>
    );
}
