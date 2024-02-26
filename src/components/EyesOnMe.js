// Code EyesOnMe Component Here

import React from 'react';


function focus (e){
    console.log ("Good!")
}

function blur(e){
    console.log("Hey! Eyes on me!")
}

function EyesOnMe (){
    return (
        <div>

        <button onFocus={focus} onBlur={blur} >Eyes on me</button>
            
        </div>
    )
}



export default EyesOnMe;