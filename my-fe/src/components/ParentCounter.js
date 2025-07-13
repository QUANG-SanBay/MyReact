import { useCallback, useState } from "react";
import IncrementButton from './IncrementButton';

function ParentCounter(){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const handleIncrement = useCallback(()=>{
        setCount(prev => prev + 1);
    },[])
    return(
        <>
            <span>{count}</span>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <IncrementButton onIncrement={handleIncrement}></IncrementButton>
        </>
    )
}
export default ParentCounter;