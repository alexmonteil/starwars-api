import React from 'react';
import planetlogo from '../images/death-star.png';


const Planet = ({name, rotation_period, orbital_period, diameter, climate}) => {
    return (
        <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img class='icon' alt='Planet' src={planetlogo} />
            <div>
                <h2>{name}</h2>
                <p>Rotation period: {rotation_period}</p>
                <p>Orbital period: {orbital_period}</p>
                <p>Diameter: {diameter}</p>
                <p>Climate: {climate}</p>
            </div>
        </div>
    );
}

export default Planet;