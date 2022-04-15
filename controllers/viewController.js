const Metal = require('../models/mettalurgicalModel');
const Pump = require('../models/pumpModel');

const catchAsync = require('../utils/catchAsync');

exports.getPumpData = catchAsync(async (req, res, next) => {
  const pumps = await Pump.find();
  res.status(200).render('index', {
    title: 'Pump Data',
    pumps
  });
});
exports.getPumpDetails = catchAsync(async (req, res, next) => {
  const pumps = await Pump.findOne({ slug: req.params.slug });
  res.status(200).render('pumpDetail', {
    title: 'Pump Details',
    pumps
  });
});
exports.getDimensionalData = (req, res) => {
  res.status(200).render('dimensional', {
    title: ' Dimensional Analysis'
  });
};
exports.getComponentPhotos = catchAsync(async (req, res, next) => {
  const pumps = await Pump.find();
  res.status(200).render('componentPhotos', {
    title: ' Photos',
    pumps
  });
});
exports.getMetallurigcalData = catchAsync(async (req, res, next) => {
  const pumps = await Pump.find();
  res.status(200).render('metallurgical', {
    title: 'Metallurgical Data',
    pumps
  });
});
exports.getLoginForm = (req, res) => {
  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "connect-src 'self' https://cdnjs.cloudflare.com"
    )
    .render('login', {
      title: 'Login'
    });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Account'
  });
};
exports.getTable = (req, res) => {
  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "connect-src 'self' https://cdnjs.cloudflare.com"
    )
    .render('table', {
      title: 'Table'
    });
};

exports.dataTable = catchAsync(async (req, res, next) => {
  const pumps = await Metal.find();
  res.status(200).render('datatable', {
    title: 'Pump Data',
    pumps
  });
});

exports.getCharts = catchAsync(async (req, res, next) => {
  const pumps = await Pump.find();
  res.status(200).render('chart', {
    title: 'Pump Data',
    pumps
  });
});

exports.getDataAnalytics = (req, res) => {
  res.status(200).render('widgets', {
    title: 'Data Analytics'
  });
};
