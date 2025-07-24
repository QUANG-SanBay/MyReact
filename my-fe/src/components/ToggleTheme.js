import { ThemeContext } from "../contexts";
import { toggleTheme } from "../reducers";
import { useContext } from "react";


function ToggleTheme(){
    const [state, dispatch] = useContext(ThemeContext);
    console.log(state, dispatch)
    
    const handleToggle = ()=>{
        dispatch(toggleTheme())
    }
    console.log(state)
    return(
        <button onClick={handleToggle}>Toggle theme</button>
    )
}
export default ToggleTheme;