const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const userRoute = require('./routes/user.route.js');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware que permite a la aplicación Express interpretar datos de formularios
// enviados mediante el método POST en formato URL-encoded.
// "extended: false" indica que solo se permite el uso de cadenas y matrices 
// simples como valores, es decir, no permite objetos anidados o estructuras 
// complejas. Si se establece en "true", se puede utilizar el qs (querystring) 
// módulo para manejar estructuras más complejas.
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/users', userRoute);


app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenido a Express!!!' });
});

mongoose.connect('mongodb://localhost:27017/users_prueba')
    .then(() => {
        console.log('Conexion correcta!');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        
    })
    .catch(() => {
        console.log('Conexion fallida :-(')
    });
