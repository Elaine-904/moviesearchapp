import React from "react";

function TodoRow({index,todo}){
    return(
        <>
            <span>{todo.text}</span>
        </>
    )
}

export default TodoRow;