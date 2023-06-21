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
   render() {
     return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <Searchbox/>
            <Robotlist robots = {robots}/>
        </div>
        
    )
   }
 }


export default App;