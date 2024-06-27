import React, { Component } from "react";
import { getUsers } from "../../api";
import Spinner from "../Spinner";

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResults: 5,
    };
  }
  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({ isPending: true });
    getUsers({ page: currentPage, currentResults, results: 5, nat: "gb" })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isPending: false });
      });
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }
  showUsers = (user) => <li key={user.login.uuid}>{user.name.first}</li>;
  prevPage = () => {
    this.setState((state, props) => {
      const { currentPage } = state;
      if (currentPage > 1) {
        return { currentPage: currentPage - 1 };
      }
    });
  };
  nextPage = () => {
    this.setState((state) => {
      const { currentPage } = state;
      return { currentPage: currentPage + 1 };
    });
  };
  handlerResults = ({ target:{value}})=>{this.setState({currentResults:Number(value)})}
  render() {
    const { users, isPending, error, currentPage, currentResults } = this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <h2>Users:</h2>
        <div>
          <button onClick={this.prevPage}>&lt;</button>
          <span> {currentPage} </span>
          <button onClick={this.nextPage}>&gt;</button>
          <div>
            <label>
              <input
                type="radio"
                value={5}
                checked={currentResults === 5}
                onChange={this.handlerResults}
              />5
            </label>
            <label>
              <input
                type="radio"
                value={10}
                checked={currentResults === 10}
                onChange={this.handlerResults}
              />10
            </label>
            <label>
              <input
                type="radio"
                value={15}
                checked={currentResults === 15}
                onChange={this.handlerResults}
              />15
            </label>
          </div>
        </div>
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
