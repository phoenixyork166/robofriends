import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) => {
    // Want to return components in <Card />
    // if (true) {
    //     throw new Error('Nooooo!');
    // }
    return (
        <div>
            {
            robots.map((user, i) => {
                return (
                    <Card 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        key={robots[i].id} 
                    />
                    ) 
                })
            }
        </div>
    );
}

export default CardList