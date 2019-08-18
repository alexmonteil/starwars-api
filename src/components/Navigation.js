import React from 'react';

const Navigation = ({ Clickchange }) => {
    return (
        <div className='tc'>
            <input
                className='navigation pa2 ma2 bg-navy ba b--gold'
                type='submit'
                id='people'
                name='people'
                value='people'
                onClick={Clickchange}
            />

            <input
                className='navigation pa2 ma2 bg-navy ba b--gold'
                type='submit'
                id='planets'
                name='planets'
                value='planets'
                onClick={Clickchange}
            />

            <input
                className='navigation pa2 ma2 bg-navy ba b--gold'
                type='submit'
                id='starships'
                name='starships'
                value='starships'
                onClick={Clickchange}
            />
        </div>
    );
}

export default Navigation;