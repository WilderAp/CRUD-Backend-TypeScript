"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.postTask = void 0;
const uuid_1 = require("uuid");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["DONE"] = "DONE";
})(TaskStatus || (TaskStatus = {}));
let tareas = [];
const postTask = (task) => {
    const tarea = {
        id: (0, uuid_1.v4)(),
        title: task.title,
        description: task.description,
        status: TaskStatus.PENDING,
    };
    console.log(tarea);
    if (tarea.title && tarea.description) {
        tareas.push(tarea);
        return tareas;
    }
    else {
        throw new Error("La tarea debe contener un titulo y una descripción");
    }
};
exports.postTask = postTask;
const getTask = () => {
    try {
        return tareas;
    }
    catch (error) {
        throw new Error("Error al devolver las tareas");
    }
};
exports.getTask = getTask;
const getTaskById = (id) => {
    return tareas.find(task => task.id === id);
};
const updateTask = (id, updatedFields) => {
    try {
        const task = getTaskById(id);
        if (task) {
            const updatedTask = Object.assign(task, updatedFields);
            tareas = tareas.map(task => task.id === id ? updatedTask : task);
            return tareas;
        }
    }
    catch (error) {
        throw new Error("No se pudo actualizar la tarea");
    }
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    const task = getTaskById(id);
    try {
        tareas = tareas.filter(task => task.id !== id);
        return tareas;
    }
    catch (error) {
        throw new Error("No se pudo eliminar la tarea con id:" + id);
    }
};
exports.deleteTask = deleteTask;
