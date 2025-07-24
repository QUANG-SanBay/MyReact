import { createContext, useReducer } from "react";
import {themeReducer,initTheme} from '../reducers/'
export const ThemeContext = createContext();


function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer, initTheme)
    return(
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;