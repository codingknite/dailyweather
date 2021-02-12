import { useState, useEffect } from 'react'
export default function useFetchSearchLocationData(url, mockdata) {

    const [data, setData] = useState(mockdata);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    throw response;
                }
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchWeatherData();
    }, [url]);
    return { data, error, loading }
}
