import React from 'react';

const UserList = ({ users }) => {
    if (!users.length) {
        return <p>empty users</p>;
    }

        
    return (
        <div>
            {users.length ? (
                <ul>{users.map(this.showUsers)}</ul>
            ) : (
                <p>empty users</p>
            )}
        </div>
    );
};


export default UserList;
