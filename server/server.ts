import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { LogInUser, createUser } from './controllers';
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
