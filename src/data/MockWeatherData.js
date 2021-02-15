export default function MockWeatherData() {
    const testData = {
        // Mock data from the API
        coord: {
            lon: 32.5822,
            lat: 0.3163,
        },
        weather: [
            {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d",
            },
        ],
        base: "stations",
        main: {
            temp: 27,
            feels_like: 25.84,
            temp_min: 27,
            temp_max: 27,
            pressure: 1014,
            humidity: 61,
        },
        visibility: 10000,
        wind: {
            speed: 6.17,
            deg: 160,
        },
        clouds: {
            all: 20,
        },
        dt: 1612365668,
        sys: {
            type: 1,
            id: 2642,
            country: "UG",
            sunrise: 1612324823,
            sunset: 1612368394,
        },
        timezone: 10800,
        id: 232422,
        name: "London",
        cod: 200,
    };

    return testData
}