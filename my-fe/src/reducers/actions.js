import {ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM} from './constants'
export const addItem = (payload)=>{
    return {
        type: ADD_ITEM,
        payload: payload
    }
}
export const removeItem = (payload)=>{
    return {
        type: REMOVE_ITEM,
        payload: payload
    }
}
export const clearItem = ()=>{
    return {
        type: CLEAR_ITEM,
    }
}