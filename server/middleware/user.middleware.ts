import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { loginSchema, userSchema } from '../schema/createLoginSchema';

export function validate<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(422).json(err);
    }
  };
}
