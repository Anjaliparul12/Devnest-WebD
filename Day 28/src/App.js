import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import './App.css';

import { useState, useEffect } from 'react';

function App() {

	const [place, setplace] = useState("Lucknow");
	const [placeData, setPlaceData] = useState({})
	useEffect(() => {
		updatePlaceData();
	}, [])

	const updatePlaceData = () => {
		fetchData().then(data => setPlaceData(data));
	}

	const fetchData = async () => {
		const fetchWeatherData = fetch(`https://api.weatherapi.com/v1/current.json?key=7689468754f047a7b6a100121210908&q=${place}`)
		const fetchAstroData = fetch(`https://api.weatherapi.com/v1/astronomy.json?key=7689468754f047a7b6a100121210908&q=${place}`)
		const [weatherDataJson, astroDataJson] = await Promise.all([fetchWeatherData, fetchAstroData])
		const [weatherData, astroData] = await (Promise.all([weatherDataJson.json(), astroDataJson.json()]))
		return { ...weatherData, ...astroData };
	}

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-12 form">
						<input type="text" value={place} onChange={(e) => setplace(e.target.value)} />
						<button className="btn  btn-primary" onClick={() => { updatePlaceData() }}>
							Submit
						</button>
					</div>
					<div className="offset-md-2 col-12 col-md-8 offset-lg-4 col-lg-4 weather">
						<div className="card">
							{placeData.location ? (
								<div>
									<div className="place">{placeData.location.name}</div>
									<img src={placeData.current.condition.icon} alt="img" />
									<div className="temp">{placeData.current.temp_c}°C</div>
									<div className="desc">{placeData.current.condition.text}</div>
									<div className="container">
										<div className="row whp">
											<div className="col">
												<div className="title">Wind Now</div>
												<div className="data">
													{placeData.current.wind_kph}<span className="unit">KM</span>
												</div>
											</div>
											<div className="col">
												<div className="title">Humidity</div>
												<div className="data">
													{placeData.current.humidity}<span className="unit">%</span>
												</div>
											</div>
											<div className="col">
												<div className="title">Precipitation</div>
												<div className="data">
													{placeData.current.precip_in}<span className="unit">%</span>
												</div>
											</div>
										</div>
									</div>

									<div className="row whp">
										<div className="col-4 offset-2 offset-lg-1 col-lg-5">
											<div className="data">
												<i style={{ position: "relative", top: "3px" }} class="bi bi-sunrise-fill"></i>
												<span style={{ marginLeft: "10px" }} className="unit">{placeData.astronomy.astro.sunrise}</span>
											</div>
										</div>
										<div className="col-4 col-lg-5">
											<div className="data">
												<span style={{ marginRight: "10px" }} className="unit">{placeData.astronomy.astro.sunrise}</span>
												<i style={{ position: "relative", top: "3px" }} class="bi bi-sunset-fill"></i>
											</div>
										</div>
									</div>
								</div>
							) : (<h2>Place not found</h2>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
