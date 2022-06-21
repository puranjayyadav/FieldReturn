const express = require('express');
const viewsController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/login', viewsController.getLoginForm);

router.use(authController.isLoggedIn);
router.get('/', viewsController.getPumpData);

router.get('/dimensional', viewsController.getDimensionalData);
router.get('/componentphotos', viewsController.getComponentPhotos);

router.get('/metallurgical', viewsController.getMetallurigcalData);
router.get('/metallurgicals/:slug', viewsController.getPumpDetails);
router.get('/account', viewsController.getAccount);
router.get('/table', viewsController.getTable);
router.get('/datatable', viewsController.dataTable);
router.get('/charts', viewsController.getCharts);
router.get('/analysis ', viewsController.getDataAnalytics);
module.exports = router;
