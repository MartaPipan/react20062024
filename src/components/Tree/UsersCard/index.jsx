import React from "react";
import { UserContext } from '../../../contexts/index';

const UsersCard = () => {
  const renderUser = ({ id, name, email, password, ava }) => {
      return (
    <article>
      <h3>
        ({id}) {name}
      </h3>
      <h4>
        {email} ({password})
      </h4>
      <img src={ava} alt="ava" width={150} />
    </article>
  );
};
  return (
    <UserContext.Consumer>
      {renderUser}
    </UserContext.Consumer>
  )
}


export default UsersCard;