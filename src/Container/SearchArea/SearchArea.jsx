import React from 'react';

function SearchArea(props){
    return(
        <div>
            <form className="myForm">
                <h4>Search weather on your city</h4>
                        <input type="text" placeholder="City" ></input>
                        <button >Search</button>
                    </form>
        </div>
    )
}

export default SearchArea;