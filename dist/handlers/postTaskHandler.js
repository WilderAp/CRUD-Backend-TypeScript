"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskHandler = exports.updateTaskHandler = exports.getTaskHandler = exports.postTaskHandler = void 0;
const postTask_1 = require("../controllers/postTask");
const postTaskHandler = async (req, res) => {
    const task = req.body;
    console.log(task);
    try {
        const tasks = await (0, postTask_1.postTask)(task);
        tasks.length ? res.status(200).json(tasks) : res.status(400).send("No se pudo crear la tarea, debe contener un titulo y una descripción");
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.postTaskHandler = postTaskHandler;
const getTaskHandler = async (req, res) => {
    try {
        const tasks = await (0, postTask_1.getTask)();
        tasks ? res.status(200).json(tasks) : res.status(400).send("No se pudo encontar ningúna tarea");
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getTaskHandler = getTaskHandler;
const updateTaskHandler = async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;
    try {
        const task = await (0, postTask_1.updateTask)(id, updatedFields);
        task ? res.status(200).json(task) : res.status(400).send("No fue posible actualizar la tarea");
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.updateTaskHandler = updateTaskHandler;
const deleteTaskHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = (0, postTask_1.deleteTask)(id);
        tasks ? res.status(200).send(tasks) : res.status(400).send("No se pudo eliminar la tarea");
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.deleteTaskHandler = deleteTaskHandler;
