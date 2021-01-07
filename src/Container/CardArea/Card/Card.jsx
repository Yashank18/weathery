import React from 'react';

// Import for images
import sunny from '../../../Assets/sunny.gif';
import clouds from '../../../Assets/cloud.gif';
import heavyRain from '../../../Assets/rain.gif';
import thunder from '../../../Assets/thunder.gif';
import snow from '../../../Assets/snow.gif';
import mist from '../../../Assets/mist.gif';
import sunWithClouds from '../../../Assets/sun_withClouds.gif'

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
        <h6>{props.data?.datetime!=null?props.data?.datetime : "--/--"}</h6>
        <img alt="temp" height="60px" src={icon}/>
        <h4>{props.data?.min_temp!=null?props.data?.min_temp:"--/--"}</h4>
        <h5>{props.data?.min_temp!=null?props.data?.weather.description:""}</h5>
    </div>
    )
}

export default Card;