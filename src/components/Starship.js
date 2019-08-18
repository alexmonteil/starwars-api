import React from 'react';
import starshiplogo from '../images/millennium-falcon.png';


const Starship = ({name, model, manufacturer, cost_in_credits, length}) => {
    return (
        <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img class='icon' alt='Starship' src={starshiplogo} />
            <div>
                <h2>{name}</h2>
                <p>Model: {model}</p>
                <p>Manufacturer: {manufacturer}</p>
                <p>Cost in credit: {cost_in_credits}</p>
                <p>Length: {length}</p>
            </div>
        </div>
    );
}

export default Starship;