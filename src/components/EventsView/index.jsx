import React from "react";

const EventsView = ({ state }) => {
    const { items, isPending, error } = state;
    if (error) {
      return <p>Error!!!</p>;
    }
    if (isPending) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {items.map(({ id, title, date }) => (
          <li key={id}>{title} date:{date}</li>
        ))}
      </ul>
    );
  };


export default EventsView;
