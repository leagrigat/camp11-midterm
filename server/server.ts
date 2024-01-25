import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { LogInUser, createUser } from './controllers';
//import { LogIn, Register } from './controllers';

interface ReservationData {
  movieId: number,
  title: string,
  movie: string,
  date: string,
  time: string,
  seat: string[],
  price: number
}

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//post request
app.post('/register', createUser);
app.post('/login', LogInUser);

// route reservation
app.post('/reservation', (req, res, next) => {
  const {movieId, title, date, time, seat, price}: ReservationData = req.body;

  console.log("Movie ID:", movieId);
  console.log("Title:", title);
  console.log("Date:", date);
  console.log("Time:", time);
  console.log("Seats:", seat);
  console.log("Total Price:", price);

  res.status(201).json({message: "Reservation successful"});
});

//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
