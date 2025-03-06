const express = require("express");
const router = express.Router();
//Lo movemos a otro arhivo en utils (helpers)
const {uploadMiddleware, uploadMiddlewareMemory} = require("../utils/handleStorage");

const {createItem, uploadImage} = require("../controllers/storage");

//router.post("/", uploadMiddleware.single("image"), createItem);
router.post("/local", uploadMiddleware.single("image"), createItem);
router.post("/", uploadMiddlewareMemory.single("image"),    
    (err, req, res, next) => {
        console.log("Error capturado", err.code);
        res.status(400).send("Error capturado") //Gesion de errores en la subida de archivos (el archivo es muy pesado)
}, uploadImage);


module.exports = router;