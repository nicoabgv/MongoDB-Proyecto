const { storageModel } = require("../models");
const { uploadToPinata } = require("../utils/handleUploadIPFS");

const createItem = async (req, res) => {
    const {body, file} = req;
    const fileData = {
        filename: file.filename,
        url : process.env.PUBLIC_URL + "/" + file.filename
    }
    const data = await storageModel.create(fileData);
    res.send(data);
    res.send("Archivo subido");
}

const uploadImage = async (req, res) => {
    try {
        const id = req.params.id
        const fileBuffer = req.file.buffer
        const fileName = req.file.originalname
        const pinataResponse = await uploadToPinata(fileBuffer, fileName)
        const ipfsFile = pinataResponse.IpfsHash
        const ipfs = `https://${process.env.PINATA_GATEWAY_URL}/ipfs/${ipfsFile}`
        const data = await storageModel.create({_id: id}, {url: ipfs}, {new: true})
        res.send(data)
    }catch(err){
        console.log(err)
        res.status(500).send("ERROR_UPLOAD_COMPANY_IMAGE")
    }
}

module.exports = {createItem, uploadImage};
