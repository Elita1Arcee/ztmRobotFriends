import React, {Component} from 'react';
import Robotlist from "../components/Robotlist";
import Searchbox from "../components/Searchbox";
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
     super()
     this.state = {
     robots: [],
     searchfield: ''
     }
 }

 componentDidMount(){
    console.log('didMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {return response.json();})
    .then(users =>{
        this.setState({robots: users})
    })
 }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }


   render() {
    const filteredRoboFriends = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
     return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            
                <Searchbox searchChange={this.onSearchChange}/>

            <Scroll>
                <ErrorBoundary>
                    <Robotlist robots = {filteredRoboFriends}/>
                </ErrorBoundary>
            </Scroll>
            
        </div>
        
    )
   }
 }


export default App;