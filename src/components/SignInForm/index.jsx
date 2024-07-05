import React from "react";
import * as Yup from 'yup';


const SCHEMA_USER = Yup.object({
  firstName: Yup.string()
    .trim()
    .required(campo de preenchimento obrigatorio)
    .min(3,'no minimo 3 symbolos')
    .max(20,'no maximo 20 symbolos')
    .matches(/^[a-z]{3-20}$/,'apenas letras'),
  lastName: Yup.string()
    .trim()
    .required()
    .min(3)
    .max(20)
    .matches(/^[a-z]{3-20}$/),
  email: Yup.string()
    .trim()
    .email()
    .required(preenchimento obrigatorio com um endereço de email valido),
  password: Yup.string().trim().matches(/[a-z0-9]{8-16}/),
  age: Yup.number().min(18).max(100).integer().required(),
  isMale: Yup.boolean(),
})

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
