import React from 'react'

//Receiving props and destructuring props
const Card = ({ name, email, id, username}) =>{
    
    return (
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${username}?200x200`} alt="image of random robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card