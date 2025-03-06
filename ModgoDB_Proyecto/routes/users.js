
const express = require('express')
const {getItem, getItems, updateItem, createItem, deleteItem} = require ('../controllers/users.js')

const userRouter = express.Router();

const { validatorCreateItem } = require("../validators/users.js");

userRouter.get('/', getItems);
userRouter.get('/:email', getItem);
userRouter.post('/', createItem);
userRouter.put('/:email', (req, res) => {
    console.log(req.params);
    updateItem(req, res);
});
userRouter.delete('/:email', deleteItem);

//userRouter.post("/", validatorCreateItem, createItem);

module.exports = userRouter;
