import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import s from "./style.module.scss";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import GoogleLogin from "./GoogleLogin";
import { LoginSchema } from "utils/validator/login.schema";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAction } from "store/auth/actions";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.auth);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) =>
        dispatch(authLoginAction(values))
      }
      validationSchema={LoginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.title}>Login</h1>
          <GoogleLogin />
          <Input
            className=""
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
            className=""
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
            disabled={isSubmitting || login.isLoading}
            title="Login"
            className="btnFull btnPrimary"
          />
          <div className={s.bottom}>
            <Link to="/forgot">Forgot password?</Link>
            <p>
              <span>Don’t have an account yet? </span>{" "}
              <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Login;
