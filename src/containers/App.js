import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SearchBox from '../components/SearchBox';
import PeopleList from '../components/PeopleList';
import PlanetsList from '../components/PlanetsList';
import StarshipsList from '../components/StarshipsList';
import './App.css';
import Scroll from '../components/Scroll';

const urls = [
    'https://swapi.co/api/people/',
    'https://swapi.co/api/planets/',
    'https://swapi.co/api/starships/'
];

class App extends Component {
    constructor() {
        super()
        this.state = {
            view: 'people',
            searchfield: '',
            people: [],
            planets: [],
            starships: []
        }
    }

    async componentDidMount() {
        try {
            const [people, planets, starships] = await Promise.all(urls.map(async function(url) {
                const response = await fetch(url);
                return response.json();
            }));
            this.setState({people: people.results});
            this.setState({planets: planets.results});
            this.setState({starships: starships.results});
        } catch (err) {
            console.log('Something went wrong', err);
        }
    }

    onClickChange = (event) => {
        this.setState({view: event.target.value});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {

        const { view, searchfield, people, planets, starships } = this.state;
        const filteredpeople = people.filter(people => {
            return people.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        const filteredplanets = planets.filter(planet => {
            return planet.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        const filteredstarships = starships.filter(starship => {
            return starship.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if (!view.length) {
            return (
                <div>
                    <h1 className='tc'>Loading</h1>
                    <Navigation Clickchange={this.onClickChange} />
                </div>
            );
        } else {
            switch(view) {
                case 'people': 
                    return (
                        <div className='tc'>
                            <h1 className='f1'>StarWars</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Navigation Clickchange={this.onClickChange} />
                            <Scroll>
                                <PeopleList data={filteredpeople} />
                            </Scroll>
                        </div>
                    );
                    
                
                case 'planets':
                    return (
                        <div className='tc'>
                            <h1 className='f1'>StarWars</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Navigation Clickchange={this.onClickChange} />
                            <Scroll>
                                <PlanetsList data={filteredplanets} />
                            </Scroll>
                        </div>
                    );
                    
                
                case 'starships':
                    return (
                        <div className='tc'>
                            <h1 className='f1'>StarWars</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <Navigation Clickchange={this.onClickChange} />
                            <Scroll>
                                <StarshipsList data={filteredstarships} />
                            </Scroll>
                        </div>
                    );
                    

                default: 
                    return (
                        <div className='tc'>
                            <h1 className='f1'>StarWars</h1>
                            <Navigation Clickchange={this.onClickChange} />
                        </div>
                    );
            }
        }
    }
}

export default App;

/* Some of my debugging notes */

/*const getData = async function() {
    try {
        const [people, planets, starships] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log(Array.isArray(people));
        console.log(Array.isArray(planets));
        console.log(Array.isArray(starships));
        console.log(typeof people);
        console.log(typeof planets);
        console.log(typeof starships);
        console.log(people.results);
        console.log(planets.results);
        console.log(starships.results);
    } catch (err) {
        console.log('Something went wrong', err);
    }
}*/