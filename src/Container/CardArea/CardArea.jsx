import React from 'react';

// import for cardslist
import Cards from './Cards'
function CardArea(props)
{
    return(
        <div>
            <Cards weekdata={props.weekdata}/>
        </div>
    )
}

export default CardArea;