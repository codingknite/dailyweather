import { useState, useEffect } from 'react'
import MockWeatherData from '../data/MockWeatherData'


export default function useFetchWeatherData(celcius) {

    const [city, setCity] = useState("London");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(MockWeatherData);


    useEffect(() => {
        function fetchWeatherData() {
            try {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
                } else {
                    console.log("Geolocation is not supported by this browser.");
                }

                async function geolocationSuccess(pos) {
                    const { latitude, longitude } = pos.coords;
                    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${celcius ? "metric" : "imperial"}`);
                    if (weatherData.ok) {
                        const data = await weatherData.json()
                        setWeatherData(data)
                        setCity(data.name)
                    } else {
                        throw weatherData;
                    }
                };

                function geolocationFailure(err) {
                    console.log("ERROR (" + err.code + "): " + err.message);
                };
            } catch (e) {
                console.error("Error =>>", e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchWeatherData()

    }, [celcius])

    return { city, weatherData, loading, error }
}













                // const location = await fetch("https://extreme-ip-lookup.com/json/");

                // if (location.ok) {
                //     const data = await location.json();
                //     if (isMounted.current) setCity(data.city)
                //     if (city) {
                //         const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d9a54be6ed79bbc56fec4528ad25e92&units=${celcius ? "metric" : "imperial"}`);
                //         if (weather.ok) {
                //             const data = await weather.json()
                //             if (isMounted.current) setWeatherData(data)
                //         }
                //     }
                // } else {
                //     throw location
                // }
