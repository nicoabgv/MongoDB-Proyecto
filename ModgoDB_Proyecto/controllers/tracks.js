const { tracksModel } = require("../models");

/**
* Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = async (req, res) => {
    console.log(req);
    const data = await tracksModel.find();
    res.json(data);   
}
    
const getItem = (req, res) => {"/"}
const createItem = (req, res) => {"/:id"}
const updateItem = (req, res) => {}
const deleteItem = async (req, res) => {
    const data = await tracksModel.delete({_id:id});
}
    

    
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
