import { AUTH_LOGIN, AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCESS } from './types';

const authLoginAction = (loginData: any) => ({
  type: AUTH_LOGIN,
  loginData
});

const authLoginSuccessAction = (payload: any) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload
});

const authLoginFailedAction = (payload: any) => ({
  type: AUTH_LOGIN_FAILED,
  payload
});

export { authLoginAction, authLoginSuccessAction, authLoginFailedAction };
