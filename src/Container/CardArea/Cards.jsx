import React from 'react';
import './Cards.css'

//import for Card
import Card from './Card/Card';

function Cards(props){
    return(
        <div className="cards">
            <Card data={props.weekdata[0]}/>
            <Card data={props.weekdata[1]}/>
            <Card data={props.weekdata[2]}/>
            <Card data={props.weekdata[3]}/>
            <Card data={props.weekdata[4]}/>
        </div>
    )
}
export default Cards;