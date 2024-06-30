import React, { Component } from "react";
import { getUsers } from "../../api";
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import UserList from "../UserList";
import UserFilters from "../UserFilters";
import NationalitySelector from "../NationalitySelector";
import styles from "./UsersLoader.module.scss";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResults: 5,
      currentNat: "gb",
    };
  }

  load = () => {
    const { currentPage, currentResults, currentNat } = this.state;
    this.setState({ isPending: true });
    getUsers({ page: currentPage, results: currentResults, nat: currentNat })
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
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults ||
      prevState.currentNat !== this.state.currentNat
    ) {
      this.load();
    }
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  setCurrentResults = (results) => {
    this.setState({ currentResults: results });
  };

  setCurrentNat = (nat) => {
    this.setState({ currentNat: nat });
  };

  render() {
    const { users, isPending, error, currentPage, currentResults, currentNat } =
      this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <div className={styles["error-message"]}>ERROR!!!</div>;
    }
    return (
      <section className={styles["user-loader-section"]}>
        <h2>Users:</h2>
        <UserFilters
          currentResults={currentResults}
          setCurrentResults={this.setCurrentResults}
        />
        <UserList users={users} />
        <NationalitySelector
          currentNat={currentNat}
          setCurrentNat={this.setCurrentNat} />
        
        <Pagination
          currentPage={currentPage}
          setCurrentPage={this.setCurrentPage}
        />
      </section>
    );
  }
}

export default UsersLoader;
