import React, { useEffect, useRef, useState } from "react";

function InputBar({addTodo}){
    const [value,setValue] = useState("");
    const inputElement = useRef(null);
    useEffect(()=>{inputElement.current.focus()},[])
 
    const handleSubmit=e=>{
        e.preventDefault();
        if(!value)return null;
        addTodo(value);
        setValue("");
    }
    const handleChange=e=>{
        setValue(e.target.value)
    };
    return(
        <form onSubmit={handleSubmit}>
            input to-do:
             <input ref = {inputElement} type="text" placeholder="add to-do...." onChange={handleChange} value={value} />
             <button >add</button>
        </form>
    )
}

export default InputBar;
