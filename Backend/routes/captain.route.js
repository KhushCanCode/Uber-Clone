const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const {body} =require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color should be at least 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Type')

], captainController.registerCaptain);


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Invalid Password')

], captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain ,captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;