import React from 'react';
import './Cards.css'

//import for Card
import Card from './Card/Card';

function Cards(props){
    return(
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default Cards;