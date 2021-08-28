const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place
    }
}


const updatePlaceData = (place) => {

    const fetchData = async () => {
        const fetchWeatherData = fetch(`https://api.weatherapi.com/v1/current.json?key=7689468754f047a7b6a100121210908&q=${place}`)
        const fetchAstroData = fetch(`https://api.weatherapi.com/v1/astronomy.json?key=7689468754f047a7b6a100121210908&q=${place}`)
        const [weatherDataJson, astroDataJson] = await Promise.all([fetchWeatherData, fetchAstroData])
        const [weatherData, astroData] = await (Promise.all([weatherDataJson.json(), astroDataJson.json()]))
        return { ...weatherData, ...astroData };
    }

    return (dispatch) => {
        fetchData().then(data => {
            console.log(data);
            dispatch({
                type: "UPDATE_PLACE_DATA",
                payload: data,
            })
        })
    }
};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    };
}

export { updatePlace, updatePlaceData, toggleTheme };