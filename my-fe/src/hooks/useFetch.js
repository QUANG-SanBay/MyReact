import {useState, useEffect} from "react";
function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const[error, setError] = useState();
    useEffect(()=>{
        // Reset state khi url thay đổi
        setLoading(true);
        setData(null);
        setError(null);

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    },[url])
    return {data, loading, error}
}
export default useFetch;