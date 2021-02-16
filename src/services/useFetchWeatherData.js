import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import MockWeatherData from '../data/MockWeatherData'

export default function useFetchWeatherData(celcius) {

    const [city, setCity] = useState("London");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(MockWeatherData);
    const apiKey = process.env.REACT_APP_API_KEY;
    const isMounted = useRef(false)


    useEffect(() => {
        async function fetchLocation(url) {
            try {
                const response = await axios.get(url)
                const data = await response.data
                setCity(data.city)
            } catch (error) {
                setError(error)
            }
        }

        async function fetchWeatherData(url) {
            isMounted.current = true;
            try {
                const response = await axios.get(url);
                const data = await response.data;
                if (isMounted.current) setWeatherData(data);
            } catch (e) {
                if (isMounted.current) {
                    throw e;
                };
            } finally {
                if (isMounted.current) setLoading(false);
            }

            return () => {
                isMounted.current = false;
            }
        }

        fetchLocation("https://extreme-ip-lookup.com/json/");
        fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${celcius ? "metric" : "imperial"}`)

    }, [apiKey, city, celcius])

    return { city, weatherData, loading, error }
}