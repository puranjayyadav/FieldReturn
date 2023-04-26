const express = require('express');
const metallurgicalController = require('../controllers/mettalurgicalController');
const AuthController = require('../controllers/authController');
const viewsController = require('../controllers/viewController');
const handled = require('../controllers/handlerFactory.js');
const router = express.Router();
router.use(AuthController.protect);

router
  .route('/')
  .post(
    metallurgicalController.uploadPhoto,
    metallurgicalController.resize,
    metallurgicalController.createMetalurgicalData
  )
  .get(metallurgicalController.getMetalurgicalData);
router
  .route('/:id')
  .get(metallurgicalController.getSpecificMetalurgicalData)
  .patch(metallurgicalController.updateSpecificMetaldata);

router.route('/:id/report').get(metallurgicalController.getReportData);
// router.patch('/submit-investigation-data', viewsController.updateInvestData);
module.exports = router;
