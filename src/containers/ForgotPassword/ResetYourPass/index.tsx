// @ts-nocheck
import { Formik } from 'formik';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import s from './style.module.scss';

const ResetYourPass = () => {
  let navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.divLeft}></div>
      <div className={s.divCenter}>
        <div>
          <Formik
            initialValues={{ email: '' }}
            validate={(values) => {
              const errors = {};
              const email = document.getElementById('email');

              if (!values.email) {
                errors.email = 'Required email';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Please enter a valid email address.';
              }

              if (errors !== {}) {
                email.style.borderColor = 'red';
              } else {
                email.style.borderColor = '#E1E1E1';
              }

              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);
              navigate(`/reset-pass-link-has-been-sent`);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2>Reset your password</h2>
                <label>
                  Provide your email below and we will send you the instructions to reset your
                  password via an email.
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email address"
                />
                <HiOutlineMail className={s.iconEmail} size={18.5} color="#BDBDBD" />
                <span>{errors.email && touched.email && errors.email}</span>
                <button type="submit">Reset password</button>
                <label>
                  Got your password? <Link to="/login">Login</Link>{' '}
                </label>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className={s.divRight}></div>
    </div>
  );
};

export default ResetYourPass;
