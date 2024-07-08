import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputValidate.module.scss";

const CustomInput = ({ field, form: { touched, errors }, ...props }) => {

  const classNames = cx({
    [styles.invalid]: errors[field.name] && touched[field.name],
  });
  return <input {...props} {...field} className={classNames} />;
};
const InputValidate = ({ name, ...props }) => {
  return (
    <label className={styles.label}>
      <em>{name}</em>

      <Field
        name={name}
        component={CustomInput}
        {...props}
      ></Field>
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


//
//import React from "react";
//import { ErrorMessage, Field } from "formik";
//import cx from "classnames";
//import styles from "./InputValidate.module.scss";

//const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
//  const classNames = cx({
//    [styles.invalid]: errors[field.name] && touched[field.name],
//  });
//  return <input className={classNames} {...field} {...props} />;
//};

//const InputValidate = ({ name, type, placeholder, ...props }) => {
//  return (
 //   <label className={styles.label}>
 //     <em>{name}</em>
  //    <Field
//        name={name}
//        type={type}
//        placeholder={placeholder}
 //       component={CustomInput}
//        {...props}
//      />
//      <ErrorMessage name={name} component="span" className={styles.invalid} />
//    </label>
//  );
//  };

//export default InputValidate;

