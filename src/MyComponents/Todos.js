import React from 'react';
import TodoItem from "./TodoItem";


const Todos = (props) => {

    let myStyle = {
        minHeight:"80vh"
    }

    return <div className="container mt-5" style={myStyle}>
        {props.todos.length===0? "No todos to display":
        props.todos.map((todo) =>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
        
    </div>;
}


export default Todos;