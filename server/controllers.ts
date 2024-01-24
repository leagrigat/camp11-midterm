import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import { create } from 'domain';

type Register = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

let REGISTER_NEW_USER: Register[] = [];

//Create new User
export const createUser = (req: Request, res: Response) => {
  const { firstName, lastName, email, password, passwordRepeat } = req.body;
  //hash the password before pushing to database
  const hashedPassword = bcrypt.hashSync(password, 10);
  //find existing user via email
  const existingUser = REGISTER_NEW_USER.find(user => user.email === email);

  //check if password matches
  if (password !== passwordRepeat) {
    return res.status(400).json({
      message: 'Password is not matching.',
    });
  }

  //check if user exists, if not push to database
  if (!existingUser) {
    REGISTER_NEW_USER.push({
      id: REGISTER_NEW_USER.length + 1,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      passwordRepeat: hashedPassword,
    });
    res.status(201).json({
      message: 'User has been registered.',
    });
  } else {
    res.status(409).json({
      message: 'User already exists.',
    });
  }
};

//logIn User
export const LogInUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = REGISTER_NEW_USER.find(user => user.email === email);

  //check if user exists than move on to password
  if (!existingUser) {
    return res.status(401).json({
      message: 'Login failed. Invalid credentials.',
    });
  }

  //check password
  const passwordMatches = bcrypt.compareSync(password, existingUser.password);

  if (passwordMatches) {
    res.status(200).json({
      message: 'User is logged in.',
    });
  } else {
    res.status(401).json({
      message: 'Login failed. Invalid credentials.',
    });
  }
  console.log(existingUser);
};
