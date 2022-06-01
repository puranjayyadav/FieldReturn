/* eslint-disable */

import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (employeeNumber, password) => {
  console.log(employeeNumber, password);
  axios.defaults.withCredentials = true;

  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: { employeeNumber, password },
      withCredentials: true //correct
    });
    if (res.data.status === 'success') {
      //
      showAlert('success', 'Logged in Succesfully');
      window.setTimeout(() => {
        location.assign('/metallurgical');
      }, 1000);
    }
  } catch (err) {
    showAlert('danger', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    showAlert('danger', 'Error logging out! Try again later');
  }
};

// document
//   .querySelector('.card-body')
//   .getElementsByTagName('.login-button', () => {
//     alert('hi');
//   });
