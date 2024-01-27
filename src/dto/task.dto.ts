import { IsString, IsNotEmpty, Length } from 'class-validator';

export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class CreateTaskDto {
    id?: string;
    title!: string;
    description!: string;
    status?: string
}

export class updateTaskDto {
    title?: string
    description?: string
    status?: TaskStatus
}