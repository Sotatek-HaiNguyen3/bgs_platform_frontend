import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import * as _ from "lodash";

import { registerUsernameEffect } from "store/auth/effects";

import s from "./style.module.scss";
import { RegisterSchema } from "utils/validator/register.schema";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import AppSelectFormik from "components/common/AppSelectFormik";

const ROLE_OPTIONS = [
  {
    label: "Artist",
    value: 0,
  },
  {
    label: "Developer",
    value: 1,
  },
  {
    label: "Collector",
    value: 2,
  },
];

const Register = () => {
  let navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          role: "",
        }}
        validationSchema={RegisterSchema}
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
            <h1>Sign up</h1>
            <Input
              className={s.field}
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              icon={<HiOutlineMail size={24} color="#BDBDBD" />}
              errors={errors}
            />

            <Input
              className={s.field}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              icon={<AiOutlineEye size={24} color="#BDBDBD" />}
              errors={errors}
            />

            <div className={s.wrap}>
              <Input
                className={s.field}
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                errors={errors}
              />

              <Input
                className={s.field}
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                errors={errors}
              />
            </div>

            <AppSelectFormik
              name="role"
              placeholder="-choose a title-"
              options={ROLE_OPTIONS}
              hideLabel
              // defaultValue={}
              errors={errors}
            />

            <ReCAPTCHA
              className={s.captcha}
              sitekey={process.env.REACT_APP_RECAPTCHA}
              onChange={onChange}
              style={{ justifyContent: "center", display: "flex" }}
            />

            <Button
              type="submit"
              title="Sign up"
              disabled={!_.isEmpty(errors)}
              className="btnFull btnPrimary"
            />

            <div className={s.bottom}>
              <span>Already have an account?</span>&nbsp;
              <Link to="/login">Sign in</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
