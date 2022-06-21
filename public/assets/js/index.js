/* eslint-disable */

import { login, logout } from './custom';
import '@babel/polyfill';
import { updateData, updateMetalData, updatePumpData } from './updateSettings';

const loginForm = document.querySelector('.form-group.login-button');
const logOutBtn = document.querySelector('.text-danger')
const userdataFrom = document.querySelector('.btn.btn-primary');
const updateMetalDataForm = document.querySelector('.updateMetal');
const finalform = document.querySelector('.btn.btn-primary.finalform'); //Metal FOrm Data Update

if (loginForm)
  loginForm.addEventListener('click', e => {
    e.preventDefault();
    const employeeNumber = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(employeeNumber, password);
  });

 

// if (userdataFrom)
//   userdataFrom.addEventListener('click', e => {
//     e.preventDefault();
//     const name = document.getElementById('firstname').value;
//     const email = document.getElementById('email').value;
//     updateData(name, email);
//   });

if (updateMetalDataForm)
  updateMetalDataForm.addEventListener('click', e => {
    e.preventDefault();
    const form = new FormData(); 
    //form.append('CamplateHardness', document.getElementById('hardness').value);
    form.append('MFD', document.getElementById('MFD').value);
    form.append('WJC', document.getElementById('WJC').value);
    form.append('customer', document.getElementById('customer').value);
    form.append('KM', document.getElementById('KM').value);
    form.append('date', document.getElementById('Date').value);
    form.append('DateClosing', document.getElementById('DateClosing').value);
    form.append('BDS', document.getElementById('BDS').value);
    form.append('OECD', document.getElementById('OECD').value);
    form.append('partsRecieved', document.getElementById('partsRecieved').value);
    form.append('FIP', document.getElementById('FIP').value);
    form.append('complaintDescription', document.getElementById('complaintDescription').value);
    form.append('complaintDescriptionBDS', document.getElementById('complaintDescriptionBDS').value);
    form.append('complaintDescriptionI', document.getElementById('complaintDescriptionI').value);
    form.append('finalStatus', document.getElementById('finalStatus').value);



    form.append('DimensionalCamplateCamptaper', document.getElementById('DimensionalCamplateCamptaper').value);
    form.append('DimensionalCamplateTPI', document.getElementById('DimensionalCamplateTPI').value);
    form.append('DimensionalCamplateCamProfile', document.getElementById('DimensionalCamplateCamProfile').value);
    form.append('DimensionalCamplateRZMax', document.getElementById('DimensionalCamplateRZMax').value);
    form.append('DimensionalCamplateRZMin', document.getElementById('DimensionalCamplateRZMin').value);
    form.append('DimensionalRollerSphericity', document.getElementById('DimensionalRollerSphericity').value);
    form.append('DimensionalRollerLineProfile', document.getElementById('DimensionalRollerLineProfile').value);
    form.append('DimensionalRolleRunout', document.getElementById('DimensionalRolleRunout').value);
    form.append('DimensionalCrossDiscClawValue1', document.getElementById('DimensionalCrossDiscClawValue1').value);
    form.append('DimensionalCrossDiscClawValue2', document.getElementById('DimensionalCrossDiscClawValue2').value);
    form.append('DimensionalCrossDiscClawValue3', document.getElementById('DimensionalCrossDiscClawValue3').value);
    form.append('DimensionalCrossDiscClawValue4', document.getElementById('DimensionalCrossDiscClawValue4').value);
    form.append('DimensionalPerpendicularity1', document.getElementById('DimensionalPerpendicularity1').value);
    form.append('DimensionalPerpendicularity2', document.getElementById('DimensionalPerpendicularity2').value);
    form.append('DimensionalVaneHeight1', document.getElementById('DimensionalVaneHeight1').value);
    form.append('DimensionalVaneHeight2', document.getElementById('DimensionalVaneHeight2').value);
    form.append('DimensionalVaneHeight3', document.getElementById('DimensionalVaneHeight3').value);
    form.append('DimensionalVaneHeight4', document.getElementById('DimensionalVaneHeight4').value);
    form.append('DimensionalVaneHeightEC1', document.getElementById('DimensionalVaneHeightEC1').value);
    form.append('DimensionalVaneHeightEC2', document.getElementById('DimensionalVaneHeightEC2').value);
     form.append('FeederBoreRunout', document.getElementById('FeederBoreRunout').value);
    form.append('HousingBoreConcentricity', document.getElementById('HousingBoreConcentricity').value);
    form.append('DimensionalRollerSlotHeight1', document.getElementById('DimensionalRollerSlotHeight1').value);
    form.append('DimensionalRollerSlotHeight2', document.getElementById('DimensionalRollerSlotHeight2').value);
    form.append('DimensionalRollerSlotHeight3', document.getElementById('DimensionalRollerSlotHeight3').value);
    form.append('DimensionalRollerSlotHeight4', document.getElementById('DimensionalRollerSlotHeight4').value);
    form.append('DimensionalRollerSlotHeight5', document.getElementById('DimensionalRollerSlotHeight5').value);
    form.append('DimensionalRollerSlotHeight6', document.getElementById('DimensionalRollerSlotHeight6').value);
    form.append('DimensionalRollerSlotHeight7', document.getElementById('DimensionalRollerSlotHeight7').value);
    form.append('DimensionalRollerSlotHeight8', document.getElementById('DimensionalRollerSlotHeight8').value);
    form.append('DimensionalRollerSlotWidth1', document.getElementById('DimensionalRollerSlotWidth1').value);
    form.append('DimensionalRollerSlotWidth2', document.getElementById('DimensionalRollerSlotWidth2').value);
    form.append('DimensionalRollerSlotWidth3', document.getElementById('DimensionalRollerSlotWidth3').value);
    form.append('DimensionalRollerSlotWidth4', document.getElementById('DimensionalRollerSlotWidth4').value);
    form.append('DimensionalRollerSlotWidth5', document.getElementById('DimensionalRollerSlotWidth5').value);
    form.append('DimensionalRollerSlotWidth6', document.getElementById('DimensionalRollerSlotWidth6').value);
    form.append('DimensionalRollerSlotWidth7', document.getElementById('DimensionalRollerSlotWidth7').value);
    form.append('DimensionalRollerSlotWidth8', document.getElementById('DimensionalRollerSlotWidth8').value);
    form.append('DimensionalRollerHeight1', document.getElementById('DimensionalRollerHeight1').value);
    form.append('DimensionalRollerHeight2', document.getElementById('DimensionalRollerHeight2').value);
    form.append('DimensionalRollerHeight3', document.getElementById('DimensionalRollerHeight3').value);
    form.append('DimensionalRollerHeight4', document.getElementById('DimensionalRollerHeight4').value);
   



     for (let i = 0; i < 6; i++) {
      form.append('Images', document.getElementById('image').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('DimensionalRollerBallekitImages', document.getElementById('DimensionalRollerBallekitImages').files[i]);
    }
    
     

    // form.append('NTZ', document.getElementById('ntz').files[0]);

    updateMetalData(form, 'data');
    location.reload();
  });

if (finalform)
  finalform.addEventListener('click', e => {
    e.preventDefault();
    const form = new FormData();

    form.append('pumpType', document.getElementById('pumpType').value);
    form.append('serialNumber', document.getElementById('serialNumber').value);

    //  for (let i = 0; i < 6; i++) {
    //   form.append('images', document.getElementById('image').files[i]);
    // }
    for (let key of form.entries()) {
      console.log(key[0], key[1]);
    }
     
    updatePumpData(form, 'data');
  });
