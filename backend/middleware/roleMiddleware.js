const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const roleProtect = asyncHandler(async (req, res, next) => {
    const role = req.user.role

    if (req.user && req.user.role !== 'admin') {
        return res.status(403).json({
            message: 'No cuentas con permisos para realizar esta accion'
        });
    }
    next();
})

module.exports = {
    roleProtect
}