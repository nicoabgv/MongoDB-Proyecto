const {check} = require("express-validator");

const handleValidationResult = require("../utils/handleValidator.js");
const validatorCreateItem = [
    check("name").exists().notEmpty(),
    //check("age").exists().notEmpty().withMessage("Falta la edad"),

    handleValidationResult
];

module.exports = {validatorCreateItem};