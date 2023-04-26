/* eslint-disable */
import { login, logout } from './custom';
import '@babel/polyfill';
import { updateData, updateMetalData, updatePumpData } from './updateSettings';

const loginForm = document.querySelector('.form-group.login-button');
const logOutBtn = document.querySelector('.text-danger');
const userdataFrom = document.querySelector('.btn.btn-primary');
const updateMetalDataForm = document.querySelector('.updateMetal');
const finalform = document.querySelector('.btn.btn-primary.finalform'); //Metal FOrm Data Update
const updateDataFINAL = document.querySelector('.updateData');

if (loginForm)
  loginForm.addEventListener('click', e => {
    e.preventDefault();
    const employeeNumber = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(employeeNumber, password);
  });

if (updateDataFINAL)
  updateDataFINAL.addEventListener('click', e => {
    e.preventDefault();
    const remark1 = document.getElementById('remark1').value;
    const PartName1 = document.getElementById('PartName1').value;
    const characteristic1 = document.getElementById('characteristic1').value;
    const specValue1 = document.getElementById('specValue1').value;
    const unit1 = document.getElementById('unit1').value;
    const max1 = document.getElementById('max1').value;
    const min1 = document.getElementById('min1').value;
    const actualValue1 = document.getElementById('actualValue1').value;
    const delta1 = document.getElementById('delta1').value;

    const remark2 = document.getElementById('remark2').value;
    const PartName2 = document.getElementById('PartName2').value;
    const characteristic2 = document.getElementById('characteristic2').value;
    const specValue2 = document.getElementById('specValue2').value;
    const unit2 = document.getElementById('unit2').value;
    const max2 = document.getElementById('max2').value;
    const min2 = document.getElementById('min2').value;
    const actualValue2 = document.getElementById('actualValue2').value;
    const delta2 = document.getElementById('delta2').value;

    const remark3 = document.getElementById('remark3').value;
    const PartName3 = document.getElementById('PartName3').value;
    const characteristic3 = document.getElementById('characteristic3').value;
    const specValue3 = document.getElementById('specValue3').value;
    const unit3 = document.getElementById('unit3').value;
    const max3 = document.getElementById('max3').value;
    const min3 = document.getElementById('min3').value;
    const actualValue3 = document.getElementById('actualValue3').value;
    const delta3 = document.getElementById('delta3').value;

    const remark4 = document.getElementById('remark4').value;
    const PartName4 = document.getElementById('PartName4').value;
    const characteristic4 = document.getElementById('characteristic4').value;
    const specValue4 = document.getElementById('specValue4').value;
    const unit4 = document.getElementById('unit4').value;
    const max4 = document.getElementById('max4').value;
    const min4 = document.getElementById('min4').value;
    const actualValue4 = document.getElementById('actualValue4').value;
    const delta4 = document.getElementById('delta4').value;

    const remark5 = document.getElementById('remark5').value;
    const PartName5 = document.getElementById('PartName5').value;
    const characteristic5 = document.getElementById('characteristic5').value;
    const specValue5 = document.getElementById('specValue5').value;
    const unit5 = document.getElementById('unit5').value;
    const max5 = document.getElementById('max5').value;
    const min5 = document.getElementById('min5').value;
    const actualValue5 = document.getElementById('actualValue5').value;
    const delta5 = document.getElementById('delta5').value;

    const HydHead = document.getElementById('HydHead').value;
    const SpringClass = document.getElementById('SpringClass').value;
    const RollerRing = document.getElementById('RollerRing').value;
    const feedgroving = document.getElementById('feedgroving').value;
    const remark6 = document.getElementById('remark6').value;
    const PartName6 = document.getElementById('PartName6').value;
    const characteristic6 = document.getElementById('characteristic6').value;
    const specValue6 = document.getElementById('specValue6').value;
    const unit6 = document.getElementById('unit6').value;
    const max6 = document.getElementById('max6').value;
    const min6 = document.getElementById('min6').value;
    const actualValue6 = document.getElementById('actualValue6').value;
    //const delta6 = document.getElementById('delta6').value;

    const remark7 = document.getElementById('remark7').value;
    const PartName7 = document.getElementById('PartName7').value;
    const characteristic7 = document.getElementById('characteristic7').value;
    const specValue7 = document.getElementById('specValue7').value;
    const unit7 = document.getElementById('unit7').value;
    const max7 = document.getElementById('max7').value;
    const min7 = document.getElementById('min7').value;
    const actualValue7 = document.getElementById('actualValue7').value;
    const delta7 = document.getElementById('delta7').value;

    updateData(
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
      HydHead,
      SpringClass,
      RollerRing,
      feedgroving,
      remark6,
      PartName6,
      characteristic6,
      specValue6,
      unit6,
      max6,
      min6,
      actualValue6,
      //delta6
      remark7,
      PartName7,
      characteristic7,
      specValue7,
      unit7,
      max7,
      min7,
      actualValue7,
      delta7
    );
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
    form.append(
      'partsRecieved',
      document.getElementById('partsRecieved').value
    );
    form.append('FIP', document.getElementById('FIP').value);
    form.append(
      'complaintDescription',
      document.getElementById('complaintDescription').value
    );
    form.append(
      'complaintDescriptionBDS',
      document.getElementById('complaintDescriptionBDS').value
    );
    form.append(
      'complaintDescriptionI',
      document.getElementById('complaintDescriptionI').value
    );
    form.append('finalStatus', document.getElementById('finalStatus').value);
    form.append(
      'registrationNumber',
      document.getElementById('registrationNumber').value
    );

    form.append(
      'DimensionalCamplateCamptaper',
      document.getElementById('DimensionalCamplateCamptaper').value
    );
    form.append(
      'DimensionalCamplateTPI',
      document.getElementById('DimensionalCamplateTPI').value
    );
    form.append(
      'DimensionalCamplateCamProfile',
      document.getElementById('DimensionalCamplateCamProfile').value
    );
    form.append(
      'DimensionalCamplateRZMax',
      document.getElementById('DimensionalCamplateRZMax').value
    );
    form.append(
      'DimensionalCamplateRZMin',
      document.getElementById('DimensionalCamplateRZMin').value
    );
    form.append(
      'DimensionalRollerSphericity',
      document.getElementById('DimensionalRollerSphericity').value
    );
    form.append(
      'DimensionalRollerLineProfile',
      document.getElementById('DimensionalRollerLineProfile').value
    );
    form.append(
      'DimensionalRolleRunout',
      document.getElementById('DimensionalRolleRunout').value
    );
    form.append(
      'DimensionalCrossDiscClawValue1',
      document.getElementById('DimensionalCrossDiscClawValue1').value
    );
    form.append(
      'DimensionalCrossDiscClawValue2',
      document.getElementById('DimensionalCrossDiscClawValue2').value
    );
    form.append(
      'DimensionalCrossDiscClawValue3',
      document.getElementById('DimensionalCrossDiscClawValue3').value
    );
    form.append(
      'DimensionalCrossDiscClawValue4',
      document.getElementById('DimensionalCrossDiscClawValue4').value
    );
    form.append(
      'DimensionalPerpendicularity1',
      document.getElementById('DimensionalPerpendicularity1').value
    );
    form.append(
      'DimensionalPerpendicularity2',
      document.getElementById('DimensionalPerpendicularity2').value
    );
    form.append(
      'DimensionalVaneHeight1',
      document.getElementById('DimensionalVaneHeight1').value
    );
    form.append(
      'DimensionalVaneHeight2',
      document.getElementById('DimensionalVaneHeight2').value
    );
    form.append(
      'DimensionalVaneHeight3',
      document.getElementById('DimensionalVaneHeight3').value
    );
    form.append(
      'DimensionalVaneHeight4',
      document.getElementById('DimensionalVaneHeight4').value
    );
    form.append(
      'DimensionalVaneHeightEC1',
      document.getElementById('DimensionalVaneHeightEC1').value
    );
    form.append(
      'DimensionalVaneHeightEC2',
      document.getElementById('DimensionalVaneHeightEC2').value
    );
    form.append(
      'FeederBoreRunout',
      document.getElementById('FeederBoreRunout').value
    );
    form.append(
      'HousingBoreConcentricity',
      document.getElementById('HousingBoreConcentricity').value
    );
    form.append(
      'DimensionalRollerSlotHeight1',
      document.getElementById('DimensionalRollerSlotHeight1').value
    );
    form.append(
      'DimensionalRollerSlotHeight2',
      document.getElementById('DimensionalRollerSlotHeight2').value
    );
    form.append(
      'DimensionalRollerSlotHeight3',
      document.getElementById('DimensionalRollerSlotHeight3').value
    );
    form.append(
      'DimensionalRollerSlotHeight4',
      document.getElementById('DimensionalRollerSlotHeight4').value
    );
    form.append(
      'DimensionalRollerSlotHeight5',
      document.getElementById('DimensionalRollerSlotHeight5').value
    );
    form.append(
      'DimensionalRollerSlotHeight6',
      document.getElementById('DimensionalRollerSlotHeight6').value
    );
    form.append(
      'DimensionalRollerSlotHeight7',
      document.getElementById('DimensionalRollerSlotHeight7').value
    );
    form.append(
      'DimensionalRollerSlotHeight8',
      document.getElementById('DimensionalRollerSlotHeight8').value
    );
    form.append(
      'DimensionalRollerSlotWidth1',
      document.getElementById('DimensionalRollerSlotWidth1').value
    );
    form.append(
      'DimensionalRollerSlotWidth2',
      document.getElementById('DimensionalRollerSlotWidth2').value
    );
    form.append(
      'DimensionalRollerSlotWidth3',
      document.getElementById('DimensionalRollerSlotWidth3').value
    );
    form.append(
      'DimensionalRollerSlotWidth4',
      document.getElementById('DimensionalRollerSlotWidth4').value
    );
    form.append(
      'DimensionalRollerSlotWidth5',
      document.getElementById('DimensionalRollerSlotWidth5').value
    );
    form.append(
      'DimensionalRollerSlotWidth6',
      document.getElementById('DimensionalRollerSlotWidth6').value
    );
    form.append(
      'DimensionalRollerSlotWidth7',
      document.getElementById('DimensionalRollerSlotWidth7').value
    );
    form.append(
      'DimensionalRollerSlotWidth8',
      document.getElementById('DimensionalRollerSlotWidth8').value
    );
    form.append(
      'DimensionalRollerHeight1',
      document.getElementById('DimensionalRollerHeight1').value
    );
    form.append(
      'DimensionalRollerHeight2',
      document.getElementById('DimensionalRollerHeight2').value
    );
    form.append(
      'DimensionalRollerHeight3',
      document.getElementById('DimensionalRollerHeight3').value
    );
    form.append(
      'DimensionalRollerHeight4',
      document.getElementById('DimensionalRollerHeight4').value
    );

    for (let i = 0; i < 6; i++) {
      form.append('Images', document.getElementById('image').files[i]);
    }
    for (let i = 0; i < 2; i++) {
      form.append(
        'DimensionalRollerBallekitImages',
        document.getElementById('DimensionalRollerBallekitImages').files[i]
      );
    }

    // form.append('NTZ', document.getElementById('ntz').files[0]);

    updateMetalData(form, 'data');
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
