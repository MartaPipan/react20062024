import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SCHEMA_USER_SIGN_IN } from "../../utils/validationSchemas"; 

import styles from "./SignInForm.module.scss";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
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
      {(formikProps) => {
        // console.log(formikProps); //
        return (
          <Form className={styles.formContainer}>
            <label>
              <em>FORMA:</em>
              <Field
                type="email"
                name="email"
                placeholder="email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.invalid}
              />
            </label>

            <label>
              <Field
                type="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                component="span"
                className={styles.invalid}
              />
            </label>

            <input type="submit" value="sign in" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

/*import React from "react";
import { Formik, Field, Form } from "formik";
import styles from './SignInForm.module.scss';
import { SCHEMA_USER_REGISTER } from '../../utils/validationSchemas';

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
