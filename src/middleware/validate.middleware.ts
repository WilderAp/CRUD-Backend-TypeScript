import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const validateRequest = (type: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = plainToClass(type, req.body);
      const errors = await validate(data);

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      req.body = data;
      next();
    } catch (error) {
      return res.status(500).json({ error: 'Error en la validación' });
    }
  };
};
