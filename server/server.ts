import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { LogInUser, createUser } from './controllers/user.controller';
import { getGenres } from './controllers/genre.controller';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//post request
app.post('/register', createUser);
app.post('/login', LogInUser);

//get request
app.get('/genres', getGenres);

//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
