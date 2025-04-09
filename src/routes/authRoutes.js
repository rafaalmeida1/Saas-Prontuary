const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../utils/auth');

// Public routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Protected routes - require authentication
router.get('/profile', verifyToken, authController.getProfile);
router.put('/profile', verifyToken, authController.updateProfile);
router.post('/change-password', verifyToken, authController.changePassword);

module.exports = router;
