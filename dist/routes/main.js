"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskRouter_1 = __importDefault(require("./TaskRouter"));
const router = (0, express_1.Router)();
router.use('/task', TaskRouter_1.default);
router.use('/task/:id', (req, res) => {
});
exports.default = router;
