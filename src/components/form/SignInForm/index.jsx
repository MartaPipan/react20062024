import React from "react";
import { Form, Formik } from "formik";
import { SCHEMA_USER_SIGN_IN } from "../../../utils/validationSchemas";
import styles from "./SignInForm.module.scss";
import InputValidation from "../InputValidate";
import { withLanguage } from "../../HOCs";
import CONSTANTS from '../../../constants';

const { TRANSLATIONS } = CONSTANTS;

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = ({ language }) => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_USER_SIGN_IN}
    >
      <Form className={styles.formContainer}>
        <InputValidation type="email" name="email" placeholder={TRANSLATIONS[language].email} />
        <InputValidation type="password" name="password" placeholder={TRANSLATIONS[language].password} />
        <button type="submit">{TRANSLATIONS[language].submit}</button>
      </Form>
    </Formik>
  );
};

export default withLanguage(SignInForm);


/*import React from "react";
import { Formik, Field, Form } from "formik";
import styles from './SignInForm.module.scss';
import { SCHEMA_USER_REGISTER } from '../../utils/validationSchemas';
import { LanguageContext } from '../../../contexts/index';

const SignInForm = () => {
  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.formContainer}>
            <Field
              type="text"
              name="login"
              placeholder="Login"
              className={styles.inputField}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.inputField}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
*/
