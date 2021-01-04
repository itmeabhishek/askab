import React from 'react';

//function Tweet(props){
    function Tweet({name,message}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>This is a random tweet{message}</p>
            <h3>Number of Likes</h3>
        </div>
    );
}
export default Tweet;