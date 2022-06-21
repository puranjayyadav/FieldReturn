const multer = require('multer');
const sharp = require('sharp');
const Metal = require('../models/mettalurgicalModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/mettalurgical');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${Date.now()}.jpeg`);
//   }
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
  { name: 'Images', maxCount: 6 },
  { name: 'DimensionalRollerBallekitImages', maxCount: 2 },
  { name: 'ComplateLobes', maxCount: 6 },
  { name: 'SlimFacePhoto', maxCount: 2 },
  { name: 'ClawPhoto', maxCount: 2 },
  { name: 'CrossDisk', maxCount: 4 },
  { name: 'DriveShaft', maxCount: 2 },
  { name: 'Roller', maxCount: 4 },
  { name: 'SteelWasherHead', maxCount: 2 },
  { name: 'RollerRing', maxCount: 2 },
  { name: 'Housing', maxCount: 2 }
]);

exports.resize = catchAsync(async (req, res, next) => {
  if (!req.files.Images) return next();

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
  // req.body.DimensionalRollerBallekitImages = [];
  // req.body.ComplateLobes = [];
  // req.body.SlimFacePhoto = [];
  // req.body.ClawPhoto = [];
  // req.body.CrossDisk = [];
  // req.body.DriveShaft = [];
  // req.body.Roller = [];
  // req.body.SteelWasherHead = [];
  // req.body.RollerRing = [];
  // req.body.Housing = [];

  await Promise.all(
    req.files.Images.map(async (file, i) => {
      const filename = `Metallurigcal-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/mettalurgical/${filename}`);

      req.body.Images.push(filename);
    })
  );
  // await Promise.all(
  //   req.files.DimensionalRollerBallekitImages.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.DimensionalRollerBallekitImages.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.ComplateLobes.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.ComplateLobes.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.SlimFacePhoto.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.SlimFacePhoto.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.ClawPhoto.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.ClawPhoto.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.CrossDisk.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.CrossDisk.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.DriveShaft.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.DriveShaft.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.Roller.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.Roller.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.SteelWasherHead.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.SteelWasherHead.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.RollerRing.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.RollerRing.push(filename);
  //   })
  // );

  // await Promise.all(
  //   req.files.Housing.map(async (file, i) => {
  //     const filename = `BallekitImages-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`public/img/dimensional/${filename}`);

  //     req.body.Housing.push(filename);
  //   })
  // );

  console.log(req.files);
  next();
});

exports.createMetalurgicalData = factory.createOne(Metal);
exports.getMetalurgicalData = factory.getAll(Metal);
exports.getSpecificMetalurgicalData = factory.getOne(Metal);
