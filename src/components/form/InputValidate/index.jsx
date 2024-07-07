import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputValidate.module.scss";

const InputValidate = ({ name, type, placeholder }) => {
  return (
    <label className={styles.label}>
      <em>{name}</em>

      <Field name={name}>
        {({ field, form, meta }) => {
          console.log("field", field);
          console.log("form", form);
          console.log("meta", meta);
          const classNames = cx({
            [styles.invalid]: meta.touched && meta.error,
          });
          return (
            <input
              className={classNames}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={styles.invalid} />
    </label>
  );
};

export default InputValidate;

//  <Field name={name}>
//  {({ field, form, meta }) => {
//          console.log('field',field);=====props necessarios para trabalho de formik);
//          console.log('form', form);====FormikBag=informação para functionar(onChange,onCLICK,isValid+.....+ERROR)
//          console.log('meta', meta);===value.toched,error
//          return <input type={type} placeholder={placeholder}{...field} />
//        }}
//      </Field>


//utils/ValidationSchema
