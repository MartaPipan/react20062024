import React from "react";
import { withUser } from "../../HOCs";

const UsersCard = ({ user: { id=0, name='Bred', email='bred@gmail.com', password='qwerty', ava="/images/noname.png" } }) => {

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


export default withUser(UsersCard);
