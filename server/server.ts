import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {
  getAllFavData,
  switchFavData,
  getFavData,
  LogInUser,
  createUser,
  createTicket,
  getReservations
} from './controllers';
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


//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

// reservation logic
app.post('/reservation', createTicket);
app.get('/reservation/:movieId', getReservations);


//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);
