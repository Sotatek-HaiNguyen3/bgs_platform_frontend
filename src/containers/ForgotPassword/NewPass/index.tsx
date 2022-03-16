// @ts-nocheck
import React, { useState } from 'react';
import s from './style.module.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewPass = () => {
  let navigate = useNavigate();
  const [checkToggle, setCheckToggle] = useState('password');

  const onTogglePass = () => {
    console.log(132);
    if (checkToggle == 'password') {
      setCheckToggle('text');
    } else {
      setCheckToggle('password');
    }
  };

  return (
    <div className={s.container}>
      <div className={s.divLeft}></div>
      <div className={s.divCenter}>
        <div>
          <Formik
            initialValues={{ password: '', password2: '' }}
            validate={(values) => {
              const errors = {};

              if (!values.password) {
                errors.password = 'Password cannot be blank.';
              } else if (values.password.length < 8) {
                errors.password = 'Password must have at least 8 characters.';
              } else if (values.password.search(/[0-9]/) == -1) {
                errors.password = 'Password must have at least 1 number.';
              } else if (values.password.search(/[a-z]/) == -1) {
                errors.password = 'Password must have at least 1 small letter.';
              } else if (values.password.search(/[A-Z]/) == -1) {
                errors.password = 'Password must have at least 1 uppercase letter.';
              } else if (values.password.search(/[!\@\#\$\%\^\&\(\)\_\+\.\,\;\:]/) == -1) {
                errors.password = 'Password must have at least 1 special character.';
              }

              if (values.password != values.password2) {
                errors.password2 = 'Password does not match.';
              }

              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);
              // navigate(`/reset-pass-link-has-been-sent`);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2>Enter a new password</h2>
                <label>
                  Enter your new password. The new password must meet the below requirements:
                </label>
                <ul className={s.listCondition}>
                  <li> Must not be the same as the previous password</li>
                  <li>Contain at least a lowercase character and a uppercase character</li>
                  <li>
                    Contain at least one numeric, one symbol, and must have at least 8 characters.
                  </li>
                </ul>
                <input
                  type={checkToggle}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Password"
                />
                <AiOutlineEye
                  onClick={onTogglePass}
                  className={s.iconEye}
                  size={18.5}
                  color="#BDBDBD"
                />
                <span>{errors.password && touched.password && errors.password}</span>
                <input
                  type="password"
                  name="password2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Confirm password"
                />
                <span>{errors.password2 && touched.password2 && errors.password2}</span>
                <button type="submit">Confirm</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className={s.divRight}></div>
    </div>
  );
};

export default NewPass;
