import { useState, useEffect, useRef } from 'react'
import MockWeatherData from '../data/MockWeatherData'

export default function useFetchWeatherData(celcius) {

    const [city, setCity] = useState("London");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(MockWeatherData);
    const isMounted = useRef(false)


    useEffect(() => {
        async function fetchWeatherData(url) {
            isMounted.current = true;
            try {
                const location = await fetch("https://extreme-ip-lookup.com/json/");

                if (location.ok) {
                    const data = await location.json();
                    if (isMounted.current) setCity(data.city)
                    const weather = await fetch(url);
                    if (weather.ok) {
                        const data = await weather.json()
                        if (isMounted.current) setWeatherData(data)
                    }
                } else {
                    throw location
                }

            } catch (e) {
                if (isMounted.current) setError(e);
            } finally {
                if (isMounted.current) setLoading(false);
            }

            return () => {
                isMounted.current = false;
            }
        }

        fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${celcius ? "metric" : "imperial"}`)

    }, [city, celcius])

    return { city, weatherData, loading, error }
}