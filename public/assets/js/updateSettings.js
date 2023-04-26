/* eslint-disable */

{
  var url = window.location.href;
  var parts = url.split('/');
  var last_part = parts[parts.length - 1];
}
import axios from 'axios';
import '@babel/polyfill';

import { showAlert } from 'alerts';

export const updateData = async (
  remark1,
  PartName1,
  characteristic1,
  specValue1,
  unit1,
  max1,
  min1,
  actualValue1,
  delta1,
  remark2,
  PartName2,
  characteristic2,
  specValue2,
  unit2,
  max2,
  min2,
  actualValue2,
  delta2,
  remark3,
  PartName3,
  characteristic3,
  specValue3,
  unit3,
  max3,
  min3,
  actualValue3,
  delta3,
  remark4,
  PartName4,
  characteristic4,
  specValue4,
  unit4,
  max4,
  min4,
  actualValue4,
  delta4,
  remark5,
  PartName5,
  characteristic5,
  specValue5,
  unit5,
  max5,
  min5,
  actualValue5,
  delta5,
  remark6,
  PartName6,
  characteristic6,
  specValue6,
  unit6,
  max6,
  min6,
  actualValue6,
  //delta6,
  HydHead,
  SpringClass,
  RollerRing,
  feedgroving,
  remark7,
  PartName7,
  characteristic7,
  specValue7,
  unit7,
  max7,
  min7,
  actualValue7,
  delta7
) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/metallurgical/' + last_part,
      data: {
        remark1,
        PartName1,
        characteristic1,
        specValue1,
        unit1,
        max1,
        min1,
        actualValue1,
        delta1,
        remark2,
        PartName2,
        characteristic2,
        specValue2,
        unit2,
        max2,
        min2,
        actualValue2,
        delta2,
        remark3,
        PartName3,
        characteristic3,
        specValue3,
        unit3,
        max3,
        min3,
        actualValue3,
        delta3,
        remark4,
        PartName4,
        characteristic4,
        specValue4,
        unit4,
        max4,
        min4,
        actualValue4,
        delta4,
        remark5,
        PartName5,
        characteristic5,
        specValue5,
        unit5,
        max5,
        min5,
        actualValue5,
        delta5,
        remark6,
        PartName6,
        characteristic6,
        specValue6,
        unit6,
        max6,
        min6,
        actualValue6,
        //delta6,
        HydHead,
        SpringClass,
        RollerRing,
        feedgroving,
        remark7,
        PartName7,
        characteristic7,
        specValue7,
        unit7,
        max7,
        min7,
        actualValue7,
        delta7
      }
    });

    //console.log(data)

    if (res.status === 'success') {
      showAlert('success', 'Profile updated successfully');
      window.location.reload(); // Add this line to reload the page
      // console.log(res.data)
    }
  } catch (err) {
    //showAlert('danger', err.response.data.message);
    console.log(err.response.data.message);
  }
};

export const updateMetalData = async data => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/metallurgical',
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Metal data updated successfully');
      console.log(res.data);
      // window.setTimeout(() => {
      //   location.assign('/metallurgical');
      // }, 1000);
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert('danger', err.response.data.message);
  }
};

export const updatePumpData = async data => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/pump',
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Pump data upladed successfully');
      console.log(res.data);
      // window.setTimeout(() => {
      //   location.assign('/metallurgical');
      // }, 1000);
    }
  } catch (err) {
    console.log(data.body);
    console.log(err.response.data.message);
    showAlert('danger', err.response.data.message);
  }
};
