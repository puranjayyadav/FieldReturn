// const express = require('express');
// const multer = require('multer');
// const pumpController = require('../controllers/pumpController');
// const conclusionController = require('../controllers/consclusionController');
// const metaalurgicalController = require('../controllers/mettalurgicalController');

// const router = express.Router();
// const authController = require('../controllers/authController');
// const conclusionRouter = require('../routes/conclusionRoutes');

// const upload = multer();
// // router.param('id', tourController.checkID);

// // router
// //   .route('/top-5-cheap')
// //   .get(tourController.aliasTopTours, tourController.getAllTours);

// // router.route('/tour-stats').get(tourController.getTourStats);
// // router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

// router
//   .route('/')
//   .get(authController.protect, pumpController.getAllPumpValues)
//   .post(pumpController.createPumpData);

// router
//   .route('/:id')
//   .get(pumpController.getSpecPumpValue)
//   .patch(authController.protect, pumpController.updatePump)
//   .delete(
//     authController.protect,
//     authController.restrictTo('admin', 'HR'),
//     pumpController.deletePumpData
//   );

// //METALLURGICAL REQUEST
// // router
// //   .route('/:pumpId/conclusion')
// //   .post(
// //     authController.protect,
// //     authController.restrictTo('user'),
// //     conclusionController.createConclusion
// //   );

// module.exports = router;
