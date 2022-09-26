import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(url); 

                if(response.ok) {
                    const json = await response.json(); 
                    setData(json.data);
                    setError(false)
                } else { 
                    setError(error);
                }
            } 
            catch(error) {
                setError(error.toString()); 
            }
            finally {   
                setLoading(false); 
            }
        }
        fetchData();
    }, [url, error]
    );

    return { data, loading, error }
}
 
export default useFetch; 