import React from 'react';
import PropTypes from "prop-types";

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

 UserList.propTypes = {
     users: PropTypes.oneOf(this.showUsers).isRequired,
};

export default UserList;
