const mongoose = require('mongoose');
const slugify = require('slugify');
const User = require('../models/userModel');
const Metal = require('../models/mettalurgicalModel');
//const validator = require('validator');

const pumpSchema = new mongoose.Schema(
  {
    pumpType: {
      type: String
      // required: [true, 'Please enter the type of pump'],
    },
    slug: String,
    serialNumber: {
      type: Number
      //required: [true, 'Please enter the type of pump'],
    },
    customer: {
      type: String,
      //required: true,
      unique: false,

      maxlength: [
        40,
        'You have exceeded the amount of characters for the supplier'
      ]
    },
    failureHours: {
      type: Number,
      //required: true,
      unique: false
    },
    complaintDescription: {
      type: String,
      //required: true,
      maxlength: [5000, 'Please limit the amount of words to 5000 characters']
    },
    OEM: {
      type: String,
      //required: true,
      maxlength: [10, 'Please limit the amount of characters to 10'],
      trim: true
    },

    images: [String]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

pumpSchema.index({ serialNumber: 1, failureHours: 1 });
pumpSchema.index({ slug: 1 });
// Virtual Populate
// pumpSchema.virtual('conclusion', {
//   ref: 'Conclusion',
//   foreignField: 'pump',
//   localField: '_id'
// });
//Works only on .save() and .create()
//this points to the currently processed document in the mongoose middleware terminology

// PRE OPERATIONS ON SCHEMAS
pumpSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'activeUser',
    select: '-__v -passwordChangedAt'
  });
  next();
});

// pumpSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'mettalurigcal',
//     select: '-__v'
//   });
//   next();
// });

pumpSchema.pre('save', function(next) {
  this.slug = slugify(this.pumpType, { lower: true });
  next();
});
// pumpSchema.pre('save', async function(next) {
//   const userPromises = this.activeUser.map(async id => await User.findById(id));
//   this.activeUser = await Promise.all(userPromises);
//   next();
// });

// -------------------------------------------------------- //
// //QUERY MIDDLEWARE
// pumpSchema.pre('find', function(next){

//   next();
// })

const Pump = mongoose.model('Pump', pumpSchema);

module.exports = Pump;
