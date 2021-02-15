import axios from 'axios';
import { useState, useEffect } from 'react'
export default function useFetchSearchLocationData(url, mockdata) {

    const [data, setData] = useState(mockdata);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await axios.get(url);
                const data = await response.data;
                setData(data);
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
