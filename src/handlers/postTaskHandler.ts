import { Request, Response } from "express";
import {postTask, getTask, updateTask, deleteTask } from "../controllers/postTask";
import { CreateTaskDto, updateTaskDto } from "../dto/task.dto";


const postTaskHandler = async (req: Request, res: Response) => {
    const task: any = req.body;
    console.log(task);
    
    try {        
        const tasks = await postTask(task);
        tasks.length ? res.status(200).json(tasks) : res.status(400).send("No se pudo crear la tarea, debe contener un titulo y una descripción");
    } catch (error) {        
        return res.status(500).json(error)
    }
};

const getTaskHandler =async (req: Request, res: Response) => {
    try {
        const tasks = await getTask()
        tasks ? res.status(200).json(tasks) : res.status(400).send("No se pudo encontar ningúna tarea")
    } catch (error) {
        return res.status(500).json(error)
    }
};

const updateTaskHandler =async (req: Request, res: Response) => {
    const {id} = req.params;
    const updatedFields: updateTaskDto = req.body;
    try {
        const task = await updateTask(id, updatedFields);
        task ? res.status(200).json(task) : res.status(400).send("No fue posible actualizar la tarea");
    } catch (error) {
        return res.status(500).json(error)
    }
};

const deleteTaskHandler =async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const tasks = deleteTask(id);
        tasks ? res.status(200).send(tasks) : res.status(400).send("No se pudo eliminar la tarea");
    } catch (error) {
        return res.status(500).json(error);
    }
}

export {
    postTaskHandler,
    getTaskHandler,
    updateTaskHandler,
    deleteTaskHandler
}

