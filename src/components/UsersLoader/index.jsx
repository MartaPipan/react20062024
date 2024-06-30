import React, { Component } from "react";
import { getUsers } from "../../api";
import Spinner from "../Spinner";
import Pagination from "./Pagination";



class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResults: 5,
      currentNat: 'gb'
    };
  }
  load = () => {
    const { currentPage, currentResults,currentNat } = this.state;
    this.setState({ isPending: true });
    getUsers({ page: currentPage, results: currentResults, nat: currentNat})
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
    if (prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults||
      prevState.currentNat !== this.state.currentNat)
    {
      this.load();
    }
  }
//створюємо допоміжні функції для оновлення стану, які передаємо у дочірні компоненти.
   setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  setCurrentResults = (results) => {
    this.setState({ currentResults: results });
  };

  setCurrentNat = (nat) => {
    this.setState({ currentNat: nat });
  };

  //showUsers = (user) => <li key={user.login.uuid}>{user.name.first}</li>;
  //prevPage = () => {
  //  this.setState((state, props) => {
  //    const { currentPage } = state;
  //    if (currentPage > 1) {
  //      return { currentPage: currentPage - 1 };
  //    }
  // });
  // };
  //nextPage = () => {
  //  this.setState((state) => {
  //    const { currentPage } = state;
  //    return { currentPage: currentPage + 1 };
  //  });
  //};
  //handlerResults = ({ target: { value } }) => { this.setState({ currentResults: Number(value) }) }
  //handlerNat = ({ target: { value } }) => { this.setState({ currentNat: (value) }) }
  
 
  render() {
    const { users, isPending, error, currentPage, currentResults, currentNat} = this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <h2>Users:</h2>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={this.setCurrentPage}
        />

          <select name="nat"value={currentNat} onChange={this.handlerNat}>
            <option value="us">us</option>
            <option value="dk">dk</option>
            <option value="fr">fr</option>
            <option value="gb">gb</option>
          </select>
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
        </Pagi>
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
