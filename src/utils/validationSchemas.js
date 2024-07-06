import * as Yup from 'yup';


export const NAME = Yup.string()
  .trim()
  .required('Campo de preenchimento obrigatório')
  .min(3, 'No mínimo 3 símbolos')
  .max(20, 'No máximo 20 símbolos')
  .matches(/^[a-zA-Z]{3,20}$/, 'Apenas letras')


export const LAST_NAME = Yup.string()
  .trim()
  .required('Campo de preenchimento obrigatório')
  .min(3, 'No mínimo 3 símbolos')
  .max(20, 'No máximo 20 símbolos')
  .matches(/^[a-zA-Z]{3,20}$/, 'Apenas letras')


export const AGE = Yup.number()
  .min(18, 'Idade mínima é 18 anos')
  .max(120, 'Idade máxima é 120 anos')
  .integer('Idade deve ser um número inteiro')
  .required('Campo de preenchimento obrigatório')


export const IS_MALE = Yup.boolean()

export const EMAIL = Yup.string()
  .trim()
  .matches(/^[a-zA-Z0-9]{8,16}$/, 'Senha deve ter entre 8 e 16 caracteres e conter apenas letras e números')
  .required('Campo de preenchimento obrigatório')


export const PASSWORD = Yup.string()
  .trim()
  .matches(/^[a-zA-Z0-9]{8,16}$/, 'Senha deve ter entre 8 e 16 caracteres e conter apenas letras e números')
  .required('Campo de preenchimento obrigatório')


export const SCHEMA_USER_REGISTER = Yup.object({
  firstName: NAME,
  lastName: LAST_NAME,
  age: AGE,
  isMale: IS_MALE,
});


export const SCHEMA_USER_SIGN_IN = Yup.object({
  email: EMAIL,
  password: PASSWORD
});


export const SCHEMA_USER_FEEDBACK = Yup.object({
  email: EMAIL,

});
