import React from 'react';

// func to receive props => destructuring
// making changes
const Card = ( {name, email, id} ) => {

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <h1>RobotFriends</h1> */}
            <img src={`https://robohash.org/${id}?200x200`} alt='robotsPhoto' />
            <div>
               {/* name */}
               <h2>{name}</h2>
               {/* email   */}
               <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;