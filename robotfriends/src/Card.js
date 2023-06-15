import React from 'react'


const Card = () =>{
    return (
        <div className= "bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src="https://robohash.org/arcee?200x200" alt="image of random robot"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card