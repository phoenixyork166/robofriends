import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots'; 
// use API for robots
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// Smart components has 'class' syntax
class App extends Component {
    constructor() {
        super() // Need to call constructor() of Component => super() to extend class
        
        // Declare state here
        this.state = {
            // STATE >> props
            // robots: robots,
            robots: [],
            searchfield: '',
            }
            // console.log('1 in constructor() ');
        }

    componentDidMount() {
        // console.log('2 in componentDidMount() ');
        // this.setState( { robots: robots} );
        
        // Using API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then(users => {
            this.setState( {robots: users} );
            console.log(users);
        })
    }

    // Everytime SearchBox changes, re-render 
    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value} )
        // Logging SearchBox <input type='search'> text onChange event
        // console.log(event.target.value);
        // this.state.robots = array
        
    }

    onClear = () => {
        this.setState( {...this.state, searchfield: ''} )
    }

    render() {
        // Using destructuring for 
        // this.state.robots && this.state.searchfield
        const { robots, searchfield } = this.state;
        // console.log('3 in render()');
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes( searchfield.toLowerCase() )
        })

        // Ternary operator
        // if (robots.length) => robots.length > 0
        // !robots.length => robots.length = 0
        return !robots.length ? 
        <h1>Loading</h1> : // if !robots.length 

        // if (robots.length === 0) {
        //     return <h1>Loading</h1>
        // } else {
            // return 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox to={'search robots'} searchChange={this.onSearchChange} clearSearch={this.onClear}/>
                    <Scroll>
                        {/* Render ErrorBoundary if { children } hasError */}
                        <ErrorBoundary>
                            {/* use this.state in CardList */}
                            <CardList robots={filteredRobots} /> 
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>  
                );  
        // }
        // Let's see what we get from filteredRobots
        // console.log(filteredRobots)
    }

}

export default App