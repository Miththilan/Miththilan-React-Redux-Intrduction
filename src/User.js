import React from 'react';

const User=(props)=>{
    console.warn(props.data.name)
    return(
        <div>
            <h1>User Component</h1>
            <h2>{props.data.name}</h2>
        </div>
    )
}

export default User;