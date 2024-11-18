module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log('Un nuevo cliente se ha conectado');

        socket.on('disconnect', () => {
            console.log('Un cliente se ha desconectado');
        });

        // Emitir el nuevo usuario creado a todos los clientes conectados
        socket.on('newUser', (user) => {
            console.log('Nuevo usuario creado:', user);
            io.emit('userCreated', user);  // Enviar a todos los sockets conectados
        });
    });
};