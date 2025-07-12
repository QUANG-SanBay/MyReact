import React, {useEffect, useState} from "react";
function Timer(){
    const [currentTimer, setCurrentTimer] = useState(0);
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setCurrentTimer(prev => prev+1)
        },1000)
        return()=>{
            clearInterval(intervalID);
        }
    })
    return(
        <>
            <span>component dã được render trong: {currentTimer}</span>
        </>
    )
}
export default Timer;