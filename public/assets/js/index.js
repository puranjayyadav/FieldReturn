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
    form.append('pumpType', document.getElementById('pumpType').value);
    form.append('serialNumber', document.getElementById('serialNumber').value);
    form.append('failureHours', document.getElementById('failureHours').value);
    form.append('customer', document.getElementById('Customer').value);
    form.append('OEM', document.getElementById('OEM').value);
    form.append('date', document.getElementById('Date').value);
    form.append('city', document.getElementById('city').value);
    form.append('state', document.getElementById('state').value);
    form.append('country', document.getElementById('country').value);
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
    form.append('ComplateLobes', document.getElementById('ComplateLobes').value);
    form.append('SlimFacePhoto', document.getElementById('SlimFacePhoto').value);
    form.append('ClawPhoto', document.getElementById('ClawPhoto').value);
    form.append('CrossDisk', document.getElementById('CrossDisk').value);
    form.append('DriveShaft', document.getElementById('DriveShaft').value);
    form.append('Roller', document.getElementById('Roller').value);
    form.append('SteelWasherHead', document.getElementById('SteelWasherHead').value);
    form.append('RollerRing', document.getElementById('RollerRing').value);
    form.append('Housing', document.getElementById('Housing').value);
    form.append('faliureSymptom', document.getElementById('faliureSymptom').value);
    form.append('hypothesis', document.getElementById('hypothesis').value);
    form.append('rootCauseAnalysis', document.getElementById('rootCauseAnalysis').value);
    form.append('correctiveAction', document.getElementById('correctiveAction').value);
    form.append('actionEffectivenessTracking', document.getElementById('actionEffectivenessTracking').value);



     for (let i = 0; i < 6; i++) {
      form.append('Images', document.getElementById('image').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('DimensionalRollerBallekitImages', document.getElementById('DimensionalRollerBallekitImages').files[i]);
    }
    for (let i = 0; i < 6; i++) {
      form.append('ComplateLobes', document.getElementById('ComplateLobes').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('SlimFacePhoto', document.getElementById('SlimFacePhoto').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('ClawPhoto', document.getElementById('ClawPhoto').files[i]);
    }
    for (let i = 0; i < 4; i++) {
      form.append('CrossDisk', document.getElementById('CrossDisk').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('DriveShaft', document.getElementById('DriveShaft').files[i]);
    }
    for (let i = 0; i < 4; i++) {
      form.append('Roller', document.getElementById('Roller').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('SteelWasherHead', document.getElementById('SteelWasherHead').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('RollerRing', document.getElementById('RollerRing').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append('Housing', document.getElementById('Housing').files[i]);
    }
     

    // form.append('NTZ', document.getElementById('ntz').files[0]);

    updateMetalData(form, 'data');
    // location.reload();
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
