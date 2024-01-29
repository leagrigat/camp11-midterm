import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {
  getAllFavData,
  switchFavData,
  getFavData,
  LogInUser,
  createUser,
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
  console.log(`server is running at port ${PORT}`);
});

//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);
