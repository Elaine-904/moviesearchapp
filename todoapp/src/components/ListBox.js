import React from "react";
import TodoRow from "./TodoRow";

function ListBox({todos}){
    return(
        <ul>
           {todos.map((todo,index)=>(
           <li>
                <TodoRow
                    todo = {todo}
                    index = {index}
                    key={index}
                />
           </li>
           ))}
        </ul>
    )
}

export default ListBox;
