// import { themes } from "../contexts/"
import {themes} from '../themes/themes'


//1. init value
export const initCart = []
export const initTheme = {
    theme: 'light',
    styles: themes.light,
}

//2. action
export const ADD_ITEM = 'addItem'
export const REMOVE_ITEM = 'removeItem'
export const CLEAR_ITEM = 'clearItem'

//theme action
export const TOGGLE_THEME = 'toggleTheme'