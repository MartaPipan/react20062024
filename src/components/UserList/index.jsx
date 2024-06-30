import React from 'react';
import PropTypes from "prop-types";


const UserList = ({ users }) => {
    if (!users.length) {
        return <p>empty users</p>;
    }

    const showUsers = (user) => <li key={user.login.uuid}>{user.name.first}</li>;

    return (
        <div>
            <ul>
                {users.map(user => (
                    showUsers(user)
                ))}
            </ul>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            login: PropTypes.shape({
                uuid: PropTypes.string.isRequired
            }),
            name: PropTypes.shape({
                first: PropTypes.string.isRequired
            })
        })
    ).isRequired
};

export default UserList;
