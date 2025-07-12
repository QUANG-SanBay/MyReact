import React, {useState, useEffect} from "react";

function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => console.error('lỗi: ', error));
    },[])
    return(
        <ul>
            {users.map((value)=> (
                <li key={value.id}>{value.name}</li>
            ))}
        </ul>
    )
}
export default UserList;