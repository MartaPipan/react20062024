import React, { Component } from "react";
import { getEvents } from '../../api';

class EventsLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isPending: false,
      error: null,
    };
  }
  componentDidMount() {
      this.state({ isPending: true });
      getEvents()
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
    const { events, isPending, error } = this.state;
    if (error) {
      return <div>Error!!!</div>;
    }
    if (isPending) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {events.map(({ id, title, date }) => (
          <li key={id}>
            {title} date:{}
          </li>
        ))}
      </ul>
    );
  }
}

export default EventsLoader;
