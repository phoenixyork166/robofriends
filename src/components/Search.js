import React from 'react';

export default function Search( {searchUser} ) {
    return (
        <div>
            <input
                type='search'
                placeholder='search user'
                style={{
                    width: "20%",
                    height: '50px',
                    overflowY: 'auto',
                }}
                onChange={searchUser}
            />
        </div>
    )
}