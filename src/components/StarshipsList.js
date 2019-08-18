import React from 'react';
import Starship from './Starship';

const StarshipsList = ({ data }) => {
    return (
        <div>
            {
                data.map((user, i) => {
                    return (
                        <Starship
                            key={i} 
                            name={data[i].name} 
                            model={data[i].model}
                            manufacturer={data[i].manufacturer}
                            cost_in_credits={data[i].cost_in_credits}
                            length={data[i].length}
                            />
                    );
                })
            }
        </div>
    );
}

export default StarshipsList;