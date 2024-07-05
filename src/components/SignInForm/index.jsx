import React from "react";
import * as Yup from 'yup';


const SHEMA USER = Yup.object({
  firstName: Yup.string().trim().required().min(3).max(20),
  lastName: Yup.string().trim().required().min(3).max(20),
  email: Yup.string().trim().email().required(),
  password: Yup.string().trim().matches(/[a-z0-9]{8-16}/),
  age: Yup.number().min(18).max(100).integer().required(),
  isMale: Yup.boolean(),
})


const SignInForm = () => {
  const user = {
    firstName: 'Alan',
  lastName:'Alan',
  email: 'alan@gmail.com',
  password: '123',
  age: 32,
  isMale: true,
  }
  console.log(SCHEMA_USER.isValidSync(user));
  return <></>
};
export default SignInForm;
