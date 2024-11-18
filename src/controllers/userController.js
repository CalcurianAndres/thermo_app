const User = require('../models/userModel');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    const { name, email, password } = req.body;


    try {
        let user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear usuario', error: err.message });
    }
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: err.message });
    }
};

module.exports = { createUser, getUsers };