// Input.jsx
import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';

const Input = ({ name, type, placeholder }) => {
  return (
    <div className={styles.label}>
      <Field type={type} name={name} placeholder={placeholder} className={styles.inputField} />
      <ErrorMessage name={name} component="span" className={styles.invalid} />
    </div>
  );
}

export default Input;
