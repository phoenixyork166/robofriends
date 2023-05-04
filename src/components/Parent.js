import React, { useState } from 'react';
import Search from './Search';
import UserList from './UserList';
import { allUsers } from './Users';
import LoadingPage from './LoadingPage'

export default function Parent() {

    const initialDetails = {
        users: [],
        search: '',
    }
    
    const [details, setDetails] = useState(initialDetails)

    // onClick to load page
    const LoadPage = () => {
        setDetails( {...details, users: allUsers} )
        console.log('Loaded allUsers \n', details.users)
    }
    
    let pageLoading = details.users.length === 0;

    const filteredUser = allUsers.filter(user => { 
        if (user.name.toLowerCase().includes(details.search.toLowerCase()) ) {
            return user
        }
    })

    console.log('Log filteredUser: \n', filteredUser)

    const onSearch = (event) => {
        setDetails( {...details, search: event.target.value} )
        console.log('search display: \n', {...details, search: event.target.value});
    }

    // {console.log('allUsers: \n', allUsers)}
    // const filteredUsers = users.
    return pageLoading?
        <LoadingPage onLoad={LoadPage} /> :
        (
            <div>
                <Search searchUser={onSearch} />
                <UserList users={filteredUser}/>
            </div>
            
        )
}