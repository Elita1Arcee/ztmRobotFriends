import React, {Component} from 'react';

import Robotlist from "./Robotlist";
import {robots} from './robots';
import Searchbox from "./Searchbox";
import './App.css';

class App extends Component {
    constructor() {
     super()
     this.state = {
     robots: robots,
     searchfield: ''
     }
 }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }


   render() {
    const filteredRoboFriends = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
     return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Robotlist robots = {filteredRoboFriends}/>
        </div>
        
    )
   }
 }


export default App;