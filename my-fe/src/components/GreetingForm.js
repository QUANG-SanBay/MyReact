import React, {useState} from "react";

function GreetingForm(){
    const [value, setValue] = useState('');
    const handelValue = (e)=>{
        setValue(e.target.value);
        console.log(e);
        console.log(e.target);
    }
    return(
        <>
            <input type="text" value={value} onChange={handelValue}/>
            <span>Xin chào: {value}</span>
        </>
    )
}
export default GreetingForm;