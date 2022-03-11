import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { registerUsernameEffect } from "store/auth/effects";

import s from "./style.module.scss";
import Button from "components/common/Button";

const Register = () => {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        registerUsernameEffect(values).then((res) => {
          res?.data?.id && navigate("/login");
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            className={s.field}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            className={s.field}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <Button
            type="submit"
            title="Submit"
            disabled={isSubmitting}
            className="btn-full btn-secondary"
          />
        </form>
      )}
    </Formik>
  );
};

export default Register;
