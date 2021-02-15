import axios from 'axios';
import { useState, useEffect, useRef } from 'react'

export default function useFetchDataMounted(url, mockdata) {

    const isMounted = useRef(false)
    const [data, setData] = useState(mockdata);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        isMounted.current = true;
        async function fetchData() {
            try {
                const response = await axios.get(url);
                const data = await response.data;
                if (isMounted.current) setData(data);
            } catch (e) {
                if (isMounted.current) setError(e)
            } finally {
                if (isMounted.current) setLoading(false);
            }

            return () => {
                isMounted.current = false;
            }
        }
        fetchData()
    }, [url])

    return { data, error, loading }
}
