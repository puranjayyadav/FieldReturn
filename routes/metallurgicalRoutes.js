const express = require('express');
const metallurgicalController = require('../controllers/mettalurgicalController');
const AuthController = require('../controllers/authController');

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

router.route('/:id').get(metallurgicalController.getSpecificMetalurgicalData);
module.exports = router;
