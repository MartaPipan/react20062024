import React, { Component } from "react";
import PropTypes from "prop-types";

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
    };
  }
    componentDidMount() {
        this.setState({ isPending: true });
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
        .finally(() => {
            this.setState({ isPending: false });
      });
  }
  showUsers = (user) => <li key={user.login.uuid}>{user.name.first}</li>;
  render() {
    const { users, isPending, error } = this.state;
    if (isPending) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <h2>Users:</h2>
        {users.length ? (
          <ul>{users.map(this.showUsers)}</ul>
        ) : (
          <p>empty users</p>
        )}
      </section>
    );
  }
}

UserLoader.propTypes = {};

export default UserLoader;
