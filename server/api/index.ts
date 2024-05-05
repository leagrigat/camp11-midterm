import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getGenres } from '../controllers/genre.controller';
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
} from '../controllers/user.controller';
import { validate } from '../middleware/user.middleware';
import {
  loginSchema,
  registerSchema,
} from '../schema/createLoginRegisterSchema';

import { isAuth } from '../middleware/auth.middleware';
import { checkAuth } from '../controllers/checkAuth';
import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreExpressHandler } from '@edgestore/server/adapters/express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { profileSchema } from '../schema/profileSchema';

// List of allowed origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://cinescape.vercel.app'
];

// CORS options
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true,
};

//serverport
const PORT = process.env.PORT;
const app = express();
const es = initEdgeStore.create();
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket().beforeDelete(({ ctx, fileInfo }) => {
    console.log('beforeDelete', ctx, fileInfo);
    return true; // allow delete
  }),
});

export type EdgeStoreRouter = typeof edgeStoreRouter;

const handler = createEdgeStoreExpressHandler({
  router: edgeStoreRouter,
});

//Middleware
app.use(express.json());

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

// check server health
app.get("/", (req, res) => res.send("Express on Vercel"));

//checkAuth
app.get('/checkAuth', checkAuth);

//post request
app.post('/register', validate(registerSchema), createUser);
app.post('/login', validate(loginSchema), logInUser);

//secure
app.post('/reservation', isAuth, createTicket);

//get request
app.get('/genres', getGenres);

//user profile
//secure
app.get('/user', isAuth, getUserData);
app.put('/user', isAuth, validate(profileSchema), changeUserData);

// reservation logic
app.get('/reservation/:movieId', getReservations);

//bookmarked movies logic
app.get('/movies/:movieId', getFavData);
app.post('/movies/:movieId', switchFavData);
app.delete('/movies/:movieId', switchFavData);
app.get('/bookmarked-movies', getAllFavData);

//edgestore router
app.get('/edgestore/*', handler);
app.post('/edgestore/*', handler);
app.delete('/edgestore/*', handler);

//start server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

module.exports = app;
