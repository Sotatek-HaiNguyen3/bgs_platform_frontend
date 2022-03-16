// @ts-nocheck
import { Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './style.module.scss';

const SentLinkPass = () => {
  let navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.divLeft}></div>
      <div className={s.divCenter}>
        <div>
          <Formik
            initialValues={{ code1: '', code2: '', code3: '', code4: '', code5: '', code6: '' }}
            validate={(values) => {
              const errors = {};

              if (
                !values.code1 ||
                !values.code2 ||
                !values.code3 ||
                !values.code4 ||
                !values.code5 ||
                !values.code6
              ) {
                errors.code1 = 'Please enter the verification code.';
              }

              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);
              navigate(`/new-pass`);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2>Reset password link has been sent.</h2>
                <label>
                  A reset password link has been sent to{' '}
                  <label className={s.nameEmail}>gbs@gmail.com</label> with a verification code.
                  Enter that 6-digit verification code here to proceed.
                </label>
                <div className={s.inputCode}>
                  <input
                    type="text"
                    name="code1"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code1}
                  />
                  <input
                    type="text"
                    name="code2"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code2}
                  />
                  <input
                    type="text"
                    name="code3"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code3}
                  />
                  <input
                    type="text"
                    name="code4"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code4}
                  />
                  <input
                    type="text"
                    name="code5"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code5}
                  />
                  <input
                    type="text"
                    name="code6"
                    maxLength={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code6}
                  />
                </div>
                <span>{errors.code1 && touched.code1 && errors.code1}</span>
                <label>
                  Didn't get the code? <Link to="/sent-code">Resend code</Link>{' '}
                </label>
                <button type="submit">Continue</button>
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

export default SentLinkPass;
