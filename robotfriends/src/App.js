import React, {Component} from 'react';
import Robotlist from "./Robotlist";
import {robots} from './robots';
import Searchbox from "./Searchbox";

class App extends Component {
    constructor() {
     super()
     this.state = {
     robots: robots,
     searchfield: ''
     }
 }

    onSearchChange = (event) => {
        const filteredRoboFriends = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRoboFriends);
    }


   render() {
     return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Robotlist robots = {this.state.robots}/>
        </div>
        
    )
   }
 }


export default App;