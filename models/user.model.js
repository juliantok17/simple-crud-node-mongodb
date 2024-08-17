const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, 'Por favor introduzca su nombre de pila']
        },
        email:{
            type: String,
            required:[true,'Ingrese su email']
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;