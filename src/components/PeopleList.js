import React from 'react';
import People from './People';

const PeopleList = ({ data }) => {
    return (
        <div>
            {
                data.map((user, i) => {
                    return (
                        <People
                            key={i} 
                            name={data[i].name} 
                            height={data[i].height}
                            mass={data[i].mass}
                            hair_color={data[i].hair_color}
                            skin_color={data[i].skin_color}
                            />
                    );
                })
            }
        </div>
    );
}

export default PeopleList;