import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox";
import Footer from "./Footer";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Kakinada",
        feelsLike:38.23,
        temp:36.57,
        temp_min:36.57,
        temp_max:36.57,
        humidity:34,
        weather:"clear sky",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <Footer />
        </div>
        
    );
}