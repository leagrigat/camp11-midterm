import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { getGenres } from './controllers/genre.controller';
import {
  getAllFavData,
  switchFavData,
  getFavData,
  LogInUser,
  createUser,
  createTicket,
} from '../server/controllers/user.controller';
import { validate } from './middleware/user.middleware';
import { loginSchema, userSchema } from './schema/createLoginSchema';
//import { LogIn, Register } from './controllers';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//post request
app.post('/register', validate(userSchema), createUser);
app.post('/login', validate(loginSchema), LogInUser);
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
