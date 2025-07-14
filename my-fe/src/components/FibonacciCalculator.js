import { useState, useEffect, useMemo } from "react";

function FibonacciCalculator(){
    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const slowFib = (n) => {
        console.log('Calculating Fibonacci for', n); // Thêm log để theo dõi
        if (n <= 1) return n;
        return slowFib(n - 1) + slowFib(n - 2);
    };
    const handleFibo = (e)=>{
        setNum(parseInt(e.target.value) || 0);
    }

    const fibResult = useMemo(()=>{
        
        return slowFib(num)
    },[num]) 
    return(
        <>
            <input type="text" value={num} onChange={handleFibo}/>
            <span>Kết quả: {fibResult}</span>
            <span>đã đếm: {count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>reduce</button>
        </>
    )
}
export default FibonacciCalculator;