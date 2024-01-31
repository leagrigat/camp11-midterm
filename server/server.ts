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
  getUserData,
  createTicket,
  changeUserData,
  getReservations,
} from '../server/controllers/user.controller';
import cookieParser from 'cookie-parser';
import { validate } from './middleware/user.middleware';
import {
  loginSchema,
  registerSchema,
} from './schema/createLoginRegisterSchema';
import { profileSchema } from './schema/profileSchema';

//import { LogIn, Register } from './controllers';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());

//post request
app.post('/register', validate(registerSchema), createUser);
app.post('/login', validate(loginSchema), logInUser);

//secure
app.post('/reservation', isAuth, createTicket);

//get request
app.get('/genres', getGenres);

//user profile
//secure
app.get('/user/:userId', getUserData);
app.put('/user/:userId', validate(profileSchema), changeUserData);

//start server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

// reservation logic
app.post('/reservation', createTicket);
app.get('/reservation/:movieId', getReservations);

//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);
