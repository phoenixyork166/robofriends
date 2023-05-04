import React from 'react';
import Avatar from "./Avatar";

const UserList = ( { users } ) => {
    
    return (
        <div>
            {
            users.map((user, i) => {
                return (
                    <Avatar 
                        id={users[i].id} 
                        username={users[i].name} 
                        email={users[i].email} 
                        age={users[i].age}
                        imgsrc={users[i].imgsrc}
                        key={users[i].id} 
                    />
                    ) 
                })
            }
        </div>
    );
}

export default UserList;