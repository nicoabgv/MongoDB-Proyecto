const { check } = require('express-validator');

const validateResults = require('../utils/handleValidator');
const validatorRegister = [
    check("name").exists().isLength({ min: 3, max: 99 }),
    check("age").exists().isNumeric(),
    check("email").exists().isEmail(),
    check("password").exists().isLength({ min: 8, max: 16 }),
    (req, res, next) => {
        validateResults(req, res, next);
    }
];

const validatorLogin = [
    check("email").exists().isEmail(),
    check("password").exists().isLength({ min: 8, max: 16 }),
    (req, res, next) => {
        validateResults(req, res, next);
    }
];

module.exports = { validatorRegister, validatorLogin };