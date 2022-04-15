const express = require('express');
const userController = require('./../controllers/userController');
const AuthController = require('./../controllers/authController');

const router = express.Router();

router.post('/forgotPassword', AuthController.forgotPassword);
router.patch('/resetPassword/:token', AuthController.resetPassword);
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

router.use(AuthController.protect);

router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
router.patch('/updateMyPassword', AuthController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);

router.use(AuthController.restrictTo('admin'));
router.route('/').get(userController.getAllUsers);
// router.route('/').get(userController.getAllUsers).post(userController.createUser);
// router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
