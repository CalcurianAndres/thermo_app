const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// Rutas para usuarios
router.post('/', createUser);
router.get('/', getUsers);

module.exports = router;