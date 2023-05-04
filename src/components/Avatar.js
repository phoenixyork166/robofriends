import React from 'react';

export default function Avatar( { id, username, imgsrc, age, email } ) {

    return (
        <div>
            <h2><b>Name: </b>{username} id: {id}</h2>
            <br/>
            <img
                src={imgsrc}
                alt='user pro pic'
                style={{
                    width: '25%',
                    height: '25%',
                }}
            />
            <p><b>age: </b>{age}</p>
            <p><b>email: </b>{email}</p>
        </div>
    );
}