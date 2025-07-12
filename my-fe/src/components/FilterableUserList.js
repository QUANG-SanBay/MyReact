import React, {useState, useEffect} from "react";
import useFetch from '../hooks/useFetch'

function FilterableUserList(){
    const {data: users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    const [value, setValue] =useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const handelValue = (e)=>{
        setValue(e.target.value);
    }
    useEffect(()=>{
        if (users) {
            const filtered = users.filter(item => 
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    },[value, users])

    // Logic render
    if (loading) return <span>Loading...</span>;
    // Chỉ hiển thị lỗi khi có lỗi thật sự
    if (error) return <span>Có lỗi: {error.message}</span>;
    return(
        <>
            <input type="text" value={value} onChange={handelValue}/>
            <ul>
                {filteredUsers.map((user)=>((
                    <li key={user.id}>{user.name}</li>
                )))}
            </ul>
        </>
    )
}
export default FilterableUserList;