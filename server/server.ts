import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { LogInUser, createUser } from './controllers';
//import { LogIn, Register } from './controllers';

interface ReservationData {
  movieId: number,
  title: string,
  date: string,
  seats: string[],
  totalPrice: number
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
  const {movieId, title, date, seats, totalPrice}: ReservationData = req.body;

  console.log("Movie ID", movieId);
  console.log("Title", title);
  console.log("Date", date);
  console.log("Seats", seats);
  console.log("Total Price", totalPrice);

  res.status(201).json({message: "Reservation successful"});

});

//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
