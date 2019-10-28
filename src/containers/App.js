import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import SearchBox from '../components/SearchBox';
import PeopleList from '../components/PeopleList';
import PlanetsList from '../components/PlanetsList';
import StarshipsList from '../components/StarshipsList';
import './App.css';
import Scroll from '../components/Scroll';

const urls = [
    'https://swapi.co/api/people/?page=',
    'https://swapi.co/api/planets/?page=',
    'https://swapi.co/api/starships/?page='
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
        async function allData(url) {
            let bool = true;
            let i = 1;
            let finalArray = [];
            while (bool) {
                const response = await fetch(url+i.toString());
                const data = await response.json();
                if (data.next != null) {
                    finalArray = finalArray.concat(data.results);
                    i++;
                } else {
                    finalArray = finalArray.concat(data.results);
                    bool = false;
                }
            }
            return finalArray;
        }

        const [people, planets, starships] = await Promise.all(urls.map(url => allData(url)));
    
        return this.setState({
            people: people,
            planets: planets,
            starships: starships
        });
    }

    onClickChange = event => {
        this.setState({view: event.target.value});
    }

    onSearchChange = event => {
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
        console.log(people);
        console.log(planets);
        console.log(starships);
    } catch (err) {
        console.log('Something went wrong', err);
    }
}*/

/*
const getData2 = url => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        const count = data.count;
        let finalResult = [];
        for (let i = 1; i <= count; i++) {
            fetch(url+i.toString())
            .then(response => response.json())
            .then(item => finalResult.push(item));
        }
        console.log(finalResult);
    });
}

const [people, planets, starships] = await Promise.all(urls.map(getData3(url)));
console.log(people);
console.log(planets);
console.log(starships);

async function getData3(url) {
    let firstResponse = await fetch(url);
    let arrayOfData = await firstResponse.json();
    let count = await arrayOfData.count;
    let arrayOfItems = [];
    for (let i = 1; i <= count; i++) {
        let itemPromise = await fetch(url+i.toString());
        let item = await itemPromise.json();
        arrayOfItems.push(item);
    }
    return arrayOfItems;
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

*/


/*async function getAllData(url) {
    const request = await fetch(url);
    const response = await request.json();
    const count = response.count;
    const arrayOfUrls = [];
    for (let i = 1; i <= count; i++) {
        arrayOfUrls.push(url+i.toString());
    }
    const arrayOfPromises = arrayOfUrls.map(url => fetch(url));
    const arrayOfData = [];
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        arrayOfData.push(data);
    }
    arrayOfData.forEach(item => console.log(item));
}*/

/*const getData5 = url => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data.next.results));
}

'https://swapi.co/api/people/?page='

async function allData(url) {
    let bool = true;
    let i = 1;
    let finalArray = [];
    while (bool) {
        const response = await fetch(url+i.toString());
        const data = await response.json();
        if (data.next != null) {
            finalArray = finalArray.concat(data.results);
            i++;
        } else {
            finalArray = finalArray.concat(data.results);
            bool = false;
        }
    }
    return finalArray;
}*/