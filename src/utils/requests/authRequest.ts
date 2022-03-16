import axios from 'axios';

import removeToken from '../auth/remove-token';
import getToken from '../auth/get-token';

const base = (method: any, url: any, data?: any, other: any = {}) =>
  new Promise(async (resolve, reject) => {
    const { headers = {}, options = {} } = other;
    const requestConfig = {
      method,
      data,
      url,
      headers: {
        Authorization: getToken(),
        Accept: 'application/json, text/plain, */*',
        ...headers
      },
      ...options
    };

    try {
      const response = await axios(requestConfig);
      resolve(response);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        removeToken();
        window.location.reload();
      }
      reject(error);
    }
  });

const authRequest: any = {};
['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
  authRequest[method] = (props: any) => base(method.toUpperCase(), { ...props });
});

export default authRequest;
