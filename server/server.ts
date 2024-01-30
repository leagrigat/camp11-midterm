import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { getGenres } from './controllers/genre.controller';
import {
  getAllFavData,
  switchFavData,
  getFavData,
  logInUser,
  createUser,
  createTicket,
} from '../server/controllers/user.controller';
import { z } from 'zod';
import { validate } from './middleware/user.middleware';
import {
  loginSchema,
  registerSchema,
} from './schema/createLoginRegisterSchema';

//import { LogIn, Register } from './controllers';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//post request
app.post('/register', validate(registerSchema), createUser);
app.post('/login', validate(loginSchema), logInUser);
app.post('/reservation', createTicket);

//get request
app.get('/genres', getGenres);

//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);
