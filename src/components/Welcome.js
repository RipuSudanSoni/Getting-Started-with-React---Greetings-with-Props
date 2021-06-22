// write code for Welcome component here
import React from "react";

const Welcome=(props)=>{
    let str = "Welcome to Newton School."
    return(
        <>
            <h1>Hey ! {props.name}</h1>
            <h2>{str}</h2>
        </> 
    );
};
 export default Welcome;
