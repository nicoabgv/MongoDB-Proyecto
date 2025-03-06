const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const { usersModel } = require("../models");

const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            handleHttpError(res, "NO_TOKEN", 401)
            console.log(req.headers)
            return
        }
    // Nos llega la palabra reservada Bearer (es un estandar) y el Token, asi que me quedo con la ultima parte
        const token = req.headers.authorization.split(" ").pop()
    // Del token, miramos el payload (revisar verifrToken en utils/handleJwt.js)
        const dataToken = await verifyToken(token)

        if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const user = await usersModel.findById(dataToken._id).checkRole([admin])
        req.user = user // Inyecto al user en la peticion
        next()
    }catch(err){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}

module.exports = { authMiddleware };