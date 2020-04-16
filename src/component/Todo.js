import React from 'react';

export default function Todo(props){

    const  handleDelete = () =>{
        props.delete(props.title)
    }

    const handleEdit = () =>{
        props.edit(props.title, 'newEdit')
    }
    return(
        <div >
        {props.title}
        <button onClick={handleDelete}> delete </button>
        <button onClick={handleEdit}> edit </button>
        </div>
    )
}