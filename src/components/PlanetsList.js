import React from 'react';
import Planet from './Planet';

const PlanetsList = ({ data }) => {
    return (
        <div>
            {
                data.map((user, i) => {
                    return (
                        <Planet
                            key={i} 
                            name={data[i].name} 
                            rotation_period={data[i].rotation_period}
                            orbital_period={data[i].orbital_period}
                            diameter={data[i].diameter}
                            climate={data[i].climate}
                            />
                    );
                })
            }
        </div>
    );
}

export default PlanetsList;