import { Router } from "express";
import { validateRequest } from "../middleware/validate.middleware";
import { CreateTaskDto } from "../dto/task.dto";
import { deleteTaskHandler, getTaskHandler, postTaskHandler, updateTaskHandler } from "../handlers/postTaskHandler";

const taskRouter = Router();

taskRouter.post("/", postTaskHandler);
taskRouter.get("/", getTaskHandler);
taskRouter.put("/:id", updateTaskHandler);
taskRouter.delete("/:id", deleteTaskHandler);

export default taskRouter;