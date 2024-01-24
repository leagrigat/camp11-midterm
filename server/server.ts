import express from 'express';
import 'dotenv/config';
import cors from 'cors';
//import { LogIn, Register } from './controllers';

//serverport
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//route logIn Page
app.get('/', (req, res, next) => {
  res.json({ success: 'Yay we are best' });
});

//route register Page
app.get('/register', (req, res, next) => {
  res.json({ success: 'Yay we are best' });
});

app.listen(PORT, () => {
  console.log('port is running');
});
