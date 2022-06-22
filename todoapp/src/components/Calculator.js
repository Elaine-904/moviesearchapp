import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import AddCalculator from "./AddCalculator";

function Calculator(){
    
    const [count,setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const expensiveF = useMemo(() => expensiveCalculator(count), [count])

    const addTodo = useCallback(
      (inputValues) => {
        setTodos(prevState=>[...prevState,inputValues])
      },
      [todos],
    )
    
    return(
        <div>
            <h2> my todos list </h2>
            
            <p>count : {count}</p>
            <button type="button" onClick={()=>setCount(c=>c+1)}>+</button>
            <button type="button" onClick={()=>setCount(c=>c-1)}>-</button>
            <h2>expensive Calculator</h2>
            <p>expensive count: {expensiveF}</p>
            <AddCalculator
                addTodo={addTodo}
                todos = {todos}
            />
        </div>
    )
}

const expensiveCalculator = num =>{
    return num*2;
}


export default Calculator;