import { useEffect } from "react";
import { useParams } from "react-router";
import { useReducerAPI } from "../api";

import "./index.css";

const Detail =function(){
    let { lat,lng } = useParams();

    const currentWeatherState = useReducerAPI(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=d79e473c27e1ce85a145c3a51e23f2c5`
    );

    return(
        <>
                <div className="background">
                    <img
                        src={`http://openweathermap.org/img/wn/${currentWeatherState.data && currentWeatherState.data.current.weather[0].icon}@4x.png`}
                        alt="status" />
                    <p className="capitalize">{currentWeatherState.data && currentWeatherState.data.current.weather[0].description}</p>
                    <p>{currentWeatherState.data && currentWeatherState.data.current.temp}°C</p>
                    <div className="flex justify-center">
                        <p className="px-6">{currentWeatherState.data && currentWeatherState.data.current.wind_speed} km/h</p>
                        <p className="px-6">{currentWeatherState.data && currentWeatherState.data.current.humidity}%</p>
                    </div>
                </div>
        </>
    )

}

export default Detail