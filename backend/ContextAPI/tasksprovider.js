import contexts from '../ContextAPI/contexts';
import React, { useState } from 'react';


const CreateTask = () => {
    console.log('Task Created');
}
const DeleteTask = () => {
    console.log('Task Deleted');
}
const CompleteTask = () => {
    console.log('Task Completed');
}
const ReadTask = () => {
    console.log('Task Read');
}

return (
    <contexts.Provider value={{ CreateTask, DeleteTask, CompleteTask, ReadTask }}>
        {props.children}
    </contexts.Provider>
)
export default tasksprovider;