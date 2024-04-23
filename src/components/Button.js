import './btn.css'
import React from 'react';


function Button(){
    
    return (
        <button className="btn" onClick={() => alert('You Clicked Me!')}>Click Me</button>
    )
}

export default Button