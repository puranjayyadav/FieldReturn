// const express = require('express');
// const conclusionController = require('../controllers/consclusionController');
// const authController = require('../controllers/authController');

// const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

// router
//   .route('/')
//   .get(conclusionController.getAllConclusion)
//   .post(
//     authController.restrictTo('user', 'admin'),
//     conclusionController.setConclusionIds,
//     conclusionController.createConclusion
//   );
// router
//   .route('/:id')
//   .get(conclusionController.getConclusion)
//   .delete(
//     authController.restrictTo('admin', 'user'),
//     conclusionController.deleteConclusion
//   )
//   .patch(
//     authController.restrictTo('admin', 'user'),
//     conclusionController.updateConclusion
//   );
// module.exports = router;
