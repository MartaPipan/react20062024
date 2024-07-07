import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';

const Input = ({ name, type, placeholder }) => {
  return (
      <label className={styles.label}>
          <em>{name}</em>
      <Field type={type} name={name} placeholder={placeholder} className={styles.inputField} />
      <ErrorMessage name={name} component="span" className={styles.invalid} />
    </label>
  );
}

export default Input;
