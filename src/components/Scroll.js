import React from 'react';

// props
// state
// children
const Scroll = ( { children } ) => {
    return (
        <div 
        style={{
            overflowY: 'scroll', 
            border: '1px solid black',
            height: '1000px',
        }}
        >
            <b>Testing Children</b>{ children }
        </div>
    )
}

export default Scroll;