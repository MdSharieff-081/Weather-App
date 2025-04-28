import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import { useEffect, useState } from 'react';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigyYjpOBlFCQ5hLujqlRbxYkIKsXp8kerKA&s"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-a-tree-on-a-meadow-during-rainy-weather-image_15679740.jpg";
    
    return (
        <div className="InfoBox">
            
        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ?RAIN_URL
            :info.temp>20
            ?HOT_URL:
            COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
                info.humidity>80
                ?<ThunderstormSharpIcon />
                :info.temp>20
                ?<WbSunnySharpIcon />
                :<AcUnitIcon />
            }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C </p>
         <p>Humidity = {info.humidity}&deg;C </p>
         <p>Min Temp = {info.temp_min}&deg;C </p>
         <p>Max Temp = {info.temp_max}&deg;C </p>
         <p>The weather can be described as <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C </p>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}