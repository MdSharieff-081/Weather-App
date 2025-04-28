import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="9b79eb889604c39d123b8f7a6715b0f4";

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
           throw err;
        }
        
    }
    

    let handleChange=(event)=>{
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true);
        }
        
    }

    
    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city-name" 
            label="City Name"
            variant="outlined"
            value={city} 
            onChange={handleChange}
            required/>
            <br></br> <br></br>
            <Button variant="contained" type='submit'>Search</Button>
           {error && <p style={{color:"red"}}>No Data Available!</p> }
        
            </form>
        </div>
    );
}

