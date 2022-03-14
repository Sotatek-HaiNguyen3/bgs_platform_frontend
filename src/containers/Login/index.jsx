import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { loginUsernameEffect } from "store/auth/effects";

import s from "./style.module.scss";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        loginUsernameEffect(values).then((res) => {
          console.log(res);
          res?.token && navigate("/");
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
          <Input
            className=""
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            icon={<HiOutlineMail size={24} color="#BDBDBD" />}
            errors={errors}
          />
          <Input
            className="error"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            icon={<AiOutlineEye size={24} color="#BDBDBD" />}
            errors={errors}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            title="Submit"
            className="btnFull btnPrimary"
          />
        </form>
      )}
    </Formik>
  );
};

export default Login;
