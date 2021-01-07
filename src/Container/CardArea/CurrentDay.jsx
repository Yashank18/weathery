import React from 'react';

// Import for images
import sunny from '../../Assets/sunny.gif';
import clouds from '../../Assets/cloud.gif';
import heavyRain from '../../Assets/rain.gif';
import thunder from '../../Assets/thunder.gif';
import snow from '../../Assets/snow.gif';
import mist from '../../Assets/mist.gif';
import sunWithClouds from '../../Assets/sun_withClouds.gif'

// import css
import './CurrentDay.css'

function CurrentDay(props){
    let icon;
    let icon_code=props.data[0]?.weather.code;

    if(icon_code>=200 && icon_code<300) 
        icon=thunder

    else if(icon_code>=300 && icon_code<600)
        icon=heavyRain

    else if(icon_code>=600 && icon_code<700)
        icon=snow;

    else if(icon_code>=700 && icon_code<752)
        icon=mist;

    else if(icon_code===800)
        icon=sunny;

    else if(icon_code>=801 && icon_code<=803)
        icon=sunWithClouds;

    else if(icon_code>803)
        icon=clouds

    else 
    icon=sunny;

    console.log(props.data[0])
    return (
    <div className="current">
        <img alt="temp" height="150px" src={icon}/>
        <div className="current-inside">
            <h2>📅 {props.data[0]?.datetime}</h2>
            <h1>💬 {props.data[0]?.weather.description}</h1>
            <h5>🍃  {props.data[0]?.wind_spd}</h5>
        </div>
    </div>
    )
}

export default CurrentDay;