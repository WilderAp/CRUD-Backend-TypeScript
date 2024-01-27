import { Router, Request, Response } from 'express';
import taskRouter from './TaskRouter';

const router = Router();

router.use('/task', taskRouter);

router.use('/task/:id', (req: Request, res: Response) => {
});

export default router;