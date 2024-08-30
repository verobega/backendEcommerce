const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    nombreProducto: {
        type: String,
        required: [true, 'Escribe el nombre del producto'],
    },
    precio: {
        type: Number,
        required: [true, 'Escribe el precio del producto'],
    },
    cantidad: {
        type: Number,
        required: [true, 'Escribe la cantidad del producto'],
    },
    total: {
        type: Number,
        required: [true, 'Escribe el total del pedido'],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Pedido', pedidoSchema)