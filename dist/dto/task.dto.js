"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskDto = exports.CreateTaskDto = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["DONE"] = "DONE";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
class updateTaskDto {
}
exports.updateTaskDto = updateTaskDto;
