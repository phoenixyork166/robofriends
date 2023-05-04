import React from 'react';

const SearchBox = ( { searchChange, clearSearch, to } ) => {
    return (
        <div 
            classname='pa2'
        >
            <input 
                className='pa2 ba b--green bg-lightest-blue grow'
                style={{
                    width: '30%',
                    height: '50px',
                }}
                type='search' 
                placeholder={to}
                onChange={searchChange}
            />
            <button 
                onClick={clearSearch}
                style={{
                    marginLeft: '10px',
                    height: '40px',
                }}
            >
                Clear Search
            </button>
        </div>   
    )
}

export default SearchBox