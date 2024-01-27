import { v4 } from "uuid";
import { updateTaskDto } from "../dto/task.dto";

enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
}

interface Task {
    id: string,
    title: string,
    description: string,
    status: TaskStatus
}

let tareas: Task[] = [];

const postTask = (task: Task): Task[] => {
    const tarea = {
        id: v4(),
        title: task.title,
        description: task.description,
        status: TaskStatus.PENDING,
    }
    console.log(tarea);
    if (tarea.title && tarea.description) {
        tareas.push(tarea)  
        return tareas;
    } else {
        throw new Error("La tarea debe contener un titulo y una descripción");
    }
};

const getTask = () => {
    try {
        return tareas;    
        
    } catch (error) {
        throw new Error("Error al devolver las tareas");
    }
};

const getTaskById = (id: string) => {
   return tareas.find(task => task.id === id);
};

const updateTask = (id: string, updatedFields: updateTaskDto) => {
    try {
        const task = getTaskById(id);
        if (task) {
            const updatedTask = Object.assign(task, updatedFields);
            tareas = tareas.map(task => task.id === id ? updatedTask : task);
            return tareas;
        }
    } catch (error) {
        throw new Error("No se pudo actualizar la tarea");
    }
};

const deleteTask = (id: string) => {
    const task = getTaskById(id);
    try {
        tareas = tareas.filter(task => task.id !== id);
        return tareas;
    } catch (error) {
        throw new Error("No se pudo eliminar la tarea con id:" + id);
    }
}
        
    
    


export {
    postTask,
    getTask,
    updateTask,
    deleteTask
};