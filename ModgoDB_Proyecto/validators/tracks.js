const {check} = require("express-validator");

const handleValidationResult = require("../utils/handleValidator.js");
const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),

    handleValidationResult
];

module.exports = {validatorCreateItem};