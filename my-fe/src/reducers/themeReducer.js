import {themes} from '../themes/themes'
import {TOGGLE_THEME} from './constants'

function themReducer(state, action){
    switch(action.type){
        case TOGGLE_THEME:
            if(state.theme === 'light'){
                return {
                    theme: 'dark',
                    styles: themes.dark
                }
            }else{
                return {
                    theme: 'light',
                    styles: themes.light
                }
            }
        default:
            throw new Error('invalid action')
    }
}
export default themReducer;