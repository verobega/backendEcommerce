const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor escribe tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Por favor escribe tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Por favor escribe una contraseña"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: [true, "Por favor escribe el rol de usuario"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)