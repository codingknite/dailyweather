export default function MockWeatherCondition() {
    const testData = {
        coord: {
            lon: -118.2437,
            lat: 34.0522,
        },
        weather: [
            {
                id: 721,
                main: "Haze",
                description: "haze",
                icon: "50d",
            },
        ],
        base: "stations",
        main: {
            temp: 286.54,
            feels_like: 285.52,
            temp_min: 284.15,
            temp_max: 288.15,
            pressure: 1018,
            humidity: 76,
        },
        visibility: 9656,
        wind: {
            speed: 1.24,
            deg: 190,
        },
        clouds: {
            all: 90,
        },
        dt: 1612978189,
        sys: {
            type: 1,
            id: 3694,
            country: "US",
            sunrise: 1612968144,
            sunset: 1613007130,
        },
        timezone: -28800,
        id: 5368361,
        name: "Los Angeles",
        cod: 200,
    };

    return testData
}