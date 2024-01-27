"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validateRequest = (type) => {
    return async (req, res, next) => {
        try {
            const data = (0, class_transformer_1.plainToClass)(type, req.body);
            const errors = await (0, class_validator_1.validate)(data);
            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }
            req.body = data;
            next();
        }
        catch (error) {
            return res.status(500).json({ error: 'Error en la validación' });
        }
    };
};
exports.validateRequest = validateRequest;
