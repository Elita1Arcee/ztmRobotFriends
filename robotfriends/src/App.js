import React from "react";
import Robotlist from "./Robotlist";
import {robots} from './robots';
import Searchbox from "./Searchbox";

const App = () =>{
    return (
        <div>
            <h1 class='tc'>Robot Friends</h1>
            <Searchbox/>
            <Robotlist robots = {robots}/>
            console.log('App app app')
        </div>
        
    )
}

export default App;