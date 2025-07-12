import React, {useState} from "react";

function Counter() {
    const [count, setcount] = useState(0);
    const handelCounter = (number)=>{
        return count+number < 0 ? count : setcount(count + number)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={ ()=> handelCounter(1)}>Tăng</button>
            <button onClick={ ()=> handelCounter(-1)}>Giảm</button>
        </div>
    )
}
export default Counter;