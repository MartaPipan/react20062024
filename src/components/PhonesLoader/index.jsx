import React, { Component } from "react";
import { getPhones } from '../../api';


class PhonesLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      isPending: false,
      error: null,
    };
  }
  componentDidMount() {
      this.state({ isPending: true });
      getPhones()
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ events: data });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isPending: false });
      });
  }

  render() {
    const { phones, isPending, error } = this.state;
    if (error) {
      return <div>Error!!!</div>;
    }
    if (isPending) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {phones.map(({ id, name, brand, price }) => (
          <li key={id}>
            {name} {brand} price:{price}
          </li>
        ))}
      </ul>
    );
  }
}

export default PhonesLoader;
