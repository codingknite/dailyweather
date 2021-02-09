export default function mockForecast() {
    const testForecast = {
        // Mock data from the API
        cod: "200",
        message: 0,
        cnt: 5,
        list: [
            {
                dt: 1612450800,
                main: {
                    temp: 8.54,
                    feels_like: 4.89,
                    temp_min: 8.41,
                    temp_max: 8.54,
                    pressure: 1009,
                    sea_level: 1009,
                    grnd_level: 1005,
                    humidity: 85,
                    temp_kf: 0.13,
                },
                weather: [
                    {
                        id: 500,
                        main: "Rain",
                        description: "light rain",
                        icon: "10d",
                    },
                ],
                clouds: {
                    all: 87,
                },
                wind: {
                    speed: 3.95,
                    deg: 161,
                },
                visibility: 10000,
                pop: 0.94,
                rain: {
                    "3h": 1.16,
                },
                sys: {
                    pod: "d",
                },
                dt_txt: "2021-02-04 15:00:00",
            },
            {
                dt: 1612461600,
                main: {
                    temp: 8.16,
                    feels_like: 5.29,
                    temp_min: 8.02,
                    temp_max: 8.16,
                    pressure: 1008,
                    sea_level: 1008,
                    grnd_level: 1004,
                    humidity: 91,
                    temp_kf: 0.14,
                },
                weather: [
                    {
                        id: 500,
                        main: "Rain",
                        description: "light rain",
                        icon: "10n",
                    },
                ],
                clouds: {
                    all: 92,
                },
                wind: {
                    speed: 3.03,
                    deg: 155,
                },
                visibility: 10000,
                pop: 0.98,
                rain: {
                    "3h": 0.55,
                },
                sys: {
                    pod: "n",
                },
                dt_txt: "2021-02-04 18:00:00",
            },
            {
                dt: 1612472400,
                main: {
                    temp: 7.74,
                    feels_like: 3.81,
                    temp_min: 7.68,
                    temp_max: 7.74,
                    pressure: 1007,
                    sea_level: 1007,
                    grnd_level: 1004,
                    humidity: 91,
                    temp_kf: 0.06,
                },
                weather: [
                    {
                        id: 500,
                        main: "Rain",
                        description: "light rain",
                        icon: "10n",
                    },
                ],
                clouds: {
                    all: 91,
                },
                wind: {
                    speed: 4.42,
                    deg: 153,
                },
                visibility: 10000,
                pop: 0.64,
                rain: {
                    "3h": 0.28,
                },
                sys: {
                    pod: "n",
                },
                dt_txt: "2021-02-04 21:00:00",
            },
            {
                dt: 1612483200,
                main: {
                    temp: 6.97,
                    feels_like: 4.34,
                    temp_min: 6.96,
                    temp_max: 6.97,
                    pressure: 1007,
                    sea_level: 1007,
                    grnd_level: 1004,
                    humidity: 95,
                    temp_kf: 0.01,
                },
                weather: [
                    {
                        id: 500,
                        main: "Rain",
                        description: "light rain",
                        icon: "10n",
                    },
                ],
                clouds: {
                    all: 79,
                },
                wind: {
                    speed: 2.51,
                    deg: 184,
                },
                visibility: 10000,
                pop: 1,
                rain: {
                    "3h": 0.53,
                },
                sys: {
                    pod: "n",
                },
                dt_txt: "2021-02-05 00:00:00",
            },
            {
                dt: 1612494000,
                main: {
                    temp: 6.17,
                    feels_like: 3.76,
                    temp_min: 6.17,
                    temp_max: 6.17,
                    pressure: 1007,
                    sea_level: 1007,
                    grnd_level: 1004,
                    humidity: 97,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 801,
                        main: "Clouds",
                        description: "few clouds",
                        icon: "02n",
                    },
                ],
                clouds: {
                    all: 12,
                },
                wind: {
                    speed: 2.05,
                    deg: 198,
                },
                visibility: 10000,
                pop: 0.02,
                sys: {
                    pod: "n",
                },
                dt_txt: "2021-02-05 03:00:00",
            },
        ],
        city: {
            id: 2643743,
            name: "London",
            coord: {
                lat: 51.5085,
                lon: -0.1257,
            },
            country: "GB",
            population: 1000000,
            timezone: 0,
            sunrise: 1612424039,
            sunset: 1612457692,
        },
    };

    return testForecast;
}