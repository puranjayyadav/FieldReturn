/* eslint-disable */
import axios from 'axios';
import { showAlert } from '/alerts';

// export const updateData = async (name, email) => {
//   try {
//     const res = await axios({
//       method: 'PATCH',
//       url: 'http://localhost:3000/api/v1/users/updateMe',
//       data: {
//         name
//       }
//     });
//     if (res.data.status === 'success') {
//       showAlert('success', 'Profile updated successfully');
//     }
//   } catch (err) {
//     showAlert('danger', err.response.data.message);
//   }
// };
export const updateMetalData = async (
  data
) => {

  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/metallurgical',
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Metal data updated successfully');
      console.log(res.data)
      // window.setTimeout(() => {
      //   location.assign('/metallurgical');
      // }, 1000);
    }
  } catch (err) {
    console.log(err.response.data.message)
    showAlert('danger', err.response.data.message);
  }
};

export const updatePumpData = async (data) => {

  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/pump',
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Pump data upladed successfully');
      console.log(res.data)
      // window.setTimeout(() => {
      //   location.assign('/metallurgical');
      // }, 1000);
    }
  } catch (err) {
    console.log(data.body)
    console.log(err.response.data.message)
    showAlert('danger', err.response.data.message);
  }
};
