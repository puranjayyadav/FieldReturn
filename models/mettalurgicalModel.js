const mongoose = require('mongoose');
const slugify = require('slugify');
const User = require('../models/userModel');
//const validator = require('validator');

const metallurgicalData = new mongoose.Schema({
  CamplatecaseDepth: {
    type: Number,
    // required: [true, 'Please enter the case depth'],
    unique: false,
    trim: true

    //validator: [validator.isAlpha, 'Pump name can only contain characters']
  },
  slug: String,
  CamplateHardness: {
    type: Number,
    // required: [true, 'Please enter the type of pump'],
    unique: false,
    trim: true
  },
  WJC: {
    type: String
    //required: [true, 'Please enter the type of pump'],
  },
  CamplateRA: {
    type: Number,
    // required: true,
    unique: false,
    trim: true
  },
  finalStatus: {
    type: String
  },
  Images: [String],
  pumpType: {
    type: String
    // required: [true, 'Please enter the type of pump'],
  },
  serialNumber: {
    type: String
    //required: [true, 'Please enter the type of pump'],
  },
  customer: {
    type: String,
    //required: true,
    unique: false
  },
  failureHours: {
    type: String,
    //required: true,
    unique: false
  },
  complaintDescription: {
    type: String
    //required: true
  },
  complaintDescriptionBDS: {
    type: String
    //required: true
  },
  complaintDescriptionI: {
    type: String
    //required: true
  },
  OEM: {
    type: String,
    //required: true,

    trim: true
  },
  MFD: {
    type: String,
    //required: true,
    trim: true
  },
  KM: {
    type: String,
    //required: true,
    trim: true
  },
  BDS: {
    type: String,
    //required: true,
    trim: true
  },
  OECD: {
    type: String,
    //required: true,
    trim: true
  },
  FIP: {
    type: String,
    //required: true,
    trim: true
  },
  partsRecieved: {
    type: String,
    //required: true,
    trim: true
  },
  city: {
    type: String
    //required: true
  },
  state: {
    type: String
    // required: true
  },
  country: {
    type: String
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  date1: {
    type: Date,
    default: Date.now
  },
  date2: {
    type: Date,
    default: Date.now
  },
  date3: {
    type: Date,
    default: Date.now
  },
  date4: {
    type: Date,
    default: Date.now
  },
  date5: {
    type: Date,
    default: Date.now
  },
  date6: {
    type: Date,
    default: Date.now
  },
  date7: {
    type: Date,
    default: Date.now
  },
  date8: {
    type: Date,
    default: Date.now
  },
  date9: {
    type: Date,
    default: Date.now
  },
  date10: {
    type: Date,
    default: Date.now
  },
  PartName1: {
    type: String
  },
  PartName2: {
    type: String
  },
  PartName3: {
    type: String
  },
  PartName4: {
    type: String
  },
  PartName5: {
    type: String
  },
  PartName6: {
    type: String
  },
  PartName7: {
    type: String
  },
  PartName8: {
    type: String
  },
  PartName9: {
    type: String
  },
  PartName10: {
    type: String
  },
  characteristic1: {
    type: String
  },
  characteristic2: {
    type: String
  },
  characteristic3: {
    type: String
  },
  characteristic4: {
    type: String
  },
  characteristic5: {
    type: String
  },
  characteristic6: {
    type: String
  },
  characteristic7: {
    type: String
  },
  characteristic8: {
    type: String
  },
  characteristic9: {
    type: String
  },
  characteristic10: {
    type: String
  },
  specValue1: {
    type: String
  },
  specValue2: {
    type: String
  },
  specValue3: {
    type: String
  },
  specValue4: {
    type: String
  },
  specValue5: {
    type: String
  },
  specValue6: {
    type: String
  },
  specValue7: {
    type: String
  },
  specValue8: {
    type: String
  },
  specValue9: {
    type: String
  },
  specValue10: {
    type: String
  },
  unit1: {
    type: String
  },
  unit2: {
    type: String
  },
  unit3: {
    type: String
  },
  unit4: {
    type: String
  },
  unit5: {
    type: String
  },
  unit6: {
    type: String
  },
  unit7: {
    type: String
  },
  unit8: {
    type: String
  },
  unit9: {
    type: String
  },
  unit10: {
    type: String
  },
  min1: {
    type: String
  },
  min2: {
    type: String
  },
  min3: {
    type: String
  },
  min4: {
    type: String
  },
  min5: {
    type: String
  },
  min6: {
    type: String
  },
  min7: {
    type: String
  },
  min8: {
    type: String
  },
  min9: {
    type: String
  },
  min10: {
    type: String
  },
  max1: {
    type: String
  },
  max2: {
    type: String
  },
  max3: {
    type: String
  },
  max4: {
    type: String
  },
  max5: {
    type: String
  },
  max6: {
    type: String
  },
  max7: {
    type: String
  },
  max8: {
    type: String
  },
  max9: {
    type: String
  },
  max10: {
    type: String
  },
  actualValue1: {
    type: String
  },

  actualValue2: {
    type: String
  },
  actualValue3: {
    type: String
  },
  actualValue4: {
    type: String
  },
  actualValue5: {
    type: String
  },
  actualValue6: {
    type: String
  },
  actualValue7: {
    type: String
  },
  actualValue8: {
    type: String
  },
  actualValue9: {
    type: String
  },
  actualValue10: {
    type: String
  },
  delta1: {
    type: String
  },
  delta2: {
    type: String
  },
  delta3: {
    type: String
  },
  delta4: {
    type: String
  },
  delta5: {
    type: String
  },
  delta6: {
    type: String
  },
  delta7: {
    type: String
  },
  delta8: {
    type: String
  },
  delta9: {
    type: String
  },
  delta10: {
    type: String
  },
  remark1: {
    type: String
  },
  remark2: {
    type: String
  },
  remark3: {
    type: String
  },
  remark4: {
    type: String
  },
  remark5: {
    type: String
  },
  remark6: {
    type: String
  },
  remark7: {
    type: String
  },
  remark8: {
    type: String
  },
  remark9: {
    type: String
  },
  remark10: {
    type: String
  },
  dateClosing: {
    type: Date,
    default: Date.now
  },
  DimensionalCamplateCamptaper: {
    type: String
  },
  DimensionalCamplateTPI: {
    type: String
  },
  DimensionalCamplateCamProfile: {
    type: String
  },
  camPhoto: [String],
  DimensionalCamplateRZMax: {
    type: String
  },
  DimensionalCamplateRZMin: {
    type: String
  },
  DimensionalRollerSphericity: {
    type: String
  },
  DimensionalRollerLineProfile: {
    type: String
  },
  DimensionalRolleRunout: {
    type: String
  },
  DimensionalRollerBallekit: {
    type: String
  },
  DimensionalRollerBallekitImages: [String],
  DimensionalCrossDiscClawValue1: {
    type: String
  },
  DimensionalCrossDiscClawValue2: {
    type: String
  },
  DimensionalCrossDiscClawValue3: {
    type: String
  },
  DimensionalCrossDiscClawValue4: {
    type: String
  },
  DimensionalPerpendicularity1: {
    type: String
  },
  DimensionalPerpendicularity2: {
    type: String
  },
  DimensionalVaneHeight1: {
    type: String
  },
  DimensionalVaneHeight2: {
    type: String
  },
  DimensionalVaneHeight3: {
    type: String
  },
  DimensionalVaneHeight4: {
    type: String
  },
  DimensionalVaneHeightEC1: {
    type: String
  },
  DimensionalVaneHeightEC2: {
    type: String
  },
  DimensionalRollerSlotHeight1: {
    type: String
  },
  DimensionalRollerSlotHeight2: {
    type: String
  },
  DimensionalRollerSlotHeight3: {
    type: String
  },
  DimensionalRollerSlotHeight4: {
    type: String
  },
  DimensionalRollerSlotHeight5: {
    type: String
  },
  DimensionalRollerSlotHeight6: {
    type: String
  },
  DimensionalRollerSlotHeight7: {
    type: String
  },
  DimensionalRollerSlotHeight8: {
    type: String
  },
  DimensionalRollerSlotWidth1: {
    type: String
  },
  DimensionalRollerSlotWidth2: {
    type: String
  },
  DimensionalRollerSlotWidth3: {
    type: String
  },
  DimensionalRollerSlotWidth4: {
    type: String
  },
  DimensionalRollerSlotWidth5: {
    type: String
  },
  DimensionalRollerSlotWidth6: {
    type: String
  },
  DimensionalRollerSlotWidth7: {
    type: String
  },
  DimensionalRollerSlotWidth8: {
    type: String
  },
  DimensionalRollerHeight1: {
    type: String
  },
  DimensionalRollerHeight2: {
    type: String
  },
  DimensionalRollerHeight3: {
    type: String
  },
  DimensionalRollerHeight4: {
    type: String
  },
  HousingBoreConcentricity: {
    type: String
  },
  FeederBoreRunout: {
    type: String
  },
  ComplateLobes: [String],
  SlimFacePhoto: [String],
  ClawPhoto: [String],
  CrossDisk: [String],
  Roller: [String],
  DriveShaft: [String],
  SteelWasherHead: [String],
  RollerRing: [String],
  Housing: [String],
  faliureSymptom: {
    type: String
  },
  hypothesis: {
    type: String
  },
  rootCauseAnalysis: {
    type: String
  },
  correctiveAction: {
    type: String
  },
  actionEffectivenessTracking: {
    type: String
  },
  registrationNumber: {
    type: String
  }
});

// //QUERY MIDDLEWARE
// pumpSchema.pre('find', function(next){

//   next();
// })

metallurgicalData.pre('save', function(next) {
  this.slug = slugify(this.registrationNumber, { lower: true });
  next();
});

const Metal = mongoose.model('Metal', metallurgicalData);

module.exports = Metal;
