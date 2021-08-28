import {useSelector} from 'react-redux';

const WeatherCard = () => {
	const theme = useSelector(state => state.theme);
    const placeData = useSelector(state => state.placeData);
    
    return (
        <div className="offset-md-2 col-12 col-md-8 offset-lg-4 col-lg-4 weather">
            <div className={theme ? "card dark" : "card"}>
                {
                    placeData.location ? (
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
                                        <i style={{ position: "relative", top: "3px" }} className="bi bi-sunrise-fill"></i>
                                        <span style={{ marginLeft: "10px" }} className="unit">{placeData.astronomy.astro.sunrise}</span>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-5">
                                    <div className="data">
                                        <span style={{ marginRight: "10px" }} className="unit">{placeData.astronomy.astro.sunrise}</span>
                                        <i style={{ position: "relative", top: "3px" }} className="bi bi-sunset-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (<h2>Place not found</h2>)
                }
            </div>
        </div>
    );
}

export default WeatherCard;