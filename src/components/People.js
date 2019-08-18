import React from 'react';
import peoplelogo from '../images/darth-vader.png';


const People = ({name, height, mass, hair_color, skin_color}) => {
    return (
        <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img class='icon' alt='People' src={peoplelogo} />
            <div>
                <h2>{name}</h2>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair color: {hair_color}</p>
                <p>Skin color: {skin_color}</p>
            </div>
        </div>
    );
}

export default People;