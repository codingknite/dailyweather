import React, { useState, useEffect } from 'react'


const UseFetch = url => {

    const [data, setData] = useState(null)

    useEffect()
}


const getLocation = () => {
    fetch("https://extreme-ip-lookup.com/json/")
        .then((res) => res.json())
        .then((data) => setCity(data.city))
        .catch((error) => console.log("Error: ", error))
}