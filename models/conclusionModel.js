const mongoose = require('mongoose');

const conclusionSchema = new mongoose.Schema(
  {
    faliureSymptom: {
      type: String,
      required: [true, ' A failutre Symptom can not be empty']
    },
    hypothesis: {
      type: String,
      required: [true, ' A hypothesis can not be empty']
    },
    rootCauseAnalysis: {
      type: String,
      required: [true, ' A root cause analysis can not be empty']
    },
    correctiveAction: {
      type: String,
      required: [true, ' A corrective action can not be empty']
    },
    actionEffectivenessTracking: {
      type: String,
      required: [true, ' A action effectiveness tracking can not be empty']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    pump: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pump',
      required: [true, ' A Conclusion must belong to a pump']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, ' A Conclusion must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
conclusionSchema.index({ pump: 1, user: 1 }, { unique: true });
conclusionSchema.pre(/^find/, function(next) {
  //   this.populate({
  //     path: 'pump',
  //     select: 'pumpType , serialNumber'
  //   })
  this.populate({
    path: 'user',
    select: 'name employeeNumber '
  });
  next();
});

const Conclusion = mongoose.model('Conclusion', conclusionSchema);
module.exports = Conclusion;
