import { useReducer, useState } from "react";

const initState = []    

const ADD_TODO = 'addToDo'
const TOGGLE_TODO = 'toggleToDo'
const DELETE_TODO = 'deleteToDo'

function reducer(state, action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id:Date.now(),
                    text: action.payload,
                    comleted: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((item)=>(
                item.id === action.payload ? { ...item, comleted: !item.comleted} : item
            ))
        case DELETE_TODO:
            return state.filter(item => item.id !== action.payload)
        default:
            throw new Error('invalid err')
    }
}

function TodoList(){
    const [value, setValue] = useState('')
    const [state, dispath] = useReducer(reducer, initState)

    const handleAddToDo = ()=>{
        dispath({
            type: ADD_TODO,
            payload: value,
        })
        setValue('');
    }
    const handlleToggle = (id)=>{
        dispath(
            {
                type: TOGGLE_TODO,
                payload: id
            }
        )
    }
    const handleDelete = (id)=>{
        dispath(
            {
                type: DELETE_TODO,
                payload: id
            }
        )
    }
    const handleValue = (e)=>{
        return setValue(e.target.value);
    }


    return(
        <div style={{padding:'20px 160px'}}>
            <input type="text" value={value} onChange={handleValue}/>
            <button onClick={()=> handleAddToDo()}>add</button>
            <ul>
                {state.map((item)=>(
                <li key={item.id}>
                    {item.text || ''}
                    <button onClick={()=>handlleToggle(item.id)}>Toggle</button>
                    <button onClick={()=> handleDelete(item.id)}>delete</button>
                    {item.comleted && <span style={{color: 'green',marginLeft:'80px'}}>Comleted</span>}
                </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;