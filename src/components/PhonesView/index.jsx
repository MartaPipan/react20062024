import React from 'react';

const PhonesView = ({ state }) => {
    const { items, isPending, error } = state;
    if (error) {
      return <p>Error!!!</p>;
    }
    if (isPending) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {items.map(({ id, name,brand,price}) => (
          <li key={id}>{name} brand:{brand} price:{price}$</li>
        ))}
      </ul>
    );
  }

export default PhonesView;
  