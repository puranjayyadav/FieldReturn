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
    type: String,
    //required: true
  },
  complaintDescriptionBDS: {
    type: String,
    //required: true
  },
  complaintDescriptionI: {
    type: String,
    //required: true
  },
  OEM: {
    type: String,
    //required: true,
<<<<<<< HEAD
    trim: true
=======
>>>>>>> 9f118fdbd9c215eced9f8e1a925b883495ba6ea1
  },
  MFD: {
    type: String,
    //required: true,
<<<<<<< HEAD
    trim: true
=======
>>>>>>> 9f118fdbd9c215eced9f8e1a925b883495ba6ea1
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
  }
});

// //QUERY MIDDLEWARE
// pumpSchema.pre('find', function(next){

//   next();
// })

metallurgicalData.pre('save', function(next) {
  this.slug = slugify(this.WJC, { lower: true });
  next();
});

const Metal = mongoose.model('Metal', metallurgicalData);

module.exports = Metal;
