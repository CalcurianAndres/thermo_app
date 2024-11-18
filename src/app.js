require('dotenv').config();  // Cargar las variables del archivo .env

// src/app.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./services/db');
const userRoutes = require('./routes/userRoutes');
const path = require('path');  // Para manejar rutas de archivos estáticos
const cors = require('cors')

const app = express();
const server = http.createServer(app);

// Conectar a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS 
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Configurar sockets con CORS 
const io = socketIo(server,
    {
        cors: {
            origin: '*', // Permitir todas las solicitudes CORS para Socket.IO 
            methods: ['GET', 'POST']
        }
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Configurar sockets
require('./sockets/socketService')(io);

// Puerto de escucha
const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});