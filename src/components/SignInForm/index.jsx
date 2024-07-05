import React from "react";
import { SCHEMA_USER } from '../../utils/validationSchemas';

const SignInForm = () => {
  const user = {
    firstName: 'Alan',
    lastName: 'Alan',
    email: 'alan@gmail.com',
    password: '123',
    age: 32,
    isMale: true,
  }
  console.log(
    SCHEMA_USER.validate(user).then((info) => {
      console.log(info);
    }).catch((error) => {
      console.log(error.message);
    })
  );
  return <></>
};
export default SignInForm;
