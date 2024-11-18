const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("La variable de entorno MONGO_URI no está definida.");
        }

        // Conexión a MongoDB sin las opciones deprecadas
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);  // Terminar el proceso si hay un error en la conexión
    }
};

module.exports = connectDB;