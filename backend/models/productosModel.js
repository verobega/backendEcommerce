const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Escribe el nombre del producto'],
    },
    precio: {
        type: Number,
        required: [true, 'Escribe el precio del producto'],
    },
    categoria: {
        type: String,
        required: [true, 'Escribe la categoria del producto'],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Producto', productoSchema)