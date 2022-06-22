import { Fragment, useState, useEffect, useRef,memo } from "react";

function AddCalculator({addTodo, todos}){
    const [inputValues, setInputValues] = useState("")
    const handleOnChange=(event)=>{
        setInputValues(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!inputValues)return null;
        addTodo(inputValues);
    }

    const currentInput = useRef("");
    useEffect(() => {
        currentInput.current=inputValues
    }, [inputValues]);
    console.log("render!")

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
            <p>current input text: {currentInput.current}</p>
            <input type="text" value = {inputValues} onChange={handleOnChange}/>
            <button type="submit">add todo task</button>
        </form>
        <ul>
            {todos.map((todo,index)=>{
            return<li key={index}>{todo}</li>
            })}
        </ul>
        </Fragment>
        )
    
}

export default memo(AddCalculator);