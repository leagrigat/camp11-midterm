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
  getUserData,
  createTicket,
  changeUserData,
} from '../server/controllers/user.controller';
//import { LogIn, Register } from './controllers';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//post request
app.post('/register', createUser);
app.post('/login', LogInUser);
app.post('/reservation', createTicket);

//get request
app.get('/genres', getGenres);

//user profile
app.get('/user/:userId', getUserData);
app.put('/user/:userId', changeUserData);

//start server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);
