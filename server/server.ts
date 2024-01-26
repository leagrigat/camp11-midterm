import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { LogInUser, createUser, createTicket } from './controllers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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

//start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
