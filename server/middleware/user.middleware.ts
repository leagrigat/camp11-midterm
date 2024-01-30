import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { loginSchema, userSchema } from '../schema/createLoginSchema';

/* export async function validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err) {
    return res.status(422).json(err);
  }
}
 */

//build type for schema
//callback function needs our try and catch block

export function validate<T>(schema: T) {
  console.log(schema);

  return (req: Request, res: Response, next: NextFunction) => {};
}
