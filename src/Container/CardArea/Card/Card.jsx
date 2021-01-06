import React from 'react';

// Import for images
import sunny from '../../../Assets/sun.png';
import clouds from '../../../Assets/clouds.png';
import heavyRain from '../../../Assets/heavy_rain.png';
import thunder from '../../../Assets/thunder.png';
import snow from '../../../Assets/snow.png';
import mist from '../../../Assets/mist.png';
import sunWithClouds from '../../../Assets/sun_withClouds.png'

// import css
import './Card.css';

function Card(props){
    let icon;
    let icon_code=props.data?.weather.code;

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
    return (
    <div className="card">
        <h5>{props.data?.datetime!=null?props.data?.datetime : "--/--"}</h5>
        <img alt="temp" height="70px" src={icon}/>
        <h3>{props.data?.max_temp!=null?props.data?.max_temp:"--/--"}</h3>
    </div>
    )
}

export default Card;