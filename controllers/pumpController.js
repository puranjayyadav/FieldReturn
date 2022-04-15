const multer = require('multer');
const sharp = require('sharp');
const Pump = require('../models/pumpModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const authController = require('../controllers/authController');
const Conclusion = require('../models/conclusionModel');
const factory = require('./handlerFactory');

exports.getAllConclusions = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.pumpId) filter = { pump: req.params.pumpId };
  const conclusions = await Conclusion.find(filter);
  res.status(200).json({
    status: 'success',
    results: conclusions.length,
    data: {
      conclusions
    }
  });
});

exports.getAllPumpValues = catchAsync(async (req, res) => {
  const features = new APIFeatures(Pump.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const pumps = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: pumps.length,
    data: {
      pumps
    }
  });
});
exports.getSpecPumpValue = factory.getOne(Pump, { path: 'conclusion' });

exports.createPumpData = factory.createOne(Pump);

exports.updatePump = factory.updateOne(Pump);

exports.deletePumpData = factory.deleteOne(Pump);
// exports.deletePumpData = catchAsync(async (req, res) => {
//   const pump = await Pump.findByIdAndDelete(req.params.id);
//   if (!pump) {
//     return next(new AppError('No pump found with that id', 404));
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload an image', 400), false);
  }
};
const uploadMetalPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});
exports.uploadPhoto = uploadMetalPhoto.fields([
  { name: 'images', maxCount: 3 }
]);

exports.resize = catchAsync(async (req, res, next) => {
  if (!req.files.images) return next();

  // FOR SINGLE FILE UPLOADS TO THE DATABSE
  //   req.body.Images = `Images-${Date.now()}.jpeg`;
  //   await sharp(req.files.CamplateMircostructurePhoto.buffer)
  //     .resize(500, 500)
  //     .toFormat('jpeg')
  //     .jpeg({ quality: 90 })
  //     .toFile(`public/img/mettalurgical/${req.file.filename}`);
  //   next();
  // });

  // FOR MULTIPLE FILES UPLOAD TO THE DATABSE
  console.log('Resize body');
  console.log(req.files);
  req.body.Images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `Pump-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/pump/${filename}`);

      req.body.images.push(filename);
    })
  );
  console.log(req.body);

  next();
});
