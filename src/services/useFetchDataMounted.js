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
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (isMounted.current) setData(data);
                } else {
                    throw response;
                }
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
