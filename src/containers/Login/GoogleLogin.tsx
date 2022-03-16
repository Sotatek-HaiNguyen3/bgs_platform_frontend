import React from 'react';
import GoogleLogin from 'react-google-login';
import s from './style.module.scss';

const CustomGoogleLogin = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <div className={s.googleLoginContainer}>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        style={{
          width: '100%',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}
      />
    </div>
  );
};

export default CustomGoogleLogin;
