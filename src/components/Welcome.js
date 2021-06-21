// write code for Welcome component here
import React from "react";

const Welcome=({name})=>{
    let sayHi=`Hey ${name}!`;
    let Message=`Welcome to Newton School.`;
    return(
        <div>
            <h1>{sayHi}</h1>
            <h2>{Message}</h2>
        </div>
        
        
    );
};
 export default welcome;
