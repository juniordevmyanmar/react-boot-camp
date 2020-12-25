import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { useReducerAPI } from "../api";
import MiniCard from "../components/minicard";

import "./index.css";

const Detail =function(){
    let { lat,lng } = useParams();

    const currentWeatherState = useReducerAPI(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=d79e473c27e1ce85a145c3a51e23f2c5`
    );

    return(
        <div className="container">
            <img
                src={`http://openweathermap.org/img/wn/${currentWeatherState.data && currentWeatherState.data.current.weather[0].icon}@4x.png`}
                alt="status" />
            <p className="capitalize font-medium tracking-wider">{currentWeatherState.data && currentWeatherState.data.current.weather[0].description}</p>
            <p className="text-7xl my-8">{currentWeatherState.data && currentWeatherState.data.current.temp}&#176;</p>
            <div className="flex justify-center">
                <div className="flex px-6">
                    <FontAwesomeIcon icon={faWind} className="px-2" style={{ color: '#374151'}} />
                    <p className="m-0 text-gray-800">{currentWeatherState.data && currentWeatherState.data.current.wind_speed} km/h</p>
                </div>
                <div className="flex px-6">
                    <FontAwesomeIcon icon={faTint} className="px-2" style={{ color: '#374151'}} />
                    <p className="m-0 text-gray-800">{currentWeatherState.data && currentWeatherState.data.current.humidity}%</p>
                </div>
            </div>
            <div className="flex mt-8">
                {
                    currentWeatherState.data && currentWeatherState.data.daily.map((day) => (
                        <MiniCard datetime={day.dt} iconcode={day.weather[0].icon} temperature={day.temp.max}/>
                    ))
                }
            </div>
        </div>
    )

}

export default Detail