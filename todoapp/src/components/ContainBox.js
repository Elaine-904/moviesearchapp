import React, { useState } from "react";
import InputBar from "./InputBar";
import ListBox from "./ListBox";

function ContainBox(){
    const [todos, setTodos] = useState(
        [
            {
                text:"this is a todo",
                isComplete: false
            }
        ]
    )

    const addTodo=(value)=>{
        let prevState = [...todos];
        prevState=[...prevState,{
            text:value,
            isComplete:false
        }];
        setTodos(prevState)
    }

    return(
        <div className="container">
            <InputBar addTodo = {addTodo}/>
            <ListBox todos = {todos}/>
        </div>
    )
}

export default ContainBox;