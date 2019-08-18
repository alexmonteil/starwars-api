import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='searchbox pa3 ba b--gold bg-lightest-blue' 
            type='search' 
            placeholder='search' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;