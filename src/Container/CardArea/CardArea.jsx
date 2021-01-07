import React from 'react';

// import for cardslist
import Cards from './Cards'

import CurrentDay from './CurrentDay';
function CardArea(props)
{
    return(
        <div>
            <div>
                <CurrentDay data={props.weekdata} />
            </div>
            <Cards weekdata={props.weekdata}/>
        </div>
    )
}

export default CardArea;