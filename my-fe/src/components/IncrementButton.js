import { memo, useEffect } from "react";

function IncrementButton({onIncrement}){
    console.log('re-render', onIncrement);
    return(
        <button onClick={onIncrement}>Increment</button>
    )
}
export default memo(IncrementButton);