const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("file:" ,file);
        const pathStorage = __dirname+"/../storage";
        callback(null, pathStorage);
    },
    filename: function (req, file, callback) {
        //console.log("file", file);
        const ext = file.originalname.split(".").pop(); //me quedo con el el ultimo valor, elimino el primero (este caso: image)
        const no_ext = file.originalname.split(".").reverse().pop(); // le doy la lvuelta para eliminar el primero (este caso: png)
        const filename = no_ext+"-"+Date.now()+"."+ext;
        //const filename = "file-"+Date.now()+"."+ext;

        callback(null, filename);
    }
});

const uploadMiddleware = multer({storage, limits: { fileSize: 5 * 1024 }}) //Middleware entre la ruta y el controlador

const memory = multer.memoryStorage();
const uploadMiddlewareMemory = multer({storage: memory, limits: {fileSize: 5 * 1024 }});

module.exports = {uploadMiddleware, uploadMiddlewareMemory};